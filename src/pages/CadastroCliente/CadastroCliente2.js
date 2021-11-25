import React, { useState } from 'react'
import './CadastroCliente.css'
import FormDefault from '../../components/micro/Forms/FormDefault/FormDefault'
import Button from '../../components/micro/Button/Button'
import Checkbox from '../../components/micro/Forms/Checkbox/Checkbox'
import { Form, Modal } from 'react-bootstrap'
import axios from 'axios'
import BotaoConfirmar from '../../components/micro/BotaoConfirmar/BotaoConfirmar'


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
                "nome": nome,
                "cpf": cpf,
                "dataNascimento": new Date(dataNascimento),
                "email": email,
                "telefone": telefone,
                "password": password
            })
                .then((response) => {
                    
                    window.location.href = "http://localhost:3000/login"
                })
                .catch((error) => { console.log(error)})
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


            function validaSenha() {

                if(password === confPassword) {
                    console.log("Senha confirmada");
                } else {
                    console.log("Insire uma senha correta");
                }
                
            }



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
                            <Form.Label>Nome Completo*:</Form.Label>
                            <Form.Control type="nome" placeholder="seu nome" onChange={(event) => {
                                setNome(mascaraLetras(event.target.value))
                            }}
                                value={nome} required="true" />
                        </div>

                    </div>
                    <div class="row d-flex justify-content-center">

                        <div class="form-group col-md-3">
                            <Form.Label>CPF*:</Form.Label>
                            <Form.Control type="cpf" placeholder="999.999.999-00" onChange={(event) => {
                                setCpf(mascaraCPF(event.target.value))
                            }}
                                value={cpf} required="true" />
                        </div>
                        {/* --- Função de validação de data --- */}
                        <div class="form-group col-md-3">
                            <Form.Label>Nascimento:</Form.Label>
                            <Form.Control onKeyDown={(e) => e.preventDefault()} type="date" max="2003-11-30" placeholder="Ex.: 29/02/1980" onChange={(event) => { setDataNascimento(event.target.value) }}
                                value={dataNascimento} required="true" />
                        </div>

                    </div>
                    <div class="row d-flex justify-content-center">

                        <div class="form-group col-md-3">
                            <Form.Label>E-mail*:</Form.Label>
                            <Form.Control type="email" placeholder="usuario@email.com" onChange={(event) => {
                                setEmail(event.target.value)
                            }}
                                value={email} required="true" />
                        </div>
                        <div class="form-forup col-md-3">
                            <Form.Label>Contato*:</Form.Label>
                            <Form.Control type="telefone" placeholder="(99) 99999-9999" onChange={(event) => {
                                setTelefone(mascaraTelefone(event.target.value))
                            }}
                                value={telefone} required="true" />
                        </div>
                    </div>
                        <div class="row d-flex justify-content-center">

                            <div class="form-group col-md-3">
                                 <Form.Label for="senha">Criar Senha*:</Form.Label>
                               <Form.Control name="senha" id="senha" type="password" placeholder="Abc@123" maxLength="8" onChange={(event) => {
                                    setPassword(event.target.value)
                                }}
                                    value={password} required="true" />

                            </div>
                            
                            {/* --- Confirmar senha posteriormente --- */}
                            <div class="form-group col-md-3">
                                <Form.Label for="senha">Confirmar Senha*:</Form.Label>
                                <Form.Control name="senha1" id="senha1" type="password" placeholder="Abc@123" maxLength="8" 
                                onChange={(event) => {
                                    setConfPassword(event.target.value)
                                }}
                                value={confPassword} required="true" />
                            </div>
                        </div>

                        <br />
                        <div class="row justify-content-center">
                        <div class="col-md-6 d-flex justify-content-around">
                            <div class="form-check col-md-6 termos">
                                <Checkbox texto="Aceito e concordo com os " required/> <a className="link-termo" onClick={() => setShow(true)}> <u>Termos e condições</u></a>

                            </div>
                        </div>
                        </div>
                        <br />
                        <div class="row d-flex justify-content-center">
                            <div class="col-12 col-md-4  d-flex justify-content-around">
                                <BotaoConfirmar texto="Cadastrar" type="button"  onClick={(event) => { Cadastrar(event) } } navigation route="login" />
                                {/* <Button label="Voltar" onClick={(event) => { Cadastrar(event) } } class="apoio" /> */}
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