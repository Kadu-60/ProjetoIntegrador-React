import React, {useState, useContext} from "react";
import './Login.css'
import { useHistory } from "react-router-dom";
import Input from "../../components/micro/Forms/Input/Input";
import BotaoComprar from "../../components/micro/BotaoConfirmar/BotaoConfirmar";
import FormDefault from "../../components/micro/Forms/FormDefault/FormDefault";
import StoreContext from "../../components/Context/Context";
import axios from 'axios'

function estadoInicial(){
        return{email: '', password: ''}
}

function fazerLogin({email, password}){
    if(email === 'admin' && password === 'admin'){
        return {token: '1234'}
    }
    return {error: 'invalido'}
}

function Login(props) {

    const [values, setValues] = useState(estadoInicial)
    const {setToken} = useContext(StoreContext)
    const history = useHistory()

    function onChange(event){
        const {value, name} = event.target

        setValues({
            ...values,
            [name]: value, 
        })

    }

    function onSubmit(event){
        event.preventDefault()

        const {token} = fazerLogin(values)

        if(token){
            setToken(token)
            return history.push("/")
        }

        setValues(estadoInicial )
    }

  return (
    <>
        
        <FormDefault onSubmit={onSubmit}>
                <div class="row d-flex justify-content-center pt-5">
                    <div class="col d-flex justify-content-center">
                    <p className="title-dash">Faça seu login</p>
                    <br/>
                    </div>
                </div>
                <div class="row d-flex justify-content-center">
                    
                    <div class="form-group col-md-4">
                    <Input value={values.email} name='email' onChange={onChange} corLabel='preto' label="E-mail" type="text" placeholder="user@email.com"/>
                        
                    </div>
                   
                </div>
                <div class="row d-flex justify-content-center">
                    
                    <div class="form-group col-md-4">
                        <Input value={values.password} name='password' onChange={onChange} corLabel='preto' label="Senha" type="password" placeholder="Digite sua senha" required="true"/>
                    </div>
                </div>
                <br></br>
                <div class="row d-flex justify-content-center">
                       <div class="col-12 col-md-4  d-flex justify-content-around">
                           <BotaoComprar texto="Fazer Login"/>
                           
                       </div>
                    
                    
               </div>
               <br/>
               <div class="row d-flex justify-content-center">
                
                    <div class="col-md-4 d-flex justify-content-center">
                        <p>
                            Esqueceu sua senha? <a href=""data-bs-toggle="modal" data-bs-target="#exampleModal"> Recuperar senha</a>
                        </p>
                    </div>
               </div>
               <br/>
               <div class="row d-flex justify-content-center">
               
                <div class="col-md-4 d-flex justify-content-center">
               
                    <p>
                        Ainda não possui conta? <a href="/cadastro"> Crie sua conta</a>
                    </p>
                </div>
               </div>

            </FormDefault>
            <br/><br/>

<div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title" id="exampleModalLabel">Por favor, informe seu e-mail</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <form>
            
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ex:jose@email.com" required/>
              </form>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Voltar</button>
          <button type="button" class="btn apoio">Confirmar</button>
        </div>
      </div>
    </div>
  </div>

          
    </>
  );
}

export default Login;
