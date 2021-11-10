import React from "react"
import '../Login/Login.css'
import Input from "../../components/micro/Forms/Input/Input"
import FormDefault from "../../components/macro/Forms/FormDefault/FormDefault"
import Button from "../../components/micro/Button/Button"
import Title from "../../components/micro/Title/Title"

export default class Login extends React.Component {
    constructor(props) {
        super(props);
        this.state = {forgot: false};
    }

    login() {
        alert('Usuário logado com sucesso!');
    }
    forgot() {
        this.setState({forgot: true})
    }

    render() {
        return (
            <FormDefault>
                
            <div>
            <div class="row d-flex justify-content-center pt-5 titulo">
                    <h1 class="titulo">Faça seu login</h1>
                </div>
                {this.state.forgot === false && <div>
                    <Input corLabel='preto' label="E-mail" type="email" placeholder="usuario@email.com"/> <br/>
                    <Input corLabel='preto' label="Senha" type="password" placeholder="Digite sua senha" required="true"/><br/>
                    
                    <button onClick={this.login.bind(this)} class="conversao btn-custom-default">Login</button>
                    <button onClick={this.forgot.bind(this)} class="apoio btn-custom-default">Esqueci a Senha</button>
                </div>}
                {this.state.forgot === true && <ForgotPassword/>}
            </div>
            </FormDefault>
        );
    }
}

class ForgotPassword extends React.Component {

    reset() {
        alert('Sua senha foi enviada por e-mail');
    }

    render() {
        return (
        <div>
            <Input corLabel='preto' label="Digite seu e-mail para recuperar senha" type="email" placeholder="usuario@email.com"/>
            <button onClick={this.reset.bind(this)} class="apoio btn-custom-default">Resetar Senha</button>

        </div>)
    }
}
