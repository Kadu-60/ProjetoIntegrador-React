import React, { useState, useContext, useEffect } from "react";
import './Login.css'
import { useHistory } from "react-router-dom";
import Input from "../../components/micro/Forms/Input/Input";
import FormDefault from "../../components/micro/Forms/FormDefault/FormDefault";
import axios from 'axios'
import Swal from 'sweetalert2'




function Login(props) {

    const URL = 'http://localhost:8080/'
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailRec, setEmailRec] = useState('')
    const [valid, setValid] = useState("invalid-feedback")
    let token = ''

    useEffect(() => {
        token = localStorage.getItem("token")
        if (token != null) {
            setEmail(localStorage.getItem("user"))
            const config = {
                headers: { Authorization: `Bearer ${token}` }
            };
            axios.get(URL+"cadastro-cliente/getByEmail/"+email, config)
                .then((response) => {
                    let {id_Cliente} = response.data
                    window.location.href = "http://localhost:3000/dashboard/" + id_Cliente
                })
                .catch((error) => { console.log(error) })

        }
    })
    function fazerLogin(event) {
        event.preventDefault();

        axios.post(URL + "login", { "email": email, "password": password })
            .then((response) => {
                token = response.data;
                localStorage.setItem('token', token)
                localStorage.setItem('user', email)
                const config = {
                    headers: { Authorization: `Bearer ${token}` }
                };
                axios.get("http://localhost:8080/cadastro-cliente/getByEmail/"+email, config)
                    .then((response) => {
                        let {id_Cliente} = response.data
                        window.location.href = "http://localhost:3000/dashboard/" + id_Cliente
                    })
                    .catch((error) => { console.log(error) })
            })
            .catch((error) => {
                setPassword('')
                setValid("invalid-feedback d-block")
            })
    }

    function recuperarSenha(event){
        event.preventDefault();

        axios.get(URL + 'cadastro-cliente/senha/'+emailRec)
        .then((response) => {
            Swal.fire({
                title: 'sucesso!',
                text: 'Verifique seu E-mail!',
                icon: 'success',
                confirmButtonText: 'fechar'
              })
            window.location.href = "http://localhost:3000/login"
        })
        .catch((error) => { 
            console.log(error) 
            Swal.fire({
                title: 'sucesso!',
                text: 'Verifique seu E-mail!',
                icon: 'success',
                confirmButtonText: 'fechar'
              })
            window.location.href = "http://localhost:3000/login"
        })
        
    }

    return (
        <>
            <div className="container">
                <form className="form">
                    <div class="row d-flex justify-content-center pt-5">
                        <div class="col d-flex justify-content-center">
                            <p className="title-dash">Faça seu login</p>
                            <br />
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">

                        <div class="form-group col-md-4">
                            <Input value={email} name='email' onChange={(event) => { setEmail(event.target.value); setValid("invalid-feedback ml-1") }} corLabel='preto' label="E-mail" type="text" placeholder="user@email.com" />
                            <div className={valid}>Dados incorretos</div>
                        </div>

                    </div>
                    <div class="row d-flex justify-content-center">

                        <div class="form-group col-md-4">
                            <Input value={password} name='password' onChange={(event) => { setPassword(event.target.value); setValid("invalid-feedback ml-1") }} corLabel='preto' label="Senha" type="password" placeholder="Digite sua senha" required="true" />
                            <div className={valid}>Dados incorretos</div>
                        </div>
                    </div>
                    <br></br>
                    <div class="row d-flex justify-content-center">
                        <div class="col-12 col-md-4  d-flex justify-content-around">
                            <button type="submit" class="comprar btn btn-comprar col-6 col-lg-12" onClick={(event) => { fazerLogin(event) }}>Fazer Login</button>

                        </div>


                    </div>
                    <br />
                    <div class="row d-flex justify-content-center">

                        <div class="col-md-4 d-flex justify-content-center">
                            <p>
                                Esqueceu sua senha? <a  href="#exampleModal" className="fazer" data-bs-toggle="modal" data-bs-target="#exampleModal"> Recuperar senha</a>
                            </p>
                        </div>
                    </div>
                    <br />
                    <div class="row d-flex justify-content-center">

                        <div class="col-md-4 d-flex justify-content-center">

                            <p>
                                Ainda não possui conta? <a className="fazer" href="/cadastro"> Crie sua conta</a>
                            </p>
                        </div>
                    </div>

                </form>
                </div>
          
            <br /><br />

            <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Por favor, informe seu e-mail</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div class="modal-body">
                            <form>

                                <input type="email" class="form-control" onChange={(event)=>{ setEmailRec(event.target.value)}} id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex:jose@email.com" required />
                            </form>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn apoio" data-bs-dismiss="modal">Voltar</button>
                            <button type="button" onClick={(event)=>{ recuperarSenha(event)}} class="btn apoio">Confirmar</button>
                        </div>
                    </div>
                </div>
            </div>
           

        </>
    );
}

export default Login;
