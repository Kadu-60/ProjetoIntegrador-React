import React, {useState, useContext} from "react";
import './Login.css'
import { useHistory } from "react-router-dom";
import Input from "../../components/micro/Forms/Input/Input";
import BotaoComprar from "../../components/micro/BotaoConfirmar/BotaoConfirmar";
import FormDefault from "../../components/micro/Forms/FormDefault/FormDefault";
import StoreContext from "../../components/Context/Context";

function estadoInicial(){
        return{email: '', password: ''}
}

function fazerLogin({email, password}){
    axios.put(`localhost:8080/login`)
        .then(response => {
            return response
        })
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
            history.push("/")
        }

        setValues(estadoInicial )
    }

  return (
    <>
        
        <FormDefault onSubmit={onSubmit}>
                <div class="row d-flex justify-content-center pt-5">
                    <div class="col d-flex justify-content-center">
                        <h2 className="titulo">Faça seu login</h2>
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
                        Esqueceu sua senha? <a href="recuperarSenha.html"> Recuperar senha</a>
                    </p>
                </div>
               </div>
               <div class="row d-flex justify-content-center">
                
                <div class="col-md-4 d-flex justify-content-center">
                    <p>
                        Ainda não possui conta? <a href="../cadastroCliente/cadastroCliente.html"> Crie sua conta</a>
                    </p>
                </div>
               </div>
            </FormDefault>
    </>
  );
}

export default Login;
