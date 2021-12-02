import { Icon } from 'semantic-ui-react'
import axios from 'axios'
import { useParams } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { Formik, Field } from 'formik';




function ItemListaEndereco(props) {
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [numeroEndereco, setNumeroEndereco] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [destinatario, setDestinatario] = useState(null)
    const { id } = useParams()
    let endereco = props.endereco.clienteEnderecoKey.endereco


    const excluir = (idend) => {
        axios.delete("http://localhost:8080/clienteEndereco/DeleteEndereco/" + id + "/" + idend)
            .then((response) => {
                props.att(response)
            })
    }


    function buscaCep() {
        const value = cep;

        const cepbusc = value?.replace(/[^0-9]/g, '');

        if (cepbusc?.length !== 8) {
            return;
        }

        fetch(`https://viacep.com.br/ws/${cepbusc}/json/`)
            .then((res) => res.json())
            .then((data) => {
                setRua(data.logradouro);
                setBairro(data.bairro);
                setCidade(data.localidade);
                setEstado(data.uf);
            });

    }

    const alterarEnd = (idend) => {
        let endereco =
        {
            "estado": estado != "" ? estado : null,
            "cidade": cidade != "" ? cidade : null,
            "bairro": bairro != "" ? bairro : null,
            "rua": rua != "" ? rua : null,
            "cep": cep != "" ? cep : null,
            "numero": numeroEndereco != "" ? numeroEndereco : null,
            "complemento": complemento != "" ? complemento : null,
            "ponto_referencia": "",
            "destinatario": destinatario != "" ? destinatario : null
        }
        axios.put("http://localhost:8080/Endereco/" + idend, endereco)
            .then((response) => {
                props.att(response)

            })
    }
    const tornarPrincipal = (idend) => {
        axios.put("http://localhost:8080/clienteEndereco/EndPrincipal/" + id + "/" + idend)
            .then((response) => {
                props.att(response)
            })
    }

    const tornarEntrega = (idend) => {
        axios.put("http://localhost:8080/clienteEndereco/EndEntrega/" + id + "/" + idend)
            .then((response) => {
                props.att(response)
            })
    }

    return (
        <>
            <div className="row align-items-center">
                <div className="col-3 ">
                    {endereco.destinatario}
                </div>
                <div className="col-6 ">
                    <div className="">
                        <p>{endereco.rua}, {endereco.numero} {endereco.complemento}, {endereco.bairro} - {endereco.cidade} - {endereco.estado}</p>
                    </div>
                    <div className="d-flex justify-content-evenly align-items-center text-center">

                        <input type="radio" checked={props.endereco.enderecoPrincipal} onChange={() => { tornarPrincipal(endereco.id_endereco) }} />Endereço de Cobrança
                        <input type="radio" checked={props.endereco.enderecoEntrega} onChange={() => { tornarEntrega(endereco.id_endereco) }} />Endereço de Entrega
                    </div>

                </div>
                <div className="col-3 ">
                    <a className=" cursorPointer" data-bs-toggle="modal" data-bs-target={"#editModal" + endereco.id_endereco}>
                        <Icon name="edit" className="icon-menucentral" />
                        Editar        </a>
                    <span className="separadoritemListaEndereco">|</span>
                    <a onClick={() => { excluir(endereco.id_endereco) }} className=" cursorPointer">
                        <Icon name="trash" className="icon-menucentral" />
                        Excluir        </a>
                </div>
            </div>
            <hr />
            <div class="modal fade" id={"editModal" + endereco.id_endereco} tabindex="-1" aria-labelledby="editModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Alterar Endereco</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <Formik>
                                <div className="" >

                                    <ul className="lista-checkout-total">

                                        <li className="">



                                            <ul className="lista-carrinho-total">

                                                <div className="row">
                                                    <div className="col-3">
                                                        <label>* CEP </label>
                                                        <Field type="text" id="cep" name="cep" onChange={(ev) => setCep(ev.target.value)} value={cep} className="form-control input-cep" data-js="cep" placeholder={endereco.cep} required />
                                                    </div>
                                                    <div class="col-3 d-flex flex-column justify-content-end">
                                                        <button type="button" onClick={() => buscaCep()} class="btn btn-secondary" >Buscar</button>
                                                    </div>

                                                </div>

                                                <div className="row ">
                                                    <div className="col-9 ">
                                                        <label>* Rua </label>
                                                        <Field type="text" className="form-control input-endereco" name="logradouro" id="logradouro" placeholder={endereco.rua} onChange={(event) => { setRua(event.target.value) }} value={rua} required />
                                                    </div>

                                                    <div className="col-3">
                                                        <label>* Número </label>
                                                        <Field type="text" className="form-control " placeholder="1234" name="numero" id="numero" placeholder={endereco.numero} onChange={(event) => { setNumeroEndereco(event.target.value) }} value={numeroEndereco} required />
                                                    </div>

                                                </div>
                                                <label> Complemento </label>
                                                <Field type="text" className="form-control input-comp" name="complemento" placeholder={endereco.complemento} onChange={(event) => { setComplemento(event.target.value) }} value={complemento} />
                                                <label>* Bairro </label>
                                                <Field type="text" className="form-control input-bairro" id="bairro" name="bairro" placeholder={endereco.bairro} onChange={(event) => { setBairro(event.target.value) }} value={bairro} required />
                                                <label>* Cidade </label>
                                                <Field type="text" className="form-control input-cidade" id="cidade" name="cidade" placeholder={endereco.cidade} onChange={(event) => { setCidade(event.target.value) }} value={cidade} required />
                                                <label>* Estado </label>
                                                <Field type="text" className="form-control input-estado" name="uf" id="uf" placeholder={endereco.estado} onChange={(event) => { setEstado(event.target.value) }} value={estado} required />
                                                <label>Nome do destinatário </label>
                                                <input type="text" class="form-control" placeholder={endereco.destinatario} value={destinatario} onChange={(event) => { setDestinatario(event.target.value == "" ? null : event.target.value) }} />


                                            </ul>


                                        </li>



                                        <br />
                                    </ul>

                                </div>
                            </Formik>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                            <button type="button" class="btn btn-primary" data-bs-dismiss="modal" onClick={() => { alterarEnd(endereco.id_endereco) }}>Adicionar Endereço</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ItemListaEndereco;