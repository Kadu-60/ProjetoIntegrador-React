import React, { useRef,useEffect, useState  } from 'react'
import './CadastroCliente.css'
import * as Yup from 'yup';
import FormDefault from '../../components/micro/Forms/FormDefault/FormDefault'
import Button from '../../components/micro/Button/Button'
import Checkbox from '../../components/micro/Forms/Checkbox/Checkbox'
import BotaoConfirmar from '../../components/micro/BotaoConfirmar/BotaoConfirmar'
import { Button, Modal } from 'react-bootstrap'
import InputMask from "react-input-mask";
import InputUnform from '../../components/micro/Forms/FormDefault/FormUnform/Input'




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

// // import { mask, unMask } from 'remask'

// function CadastroCliente() {



//     const [show, setShow] = useState(false);
//     const [value, setValue] = useState ('');
//     const onChange = ev =>{
//         setValue(ev.target.value)
//     };

    
    


//     return(
//         <>

  
//         <FormDefault>
//                 <br/>    <br/>
//                 <div class="row d-flex justify-content-center">
                
//                     <div class="col d-flex justify-content-center">
//                     <p className="title-dash">Criar conta</p>
//                     </div>
//                </div>
//                 <br/>
//                 <div class="row d-flex justify-content-center">
                    
//                     <div class="form-group col-md-6">
//                     <label>Nome Completo:</label><br/>
                     
//                         <InputMask corLabel="preto" id="input-container-nome" label="Nome Completo" type="text" required="true"/>
//                     </div>
                    
//                 </div>
//                <div class="row d-flex justify-content-center">
               
//                     <div class="form-group col-md-3">
//                         <label>CPF:</label>
//                         <InputMask mask="999.999.999-99" corLabel="preto" id="input-container" label="CPF" type="text" placeholder="Digite seu CPF" value={value} small="Apenas número" required="true"/>
//                         <span id="resposta"></span>
//                     </div>
//                     <div class="form-group col-md-3">
//                     <label>Data de Nascimento:</label>
//                         <InputMask mask="99/99/9999" corLabel="preto" id="input-container" label="Data de nascimento" type="text" placeholder="DD/MM/AAAA" required="true"/>
//                     </div>
                    
//                </div>
//                <div class="row d-flex justify-content-center">
             
//                    <div class="form-group col-md-3">
//                    <label>E-mail:</label>
//                        <InputMask corLabel="preto" id="input-container" label="E-mail" type='email' placeholder="user@email.com" small='Este será seu Login' required="true"/>
//                    </div>
//                    <div class="form-forup col-md-3">
//                        <label>Telefone:</label>
//                    <InputMask mask="(99)99999-9999" id="input-container"  label="Telefone" type='text' placeholder="(00) 00000-0000"  required="true"/>
//                    </div>
//                </div>
//                <div class="row">
//                 <div class="col-md-3"></div>
//                    <div class="form-group col-md-3">
//                    <label>Digite sua senha:</label>
//                        <InputMask corLabel='preto' id="input-container" label='Senha' type='password' placeholder="Insira sua senha" small='Deve conter pelo menos 8 caracteres' required="true"/>
//                    </div>
//                     <div class="form-group col-md-3">
//                     <label>Repita sua senha:</label>
//                         <InputMask corLabel='preto' id="input-container" label='Repita sua senha' type='password' placeholder="Insira sua senha" required="true"/>
//                     </div>
//                </div>
               
//                <br/><br/>
//                <div class="row justify-content-center">
//                 <div class="col-md-6 d-flex justify-content-around">
//                     <div class="form-check col-md-6 termos">
//                         <Checkbox texto="Aceito e concordo com os " required/> <a className="link-termo" onClick={() => setShow(true)}> <u>Termos e condições</u></a>

//                     </div>
//                     <div class="row d-flex justify-content-center">

//                         <div class="form-group col-md-3">
//                             <Form.Label>CPF</Form.Label>
//                             <Form.Control type="cpf" placeholder="Ex.: 900.000.000-22" onChange={(event) => {
//                                 setCpf(mascaraCPF(event.target.value))
//                             }}
//                                 value={cpf} required="true" />
//                         </div>
//                         --- Função de validação de 
//                         <div class="form-group col-md-3">
//                             <Form.Label>Nascimento:</Form.Label>
//                             <Form.Control type="dataNascimento" placeholder="Ex.: 29/02/1980" onChange={(event) => {
//                                 setDataNascimento(mascaraData(event.target.value))
//                             }}
//                                 value={dataNascimento} required="true" />
//                         </div>

