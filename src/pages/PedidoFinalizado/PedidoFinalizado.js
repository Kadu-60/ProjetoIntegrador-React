import React from "react";
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

function PedidoFinalizado(props) {
  return (
    <>
    <body className="body-finalizado">

    <div class="container">
            <div class="row pt-5">
                <div class="col d-flex justify-content-center">
                <p className="title-dash"> Pedido confirmado</p>
                </div>
            </div>
          


            <br/>
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    <p>
                        Seu pedido foi recebido por nós e em breve estará com você!
                    </p>
                </div>
                <br/>
                <div class="col-12 d-flex justify-content-center">
                    <img class="barril" src={Barril} alt=""/>
                </div>
                <div class="col-12 d-flex justify-content-center">
                    <h5 class="titulo-pedido">Pedido Nº<NumeroPedido className="num-pedido" numeroPedido='XXXXXXXX'/></h5>
                </div>
            </div>
            <div class="row  d-flex justify-content-center">
                <div className='col-9'>
                    <TitulosHome texto=''/>
                </div>
                
            </div>
            <div class="row d-flex justify-content-center">
                <div class="col-md-2"></div>
                <div class="col-12 col-md-10 d-flex justify-content-start">
                    <h5 class="resumo"><b>Resumo do pedido:</b></h5>
                </div>
                
                <div class=" col-12 col-md-9 pt-2 d-flex justify-content-center resumo-pedido-end">
                    <div class="col-12 col-md-10 d-flex justify-content-between">
                        <CaixaInfo titulo='Endereço de envio'>
                            <Endereco rua='Rua Brasileirinho, 2002' bairro='Jardim Tropical' cidade='São Paulo' estado='SP' cep='12345678'/>
                        </CaixaInfo>
                        <CaixaInfo titulo='Forma de pagamento'>
                            <Pagamento finalCartao='8607' parcelas='2' valorParcela='25,50'/>
                        </CaixaInfo>
                        
                        <CaixaInfo titulo="Total Pedido">
                            <TotalPedido subtotal='50,99' frete='15,00' total="50,99"/>
                        </CaixaInfo>
                        
                    </div>
                </div>
            </div>
            <div class="row d-flex justify-content-around">
              <div class="col-12  mt-4 d-flex justify-content-around">

             <button className=" btn btn-voltarHome"><a className="link-finalizado-pedido"href="/home"> Voltar para home</a></button>
             <button className=" btn btn-voltarHome"><a className="link-finalizado-pedido"href="/dashboard"> Ver página do pedido</a></button>
                
            </div>
            </div>

        </div>
        <br/><br/>
        <br/><br/>


    </body>
       
        
    </>
  );
}

export default PedidoFinalizado;
