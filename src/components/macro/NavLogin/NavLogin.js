import React, { useState, useEffect } from 'react'
import './NavLogin.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Logo from '../../../assets/imgs/header/logo.png'
import Busca from '../../../assets/imgs/header/busca.png'
import Fale from '../../../assets/imgs/header/fale.png'
import Conta from '../../../assets/imgs/header/conta.png'
import Pedido from '../../../assets/imgs/header/pedido.png'
import Carrinho from '../../../assets/imgs/header/carrinho.png'
import Badge from 'react-bootstrap/Badge'
import InputHeader from '../../micro/Forms/Input/InputHeader';
import axios from 'axios'

function estadoInicial() {
    return { busca: '' }
}


function NavLogin(props) {
    const [values, setValues] = useState(estadoInicial)
    const URL = '/busca/'
    const final = URL + values.busca
    const [qtyCart, setQty] = useState(localStorage.getItem('qtyCart'))
    const [token, setToken] = useState('')
    const [logado, setLogado] = useState(0)
    const [id, setId] = useState(0)
    useEffect(() => {
        setInterval(() => {
            setQty(localStorage.getItem('qtyCart'))
            setToken(localStorage.getItem('token'))
        },500)
        
    },[URL])

    useEffect(() => {
        setQty(localStorage.getItem('qtyCart'))
        setToken(localStorage.getItem('token'))
        let email = localStorage.getItem('user')
        if (token && logado == 0 && email) {
            axios.get("http://localhost:8080/cadastro-cliente/getByEmail/" + email)
                .then((response) => {
                    setId(response.data.id_Cliente)
                    
                })
                .catch((error) => { console.log(error) })
            setLogado(1)
        }
        setInterval(() => {
            if (logado == 1) {
                setTimeout(() => {
                    console.log('token expirado')
                    localStorage.removeItem('token')
                    setToken(null)
                    localStorage.removeItem('user')
                    setLogado(0)
                    window.location.reload()
                }, 599900)
                setLogado(2)
            }
        },10000)
        
    })

    



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

    function minhaConta(){
        let { id } = useParams();
        const [user, setUser] = useState({})
        const token = localStorage.getItem('token')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        useEffect(() => {
            getUser()
        },[])
        const getUser = () =>{
            axios.get("http://localhost:8080/cadastro-cliente/" + id, config)
                .then(response => {
                    setUser(response.data)
                    setDataNascimento(response.data.dataNascimento)
                    
                })
                
            
        }
    }
    function meusPedidos() {

        
        let email = localStorage.getItem('user')
        if (email) {
            axios.get('http://localhost:8080/cadastro-cliente/getByEmail/' + email)
                .then((response) => {
                    window.location.href = "http://localhost:3000/dashboard/" + response.data.id_Cliente
                    localStorage.setItem('defaultIndex', "index")
                })
        } else {
            window.location.href = "http://localhost:3000/login"
        }

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
                            <div class="col-6 col-lg-5">
                                <form action={final}>
                                    <div class="header-pesquisa">


                                        <InputHeader value={values.busca} name='busca' onChange={onChange} className='header-input' type="text" placeholder="O que você está procurando?" arialabel="Search" />
                                        <a href={final} class="header-busca">

                                            <img className='imgBusca' src='http://www.devmedia.com.br/imagens/2013/buscar_grey.png' alt="buscar" />
                                        </a>

                                    </div>
                                </form>
                            </div>
                            <div class="col-4 col-lg-5 d-flex justify-content-end">
                                <div className="row d-flex justify-content-center align-items-center icones-header">

                                    <div className="col-3 header-FC">
                                        <a className="link-icone" href="/faq">
                                            <img className="imagem" src={Fale} />
                                            <span className="icone"> Fale conosco</span>
                                        </a>
                                    </div>

                                    <div className="col-3 header-conta">
                                        <a className="link-icone" onClick={() => { minhaConta() }} href={logado == 0 ? "/login" : "/dashboard/" + id}>
                                            <img className="imagem" src={Conta} />
                                            <span className="icone "> Olá, {user.nome}</span>
                                        </a>
                                    </div>

                                    <div className="col-3 header-Pedidos ">
                                        <div className="link-icone" onClick={() => { meusPedidos() }}>
                                            <img className="imagem" src={Pedido} />
                                            <span className="icone"> Meus Pedidos</span>
                                        </div>
                                    </div>

                                    <div className="col-3 header-carrinho">
                                        <a className="link-icone" href="/carrinho">
                                            <img id="carrinho" className="imagem" src={Carrinho} /><Badge pill bg="danger" className="quantidade-carrinho">{qtyCart}</Badge>
                                            <span className="icone"> Carrinho</span>
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

export default NavLogin;