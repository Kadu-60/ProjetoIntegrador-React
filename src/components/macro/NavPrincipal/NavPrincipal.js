import React, { useState } from 'react'
import './NavPrincipal.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/imgs/header/logo.png'
import Busca from '../../../assets/imgs/header/busca.png'
import Fale from '../../../assets/imgs/header/fale.png'
import Conta from '../../../assets/imgs/header/conta.png'
import Pedido from '../../../assets/imgs/header/pedido.png'
import Carrinho from '../../../assets/imgs/header/carrinho.png'
import Badge from 'react-bootstrap/Badge'
import InputHeader from '../../micro/Forms/Input/InputHeader';

function estadoInicial() {
        return {busca: '' }
    }


function NavPrincipal(props) {

    

    const [values, setValues] = useState(estadoInicial)
    const URL = '/busca/'
    const final = URL + values.busca



    function onChange(event) {
        const { value, name } = event.target

        setValues({
            ...values,
            [name]: value,
        })

    }

    function clicar(event) {
        event.preventDefault()
        console.log(final)
        console.log(values)




    }



    return (
        <>
            <div className="container-fluid navPrincipal">
                <div className="row align-items-start">

                    <nav className="navbar navbar-expand-lg navbar-ligth  ">


                        <div className="row header-nav d-flex justify-content-between align-items-center">
                            <div class="col-2">
                                <a className="navbar-brand col-2" href="/home"> <img className="header-logo" src={Logo} alt="DevBrew" /> </a>
                            </div>
                            <div class="col-7 col-lg-5">
                                <form action={final}>
                                    <div class="header-pesquisa">

                                        
                                            <InputHeader value={values.busca} name='busca' onChange={onChange} className='header-input' type="text" placeholder="O que você está procurando?" arialabel="Search"/>
                                        <a href={final} class="header-busca">

                                            <img src={Busca} alt="buscar" />
                                        </a>

                                    </div>
                                </form>
                            </div>
                            <div class="col-3 col-lg-5 d-flex justify-content-end">
                                <div className="row d-flex justify-content-center align-items-center">

                                    <div className="col-3 header-FC">
                                        <a className="link-icone" href="/faq">
                                            <img className="imagem" src={Fale} />
                                            <p className="icone"> Fale Conosco</p>
                                        </a>
                                    </div>

                                    <div className="col-3 header-conta">
                                        <a className="link-icone" href="/login">
                                            <img className="imagem" src={Conta} />
                                            <p className="icone"> Minha Conta</p>
                                        </a>
                                    </div>

                                    <div className="col-3 header-Pedidos ">
                                        <a className="link-icone" href="/dashboard">
                                            <img className="imagem" src={Pedido} />
                                            <p className="icone">  Meus Pedidos</p>
                                        </a>
                                    </div>

                                    <div className="col-3 header-carrinho">
                                        <a className="link-icone" href="/carrinho">
                                            <img id="carrinho" className="imagem" src={Carrinho} /><Badge pill bg="danger">0</Badge>
                                            <p className="icone">Carrinho</p>
                                        </a>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </nav>

                </div>
            </div>

        </>
    )
}

export default NavPrincipal;