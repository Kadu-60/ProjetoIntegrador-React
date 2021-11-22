import React, { useState } from 'react'
import './CadastroCliente.css'
import FormDefault from '../../components/micro/Forms/FormDefault/FormDefault'
import Button from '../../components/micro/Button/Button'
import Checkbox from '../../components/micro/Forms/Checkbox/Checkbox'
import { Form, Modal } from 'react-bootstrap'
import axios from 'axios'

function CadastroCliente(props) {
    const [nome, setNome] = useState('')
    const [cpf, setCpf] = useState('')
    const [dataNascimento, setDataNascimento] = useState('')
    const [email, setEmail] = useState('')
    const [telefone, setTelefone] = useState('')
    const [password, setPassword] = useState('')
    const [show, setShow] = useState(false)
    const [confPassword, setConfPassword] = useState('')


        

        const Cadastrar = (event) => {
            event.preventDefault();
            axios.post("http://localhost:8080/cadastroCliente/salvar", {
                nome: nome,
                cpf: cpf,
                dataNascimento: dataNascimento,
                email: email,
                telefone: telefone,
                password: password,
                confPassword: confPassword
            })
                .then((response) => {
                    window.location.href = "http://localhost:3000/"
                })
                .catch((error) => console.log(error))
        }

        const mascaraLetras = (value) => {
            return value.replace(/[0-9!@#¨$%^&*)(+=._-]+/g, "");
        };

        const mascaraCPF = (value) => {
            return value
                .replace(/\D/g, "")
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d)/, "$1.$2")
                .replace(/(\d{3})(\d{1,2})/, "$1-$2")
                .replace(/(-\d{2})\d+?$/, "$1");
        };

        const mascaraData = (value) => {
            return value
                .replace(/\D/g, "")
                .replace(/(\d{2})(\d)/, "$1/$2")
                .replace(/(\d{2})(\d)/, "$1/$2")
                .replace(/(\d{4})(\d)/, "$1");
        };

        const mascaraTelefone = (value) => {
            return value
                .replace(/\D/g, "")
                .replace(/(\d{2})(\d)/, "($1) $2")
                .replace(/(\d{5})(\d)/, "$1-$2")
                .replace(/(-\d{4})(\d+?)$/, "$1");
        };

        

        return (
            <>
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
                            <Form.Label>Nome Completo</Form.Label>
                            <Form.Control type="nome" placeholder="Ex.: Fulano de Tal" onChange={(event) => {
                                setNome(mascaraLetras(event.target.value))
                            }}
                                value={nome} required="true" />
                        </div>

                    </div>
                    <div class="row d-flex justify-content-center">

                        <div class="form-group col-md-3">
                            <Form.Label>CPF</Form.Label>
                            <Form.Control type="cpf" placeholder="Ex.: 900.000.000-22" onChange={(event) => {
                                setCpf(mascaraCPF(event.target.value))
                            }}
                                value={cpf} required="true" />
                        </div>
                        {/* --- Função de validação de data --- */}
                        <div class="form-group col-md-3">
                            <Form.Label>Nascimento:</Form.Label>
                            <Form.Control type="dataNascimento" placeholder="Ex.: 29/02/1980" onChange={(event) => {
                                setDataNascimento(mascaraData(event.target.value))
                            }}
                                value={dataNascimento} required="true" />
                        </div>

                    </div>
                    <div class="row d-flex justify-content-center">

                        <div class="form-group col-md-3">
                            <Form.Label>E-mail:</Form.Label>
                            <Form.Control type="email" placeholder="Ex.: fu.lano@net.com" onChange={(event) => {
                                setEmail(event.target.value)
                            }}
                                value={email} required="true" />
                        </div>
                        <div class="form-forup col-md-3">
                            <Form.Label>Telefone</Form.Label>
                            <Form.Control type="telefone" placeholder="Ex.: (11) 98889-7667" onChange={(event) => {
                                setTelefone(mascaraTelefone(event.target.value))
                            }}
                                value={telefone} required="true" />
                        </div>
                    </div>
                        <div class="row d-flex justify-content-center">

                            <div class="form-group col-md-3">
                                <Form.Label>Inserir Senha:</Form.Label>
                                <Form.Control name="senha1" type="password" placeholder="Ex.: Abc123" onChange={(event) => {
                                    setPassword(event.target.value)
                                }}
                                    value={password} required="true" />
                            </div>
                            
                            {/* --- Confirmar senha posteriormente --- */}
                            <div class="form-group col-md-3">
                                <Form.Label>Confirmar Senha:</Form.Label>
                                <Form.Control name="senha2" type="password" maxLength="8" onblur="validarSenha('senha','senha1')" placeholder="Ex.: Abc123" onChange={(event) => {
                                    setConfPassword(event.target.value)
                                }}
                                    value={confPassword} required="true" />
                            </div>
                        </div>

                        <br />
                        <div class="row justify-content-center">
                        <div class="col-md-6 d-flex justify-content-around">
                            <div class="form-check col-md-6 termos">
                                <Checkbox texto="Aceito e concordo com os " /> <a className="link-termo" onClick={() => setShow(true)}> <u>Termos e condições</u></a>

                            </div>
                        </div>
                        </div>
                        <br />
                        <div class="row d-flex justify-content-center">
                            <div class="col-12 col-md-4  d-flex justify-content-around">
                                <Button label="Cadastrar" type="submit" onClick={(event) => { Cadastrar(event) }} />
                                <Button label="Voltar" navigation route="login" class="apoio" />
                            </div>

                        </div>
                        <br />
                        <div class="row d-flex justify-content-center">

                            <div class="col-md-4 d-flex justify-content-center">
                                <p>
                                    Já possui conta? <a className="fazer-login" href="/login"> Fazer login</a>
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
                                <Modal.Title id="example-custom-modal-styling-title">
                                    Termos e Condições do site
                                </Modal.Title>
                            </Modal.Header>
                            <Modal.Body>
                                <p>
                                    Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
                                    commodi aspernatur enim, consectetur. Cumque deleniti temporibus
                                    ipsam atque a dolores quisquam quisquam adipisci possimus
                                    laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
                                    accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
                                    reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
                                    deleniti rem!
                                </p>
                            </Modal.Body>
                            <Modal.Footer>

                                <Button className="btn-modal-termo" onClick={() => setShow(false)}>Concordo</Button>
                            </Modal.Footer>
                        </Modal>

                    <br />
                </FormDefault>
            </>
        )
    }


export default CadastroCliente