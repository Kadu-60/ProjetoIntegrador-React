import React from "react";
import './Login.css'
import Input from "../../components/micro/Forms/Input/Input";
import BotaoComprar from "../../components/micro/BotaoConfirmar/BotaoConfirmar";

function Login(props) {
  return (
    <>
        <div class="container ">
            
                <div class="row d-flex justify-content-center pt-5">
                    <div class="col d-flex justify-content-center">
                        <h2 className="titulo">Faça seu login</h2>
                    </div>
                </div>
                <div class="row d-flex justify-content-center">
                    
                    <div class="form-group col-md-4">
                    <Input corLabel='preto' label="E-mail" type="text" placeholder="user@email.com"/>
                        
                    </div>
                   
                </div>
                <div class="row d-flex justify-content-center">
                    
                    <div class="form-group col-md-4">
                        <Input corLabel='preto' label="Senha" type="password" placeholder="Digite sua senha" required="true"/>
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

            
           
        </div>
    </>
  );
}

export default Login;