//                     </div>
//                     <div class="row d-flex justify-content-center">

//                         <div class="form-group col-md-3">
//                             <Form.Label>E-mail:</Form.Label>
//                             <Form.Control type="email" placeholder="Ex.: fu.lano@net.com" onChange={(event) => {
//                                 setEmail(event.target.value)
//                             }}
//                                 value={email} required="true" />
//                         </div>
//                         <div class="form-forup col-md-3">
//                             <Form.Label>Telefone</Form.Label>
//                             <Form.Control type="telefone" placeholder="Ex.: (11) 98889-7667" onChange={(event) => {
//                                 setTelefone(mascaraTelefone(event.target.value))
//                             }}
//                                 value={telefone} required="true" />
//                         </div>
//                     </div>
//                         <div class="row d-flex justify-content-center">

//                             <div class="form-group col-md-3">
//                                 <Form.Label>Inserir Senha:</Form.Label>
//                                 <Form.Control name="senha1" type="password" placeholder="Ex.: Abc123" onChange={(event) => {
//                                     setPassword(event.target.value)
//                                 }}
//                                     value={password} required="true" />
//                             </div>
                            
//                             {/* --- Confirmar senha posteriormente --- */}
//                             {/* <div class="form-group col-md-3">
//                                 <Form.Label>Confirmar Senha:</Form.Label>
//                                 <Form.Control name="senha2" type="password" placeholder="Ex.: Abc123" onChange={(event) => {
//                                     setConfPassword(event.target.value)
//                                 }}
//                                     value={confPassword} required="true" />
//                             </div> */}
//                         </div>

//                         <br />
//                         <div class="row justify-content-center">
//                         <div class="col-md-6 d-flex justify-content-around">
//                             <div class="form-check col-md-6 termos">
//                                 <Checkbox texto="Aceito e concordo com os " /> <a className="link-termo" onClick={() => setShow(true)}> <u>Termos e condições</u></a>

//                             </div>
//                         </div>
//                         </div>
//                         <br />
//                         <div class="row d-flex justify-content-center">
//                             <div class="col-12 col-md-4  d-flex justify-content-around">
//                                 <Button label="Cadastrar" type="submit" onClick={(event) => { Cadastrar(event) }} />
//                                 <Button label="Voltar" navigation route="login" class="apoio" />
//                             </div>

//                         </div>
//                         <br />
//                         <div class="row d-flex justify-content-center">

//                             <div class="col-md-4 d-flex justify-content-center">
//                                 <p>
//                                     Já possui conta? <a className="fazer-login" href="/login"> Fazer login</a>
//                                 </p>
//                             </div>
//                         </div>
//                         <br />


//                         <Modal
//                             show={show}
//                             onHide={() => setShow(false)}
//                             dialogClassName="modal-90w"
//                             aria-labelledby="example-custom-modal-styling-title"
//                         >
//                             <Modal.Header closeButton>
//                                 <Modal.Title id="example-custom-modal-styling-title">
//                                     Termos e Condições do site
//                                 </Modal.Title>
//                             </Modal.Header>
//                             <Modal.Body>
//                                 <p>
//                                     Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
//                                     commodi aspernatur enim, consectetur. Cumque deleniti temporibus
//                                     ipsam atque a dolores quisquam quisquam adipisci possimus
//                                     laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
//                                     accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
//                                     reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
//                                     deleniti rem!
//                                 </p>
//                             </Modal.Body>
//                             <Modal.Footer>

//                                 <Button className="btn-modal-termo" onClick={() => setShow(false)}>Concordo</Button>
//                             </Modal.Footer>
//                         </Modal>

//                     <br />
//                 </FormDefault>
//             </>
//         )
//     }

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
                        <Form.Control name="senha1" id="password" type="password" placeholder="Ex.: Abc123" onChange={(event) => {
                            setPassword(event.target.value)
                        }}
                            value={password} required="true" />
                    </div>

                    <div class="form-group col-md-3">
                        <Form.Label>Confirmar Senha:</Form.Label>
                        <Form.Control name="senha2" id="confPassword" type="password" placeholder="Ex.: Abc123" onChange={(event) => {
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