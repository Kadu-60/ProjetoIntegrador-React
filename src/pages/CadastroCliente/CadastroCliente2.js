import React, { useState } from 'react'
import './CadastroCliente.css'
import FormDefault from '../../components/micro/Forms/FormDefault/FormDefault'
import Button from '../../components/micro/Button/Button'
import Checkbox from '../../components/micro/Forms/Checkbox/Checkbox'
import { Form, Modal } from 'react-bootstrap'
import axios from 'axios'
import BotaoConfirmar from '../../components/micro/BotaoConfirmar/BotaoConfirmar'
import Swal from 'sweetalert2'
import { useParams } from 'react-router-dom'
import { Formik, Field } from 'formik';


function CadastroCliente(props) {
    const [nome, setNome] = useState('')
    const [validNome, setValidNome] = useState('d-none')
    const [cpf, setCpf] = useState('')
    const [validCpf, setValidCpf] = useState('d-none')
    const [dataNascimento, setDataNascimento] = useState('')
    const [validDataNascimento, setValidDataNascimento] = useState('d-none')
    const [email, setEmail] = useState('')
    const [validEmail, setValidEmail] = useState('d-none')
    const [telefone, setTelefone] = useState('')
    const [validTelefone, setValidTelefone] = useState('d-none')
    const [password, setPassword] = useState('')
    const [validPass, setValidPass] = useState('d-none')
    const [show, setShow] = useState(false)
    const [confPassword, setConfPassword] = useState('')
    const [validsenha, setValidsenha] = useState('d-none')
    const [loading, setLoading] = useState(false)
    const [emailexists, setemailexists] = useState('d-none')
    const [termos, setTermos] = useState(false)
    const [validTermos, setValidTermos] = useState('d-none')
    const [menorIdade, setMenorIdade] = useState('d-none')
    const [datainvalida, setDatainvalida] = useState('d-none')
    const [cep, setCep] = useState('')
    const [rua, setRua] = useState('')
    const [numeroEndereco, setNumeroEndereco] = useState('')
    const [complemento, setComplemento] = useState('')
    const [bairro, setBairro] = useState('')
    const [cidade, setCidade] = useState('')
    const [estado, setEstado] = useState('')
    const [carregando, setCarregando] = useState(false)
    const { id } = useParams()


    const Cadastrar = (event) => {

        setCarregando(true)
        event.preventDefault()
        if (validarEntradas()) {
            axios.get("http://localhost:8080/cadastro-cliente/getByEmail/" + email)
                .then((response) => {
                    if (response.data == '' && response.status == 200) {
                        axios.post("http://localhost:8080/cadastroCliente/salvar", {
                            "nome": nome,
                            "cpf": cpf,
                            "dataNascimento": new Date(dataNascimento),
                            "email": email,
                            "telefone": telefone,
                            "password": password
                        })
                            .then((response) => {
                                adicionarEndereco(response.data.id_Cliente)
                                axios.post("http://localhost:8080/login", { "email": email, "password": password })
                                    .then((response) => {

                                        let token = response.data;
                                        localStorage.setItem('token', token)
                                        localStorage.setItem('user', email)
                                        const config = {
                                            headers: { Authorization: `Bearer ${token}` }
                                        };
                                        axios.get("http://localhost:8080/cadastro-cliente/getByEmail/" + email, config)
                                            .then((response) => {
                                                let { id_Cliente } = response.data
                                                setCarregando(false)
                                                window.location.href = "http://localhost:3000/dashboard/" + id_Cliente
                                            })
                                            .catch((error) => { setCarregando(false) })



                                    })
                                    .catch((error) => { setCarregando(false) })
                            })
                            .catch((error) => {
                                console.log(error)
                                setCarregando(false)
                                Swal.fire({
                                    title: 'Erro!',
                                    text: 'desculpe ocorreu um erro durante o cadastro!',
                                    icon: 'error',
                                    confirmButtonText: 'fechar'
                                })


                            })
                    } else {
                        setCarregando(false)
                        setemailexists("d-block")
                    }

                })
                .catch((error) => { console.log(error); setCarregando(false) })
        } else {
            setCarregando(false)
        }





    }

    const adicionarEndereco = (id_Cliente) => {
        let endereco =
        {
            "clienteEnderecoKey":
            {
                "cliente":
                {
                    "id_Cliente": id_Cliente
                },
                "endereco":
                {
                    "estado": estado,
                    "cidade": cidade,
                    "bairro": bairro,
                    "rua": rua,
                    "cep": cep,
                    "numero": numeroEndereco,
                    "complemento": complemento,
                    "ponto_referencia": "",
                    "destinatario": ""
                }
            },
            "enderecoPrincipal": false,
            "enderecoEntrega": false
        }
        axios.post("http://localhost:8080/clienteEndereco/create", endereco)
            .then((response) => {
                console.log(response.data)




            })

    }

    function calculaIdade(dataNasc) {
        var dataAtual = new Date();
        var anoAtual = dataAtual.getFullYear();
        var anoNascParts = dataNasc.slice(0, 10).split('/');
        var diaNasc = anoNascParts[0];
        var mesNasc = anoNascParts[1];
        var anoNasc = anoNascParts[2];
        var idade = anoAtual - anoNasc;
        var mesAtual = dataAtual.getMonth() + 1;
        //Se mes atual for menor que o nascimento, nao fez aniversario ainda;  
        if (mesAtual < mesNasc) {
            idade--;
        } else {
            //Se estiver no mes do nascimento, verificar o dia
            if (mesAtual == mesNasc) {
                if (new Date().getDate() < diaNasc) {
                    //Se a data atual for menor que o dia de nascimento ele ainda nao fez aniversario
                    idade--;
                }
            }
        }
        return idade < 18;
    }

    function validarBissexto(dataNasc) {
        if (dataNasc == new Date('2021/29/02').toLocaleString()) {
            return true;
        }
        return false;
    }

    function validarEntradas() {
        if (!nome || nome.length == 0 || nome == "") {
            setValidNome('d-block')
            return false
        }
        if (!cpf || cpf.length == 0 || cpf == "") {
            setValidCpf('d-block')
            return false
        }
        if (validarBissexto(new Date(dataNascimento).toLocaleString())) {
            setDatainvalida('d-block')
            return false
        }
        if (!dataNascimento || dataNascimento.length == 0 || dataNascimento == "") {
            setValidDataNascimento('d-block')
            return false
        }
        if (calculaIdade(new Date(dataNascimento).toLocaleString())) {
            setMenorIdade('d-block')
            return false
        }

        if (!email || email.length == 0 || email == "") {
            setValidEmail('d-block')
            return false
        }
        if (!telefone || telefone.length == 0 || telefone == "") {
            setValidTelefone('d-block')
            return false
        }
        if (!password || password.length < 6 || password == "") {
            setValidPass('d-block')
            return false
        }
        if (password != confPassword) {
            setValidsenha('d-block')
            return false
        }
        if (!termos) {
            setValidTermos('d-block')
            return false
        }
        return true
    }

    const mascaraLetras = (value) => {
        return value.replace(/[0-9!@#??$%^&*)(+=._-]+/g, "");
    };

    const mascaraCPF = (value) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d)/, "$1.$2")
            .replace(/(\d{3})(\d{1,2})/, "$1-$2")
            .replace(/(-\d{2})\d+?$/, "$1");
    };

    const mascaraTelefone = (value) => {
        return value
            .replace(/\D/g, "")
            .replace(/(\d{2})(\d)/, "($1) $2")
            .replace(/(\d{5})(\d)/, "$1-$2")
            .replace(/(-\d{4})(\d+?)$/, "$1");
    };



    function buscaCep(ev, setFieldValue) {
        const { value } = ev.target;

        const cep = value?.replace(/[^0-9]/g, '');

        if (cep?.length !== 8) {
            return;
        }

        fetch(`https://viacep.com.br/ws/${cep}/json/`)
            .then((res) => res.json())
            .then((data) => {
                setRua(data.logradouro);
                setBairro(data.bairro);
                setCidade(data.localidade);
                setEstado(data.uf);
            });

    }



    // }



    return (

        <>
            <div className={carregando ? "div-Carregando" : "d-none"}>
                <div class="spinner-border text-warning">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
            <FormDefault>

                <br />    <br />
                <div class="row d-flex justify-content-center">
                    <div class="col d-flex justify-content-center">
                        <p className="title-dash">Criar conta</p>
                    </div>
                </div>
                <br />
                <div class="row d-flex justify-content-center">

                    <div class="form-group col-md-6">
                        <Form.Label>Nome completo*:</Form.Label>
                        <Form.Control type="nome" placeholder="Seu Nome Completo" onChange={(event) => {
                            setNome(mascaraLetras(event.target.value))
                            setValidNome('none')
                        }}
                            value={nome} required="true" />
                        <div className={"invalid-feedback " + validNome}>
                            Nome ?? obrigat??rio!
                        </div>
                    </div>

                </div>
                <div class="row d-flex justify-content-center">

                    <div class="form-group col-md-3">
                        <Form.Label>CPF*:</Form.Label>
                        <Form.Control type="cpf" placeholder="999.999.999-99" onChange={(event) => {
                            setCpf(mascaraCPF(event.target.value))
                            setValidCpf('none')
                        }}
                            value={cpf} required="true" />
                        <div className={"invalid-feedback " + validCpf}>
                            CPF ?? obrigat??rio!
                        </div>
                    </div>
                    {/* --- Fun????o de valida????o de data --- */}
                    <div class="form-group col-md-3">
                        <Form.Label>Data de Nascimento:</Form.Label>
                        <Form.Control type="date" placeholder="Ex.: 29/02/1980" onChange={(event) => { setDataNascimento(event.target.value); setValidDataNascimento('none'); setMenorIdade('none'); setDatainvalida('none'); }}
                            value={dataNascimento} required="true" />
                        <div className={"invalid-feedback " + validDataNascimento}>
                            Data de nascimento ?? obrigat??ria!
                        </div>
                        <div className={"invalid-feedback " + menorIdade}>
                            Pro??bido o cadastro para menores de 18 anos!
                        </div>
                        <div className={"invalid-feedback " + datainvalida}>
                            Data de nascimento inv??lida!
                        </div>
                    </div>
                </div>

                {/* Inicio Endere??o */}


                <div class="row d-flex justify-content-center">


                    <div class="form-group col-md-2">
                        <Form.Label>CEP*:</Form.Label>
                        <Form.Control type="text" id="cep" name="cep" onBlur={(ev) => buscaCep(ev)} onChange={(ev) => setCep(ev.target.value)} value={cep} className="form-control input-cep-2" data-js="cep" placeholder="00000-000" required />
                        <div className={"invalid-feedback "}>
                            CEP ?? obrigat??rio!
                        </div>
                    </div>
                    {/* --- Fun????o de valida????o de data --- */}
                    <div class="form-group col-md-3">
                        <Form.Label>Logradouro:</Form.Label>
                        <Form.Control type="text" className="form-control input-endereco" name="logradouro" id="logradouro" placeholder="Rua das flores" onChange={(event) => { setRua(event.target.value) }} value={rua} required />
                        <div className={"invalid-feedback "}>
                            Endere??o ?? obrigat??ria!
                        </div>

                    </div>
                    <div class="form-group col-md-1">
                        <Form.Label>N??mero*:</Form.Label>
                        <Form.Control type="text" className="form-control " placeholder="1234" name="numero" id="numero" placeholder="" onChange={(event) => { setNumeroEndereco(event.target.value) }} value={numeroEndereco} required />
                        <div className={"invalid-feedback "}>
                            N??mero ?? obrigat??rio!
                        </div>
                    </div>
                </div>

                <div class="row d-flex justify-content-center">



                    <div class="form-group col-md-3">
                        <Form.Label>Complemento:</Form.Label>
                        <Form.Control type="text" className="form-control input-comp" name="complemento" placeholder="Ex. apto 200" onChange={(event) => { setComplemento(event.target.value) }} value={complemento} />


                    </div>
                    <div class="form-group col-md-3">
                        <Form.Label>Bairro:</Form.Label>
                        <Form.Control type="text" className="form-control input-bairro" id="bairro" name="bairro" placeholder="Jardim das Flores" onChange={(event) => { setBairro(event.target.value) }} value={bairro} required />


                    </div>
                </div>

                <div class="row d-flex justify-content-center">

                    <div class="form-group col-md-3">
                        <Form.Label>Cidade*:</Form.Label>
                        <Form.Control type="text" className="form-control input-cidade" id="cidade" name="cidade" placeholder="S??o Paulo" onChange={(event) => { setCidade(event.target.value) }} value={cidade} required />
                        <div className={"invalid-feedback " + validCpf}>
                            Cidade ?? obrigat??rio!
                        </div>
                    </div>
                    {/* --- Fun????o de valida????o de data --- */}
                    <div class="form-group col-md-3">
                        <Form.Label>Estado*:</Form.Label>
                        <Form.Control type="text" className="form-control input-estado" name="uf" id="uf" placeholder="S??o Paulo" onChange={(event) => { setEstado(event.target.value) }} value={estado} required />


                    </div>

                </div>


                {/* Fim Endere??o */}




                <div class="row d-flex justify-content-center">

                    <div class="form-group col-md-3">
                        <Form.Label>E-mail*:</Form.Label>
                        <Form.Control type="email" placeholder="usuario@email.com" onChange={(event) => {
                            setEmail(event.target.value)
                            setValidEmail('d-none')
                            setemailexists("d-none")
                        }}
                            value={email} required="true" />
                        <div className={"invalid-feedback " + validEmail}>
                            Email ?? obrigat??rio!
                        </div>
                        <div className={"invalid-feedback " + emailexists}>
                            Email ja cadastrado!
                        </div>
                    </div>
                    <div class="form-forup col-md-3">
                        <Form.Label>Contato*:</Form.Label>
                        <Form.Control type="telefone" placeholder="(00) 12345-6789" onChange={(event) => {
                            setTelefone(mascaraTelefone(event.target.value))
                            setValidTelefone('none')
                        }}
                            value={telefone} required="true" />
                        <div className={"invalid-feedback " + validTelefone}>
                            Telefone ?? obrigat??rio!
                        </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-center">

                    <div class="form-group col-md-3">
                        <Form.Label for="senha">Criar Senha*:</Form.Label>
                        <Form.Control name="senha" id="senha" type="password" placeholder="digite sua senha..." maxLength="8" onChange={(event) => {
                            setPassword(event.target.value)
                            setValidPass('none')
                            setValidsenha('none')

                        }}
                            value={password} required="true" />
                        <div className={"invalid-feedback " + validsenha}>
                            Senhas n??o conferem!
                        </div>
                        <div className={"invalid-feedback " + validPass}>
                            Senhas deve ter no minimo 6 caracteres!
                        </div>

                    </div>

                    {/* --- Confirmar senha posteriormente --- */}
                    <div class="form-group col-md-3">
                        <Form.Label for="senha">Confirmar Senha*:</Form.Label>
                        <Form.Control name="senha1" id="senha1" type="password" placeholder="confirme sua senha..." maxLength="8"
                            onChange={(event) => {
                                setConfPassword(event.target.value)
                                setValidsenha('d-none')
                            }}
                            value={confPassword} required="true" />
                        <div className={"invalid-feedback " + validsenha}>
                            Senhas n??o conferem!
                        </div>
                    </div>
                </div>

                <br />
                <div class="row justify-content-center">
                    <div class="col-md-6 d-flex justify-content-around">
                        <div class="form-check col-md-6 termos">
                            <Checkbox texto="Aceito e concordo com os " onChange={() => { setValidTermos('d-none'); setTermos(true) }} /> <a className="link-termo" onClick={() => { setShow(true); }}> <u>Termos e condi????es</u></a>
                            <div className={"invalid-feedback " + validTermos}>
                                aceite os termos para efetuar o cadastro!
                            </div>
                        </div>
                    </div>
                </div>
                <br />
                <div class="row d-flex justify-content-center">
                    <div class="col-12 col-md-4  d-flex justify-content-around">

                        {loading ? (<div class="spinner-border" role="status">
                            <span class="visually-hidden">Loading...</span>
                        </div>
                        ) : (<BotaoConfirmar texto="Cadastrar" type="button" onClick={(event) => { Cadastrar(event) }} navigation route="login" />)}
                    </div>

                </div>
                <br />
                <div class="row d-flex justify-content-center">

                    <div class="col-md-4 d-flex justify-content-center">
                        <p>
                            J?? possui conta? <a className="fazer-login" href="/login"> Fazer login</a>
                        </p>
                    </div>
                </div>
                <br />


                <Modal
                    show={show}
                    onHide={() => setShow(false)}
                    dialogClassName="modal-90w"
                    aria-labelledby="example-custom-modal-styling-title"
                >
                    <Modal.Header closeButton>
                        <Modal.Title align-text-center id="example-custom-modal-styling-title">
                            Termos e Condi????es do Site
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p>
                            C??LCULO DO VALOR DE FRETE <br />
                            O valor do frete ?? fixo no carrinho de compras de R$ 15,00.  Somente entregamos na cidade de S??o Paulo/SP.
                        </p>
                        <p>
                            CARRINHO DE COMPRAS <br />
                            Para facilitar sua compra, ela ficar?? salva em seu carrinho de compras at?? a sa??da do site ou n??o queira finalizar a compra no momento. Por??m, para ter acesso a esta finalidade voc?? deve entrar com seu Login e Senha no site, sen??o os produtos do carrinho ir??o expirar.
                        </p>
                        <p>

                            REGRA PARA PAGAMENTO <br />
                            Ap??s a finaliza????o do pedido n??o ser?? poss??vel alterar a forma de pagamento, endere??o, arte do r??tulo, estilo de cerveja ou incluir e/ou excluir itens.<br />

                            <br />CART??O DE CR??DITO: As compras podem ser pagas com cart??o de cr??dito. O pagamento pode ser ?? vista ou parcelado em at?? 3 (tr??s) vezes sem juros. Para sua seguran??a, todas as compras efetuadas com cart??o de cr??dito est??o sujeitas ?? an??lise de cadastro.
                        </p>
                        <p>
                            ENVIO<br />
                            Ap??s a confirma????o de pagamento pela institui????o financeira, seu pedido estar?? pronto para ser separado e embalado para entrega. Todos os produtos dispon??veis para compra est??o separados em nosso estoque, prontos para terem seu r??tulos impressos, aplicados e enviados. O prazo de entrega passa a contar a partir do momento em que o pagamento ?? confirmado sendo de at?? 6 dias, em caso de contrata????o do servi??o.
                            Nossas entregas ocorrem todos os dias das semana entre 8h e 20h, caso haja qualquer restri????o de dia ou hor??rio, coloque no campo observa????es.<br />
                            Em casos de entrega em condom??nio residencial ou comercial o entregador fica respons??vel em levar at?? a portaria o produto e n??o at?? o apartamento do Cliente.
                        </p>
                    </Modal.Body>
                    <Modal.Footer>

                        <Button className="btn-modal-termo" onClick={() => setShow(false)} >Concordo</Button>
                    </Modal.Footer>
                </Modal>

                <br />
            </FormDefault>
        </>

    )


}


export default CadastroCliente