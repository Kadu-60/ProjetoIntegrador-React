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

function PedidoFinalizado(props) {
  return (
    <>
        <div class="container">
            <div class="row pt-5">
                <div class="col d-flex justify-content-center">
                    <h2 class="titulo">Pedido finalizado</h2>
                </div>
            </div>
            <div class="row">
                <div class="col-12 d-flex justify-content-center">
                    <p>
                        Seu pedido foi recebido por nós e em breve estará com você!
                    </p>
                </div>
                <div class="col-12 d-flex justify-content-center">
                    <img class="barril" src={Barril} alt=""/>
                </div>
                <div class="col-12 d-flex justify-content-center">
                    <h5 class="titulo pedido">Pedido Nº</h5><NumeroPedido numeroPedido='XXXXX'/>
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
                    <h5 class="titulo resumo">Resumo do pedido:</h5>
                </div>
                <div class=" col-12 col-md-9 pt-2 d-flex justify-content-center">
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
                  <BotaoVoltar type='submit' texto="Voltar para a home"/>
                  <BotaoVoltar type='submit' texto="Ver pagina do pedido"/>
                
            </div>
            </div>

        </div>
        
    </>
  );
}

export default PedidoFinalizado;
