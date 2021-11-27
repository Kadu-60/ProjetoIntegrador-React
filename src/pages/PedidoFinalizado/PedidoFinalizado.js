import React, { useState, useEffect } from 'react'
import './PedidoFinalizado.css'
import TitulosHome from "../../components/micro/TitulosHome/TitulosHome";
import CaixaInfo from "../../components/micro/CaixaInfo/CaixaInfo";
import Endereco from "../../components/Endereco/Endereco";
import Pagamento from "../../components/Pagamento/Pagamento"
import TotalPedido from "../../components/TotalPedido/TotalPedido";
import BotaoVoltar from "../../components/micro/BotaoVoltar/BotaoVoltar";
import Barril from "./images/barril.png"
import NumeroPedido from "../../components/NumeroPedido/NumeroPedido";
import { Icon } from 'semantic-ui-react'
import { useParams } from "react-router-dom"
import axios from 'axios'
import Barco from "../../assets/imgs/teste/barco.gif"

function PedidoFinalizado(props) {
    const params = useParams(":pesq")

    const [pesq, setPesq] = useState('')
    const [pedido, setPedido] = useState([])
    const [endereco, setEndereco] = useState([])
    const [cartao, setCartao] = useState([])
    const [pagamento, setPagamento] = useState([])
    const [numero, setNumero] = useState([])


    
    const ULRPedidoFinalizado = "http://localhost:8080/Pedido/" + params.pesq

    useEffect(() => {
        const fetchProds = async () => {

            const res = await axios.get(ULRPedidoFinalizado)
            setPedido(res.data)
            setEndereco(res.data.endereco)
            setPagamento(res.data.pagamento)
            setCartao((res.data.cartao))
        }
        

        fetchProds()
        
        

    }, [])
    function MeusPedidos(){
        localStorage.setItem('defaultIndex', "index")
        let email = localStorage.getItem('user')
        axios.get('http://localhost:8080/cadastro-cliente/getByEmail/' + email)
                .then((response) => {
                    window.location.href="http://localhost:3000/dashboard/"+response.data.id_Cliente
                })
    }
    useEffect(()=>{
        setNumero((cartao.numero))
    })

    const final = "" + numero
    


    return (
        <>
            <body className="body-finalizado">

                <div class="container">
                    <div class="row pt-5">
                        <div class="col d-flex justify-content-center">
                            <p className="title-dash"> Pedido confirmado <Icon name="chevron circle down" className="icone-pedido-finalizado"/></p>
                        </div>
                    </div>
                        <div class="col-12 d-flex justify-content-center">
                            <img classname="barco" src={Barco} alt="" width="90px"/>
                        </div>
                        <div class="col-12 d-flex justify-content-center">
                            <h5 class="titulo-pedido">Pedido Nº<NumeroPedido className="num-pedido" numeroPedido={pedido.id} /></h5>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-center">
                        <div className='col-9'>
                            <TitulosHome texto='' />

                    </div>
                    <div class="row d-flex justify-content-center">
                        <div class="col-md-2"></div>
                        <div class="col-12 col-md-10 d-flex">
                            <h5 class="resumo"><b>Resumo do pedido:</b></h5>
                        </div>
                        <div class=" col-12 col-md-9 pt-2 d-flex justify-content-center resumo-pedido-end">
                            <div class="col-12 col-md-10 ">
                                <div className='row d-flex justify-content-around'>
                                    <CaixaInfo titulo='Endereço de envio'>
                                    <Endereco rua={endereco.rua} numero={endereco.numero} bairro={endereco.bairro} cidade={endereco.cidade} estado={endereco.estado} cep={endereco.cep}/>
                                </CaixaInfo>
                                <CaixaInfo titulo='Forma de pagamento'>
                                    <Pagamento finalCartao={final.substring(12,16)} parcelas={pagamento.parcelamento}/>
                                </CaixaInfo>

                                <CaixaInfo titulo="Total do Pedido">
                                    <TotalPedido subtotal={(+pedido.subtotal).toFixed(2).toString().replace('.', ',')} frete='15,00' total={(+pedido.total).toFixed(2).toString().replace('.', ',')} />
                                </CaixaInfo>
                                
                                </div>
                                

                            </div>
                        </div>
                    </div>
                    <div class="row d-flex justify-content-around">
                        <div class="col-12  mt-4 d-flex justify-content-around">

                            <button className=" btn btn-voltarHome"><a className="link-finalizado-pedido" href="/home"> Voltar para home</a></button>
                            <button className=" btn btn-voltarHome"><a className="link-finalizado-pedido" onClick={() =>{MeusPedidos()}}> Ver página do pedido</a></button>

                        </div>
                    </div>

                </div>
                <br /><br />
                <br /><br />


            </body>


        </>
    );
}

export default PedidoFinalizado;
