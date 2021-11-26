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
    const Cadastrar = (event) => {
        setLoading(true)
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
                                                setLoading(false)
                                                window.location.href = "http://localhost:3000/dashboard/" + id_Cliente
                                            })
                                            .catch((error) => { console.log(error) })
                                    })
                            })
                            .catch((error) => {
                                console.log(error)
                                alert("desculpe ocorreu um erro durante o cadastro")
                            })
                    } else {
                        setemailexists("d-block")
                    }

                })
                .catch((error) => { console.log(error) })
        }
        setTimeout(() => {
            setLoading(false)
        }, 2000)

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
        if (!dataNascimento || dataNascimento.length == 0 || dataNascimento == "") {
            setValidDataNascimento('d-block')
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

        if (password === confPassword) {
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
                            setValidNome('none')
                        }}
                            value={nome} required="true" />
                        <div className={"invalid-feedback " + validNome}>
                            Nome é obrigatório!
                        </div>
                    </div>

                </div>
                <div class="row d-flex justify-content-center">

                    <div class="form-group col-md-3">
                        <Form.Label>CPF*:</Form.Label>
                        <Form.Control type="cpf" placeholder="999.999.999-00" onChange={(event) => {
                            setCpf(mascaraCPF(event.target.value))
                            setValidCpf('none')
                        }}
                            value={cpf} required="true" />
                        <div className={"invalid-feedback " + validCpf}>
                            CPF é obrigatório!
                        </div>
                    </div>
                    {/* --- Função de validação de data --- */}
                    <div class="form-group col-md-3">
                        <Form.Label>Nascimento:</Form.Label>
                        <Form.Control onKeyDown={(e) => e.preventDefault()} type="date" max="2003-11-30" placeholder="Ex.: 29/02/1980" onChange={(event) => { setDataNascimento(event.target.value); setValidDataNascimento('none') }}
                            value={dataNascimento} required="true" />
                        <div className={"invalid-feedback " + validDataNascimento}>
                            Data de nascimento é obrigatória!
                        </div>
                    </div>

                </div>
                <div class="row d-flex justify-content-center">

                    <div class="form-group col-md-3">
                        <Form.Label>E-mail*:</Form.Label>
                        <Form.Control type="email" placeholder="usuario@email.com" onChange={(event) => {
                            setEmail(event.target.value)
                            setValidEmail('none')
                        }}
                            value={email} required="true" />
                        <div className={"invalid-feedback " + validEmail}>
                            Email é obrigatório!
                        </div>
                        <div className={"invalid-feedback " + emailexists}>
                            Email ja cadastrado!
                        </div>
                    </div>
                    <div class="form-forup col-md-3">
                        <Form.Label>Contato*:</Form.Label>
                        <Form.Control type="telefone" placeholder="(99) 99999-9999" onChange={(event) => {
                            setTelefone(mascaraTelefone(event.target.value))
                            setValidTelefone('none')
                        }}
                            value={telefone} required="true" />
                        <div className={"invalid-feedback " + validTelefone}>
                            Telefone é obrigatório!
                        </div>
                    </div>
                </div>
                <div class="row d-flex justify-content-center">

                    <div class="form-group col-md-3">
                        <Form.Label for="senha">Criar Senha*:</Form.Label>
                        <Form.Control name="senha" id="senha" type="password" placeholder="Abc@123" maxLength="8" onChange={(event) => {
                            setPassword(event.target.value)
                            setValidPass('none')
                            setValidsenha('none')

                        }}
                            value={password} required="true" />
                        <div className={"invalid-feedback " + validsenha}>
                            Senhas não conferem!
                        </div>
                        <div className={"invalid-feedback " + validPass}>
                            Senhas deve ter no minimo 6 caracteres!
                        </div>

                    </div>

                    {/* --- Confirmar senha posteriormente --- */}
                    <div class="form-group col-md-3">
                        <Form.Label for="senha">Confirmar Senha*:</Form.Label>
                        <Form.Control name="senha1" id="senha1" type="password" placeholder="Abc@123" maxLength="8"
                            onChange={(event) => {
                                setConfPassword(event.target.value)
                                setValidsenha('d-none')
                            }}
                            value={confPassword} required="true" />
                        <div className={"invalid-feedback " + validsenha}>
                            Senhas não conferem!
                        </div>
                    </div>
                </div>

                <br />
                <div class="row justify-content-center">
                    <div class="col-md-6 d-flex justify-content-around">
                        <div class="form-check col-md-6 termos">
                            <Checkbox texto="Aceito e concordo com os " onChange={() => { setValidTermos('d-none'); setTermos(true) }} /> <a className="link-termo" onClick={() => { setShow(true); }}> <u>Termos e condições</u></a>
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