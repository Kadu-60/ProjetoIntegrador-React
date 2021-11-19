import React from 'react'
import './ListaCarrinho.css'
import { Container, Table } from 'react-bootstrap'
import { Icon } from 'semantic-ui-react'
import BotaoQtd from '../../micro/BotaoQtd/BotaoQtd';

import Produto1 from '../../../assets/imgs/teste/cerveja.png'

import InputMask from "react-input-mask";
function ListaCarrinho(props) {

    return (
        <>
       

            <body className="body-cart " >

                <div className="body-cart cart-template-holder">
                    <br />
                    <p className="title-dash carrinho-titulo" > <Icon className="icon-carrinho-cart" name="shopping cart" /> Meu Carrinho</p>


                    <br />
                    <Container>
                        <div className="lado-esquerdo" id="lado-esquerdo">

                            <Table class="table-cart oi cart-items scroll" id="oi">

                                <thead class="thead-cart">
                                    <tr class="tr-cart">
                                        <th colSpan="2" class="product-cart">Produto</th>

                                        <th class="shipping-date">Entrega</th>
                                        <th class="product-price">Preço</th>
                                        <th class="quantity">Quantidade</th>
                                        <th class="quantity-price">Total</th>
                                        <th class="item-remove">Remover</th>
                                    </tr>
                                </thead>


                                <tbody className="conteudo-cart">





                                    <tr className="product-item">
                                        <td className="product-image"> <a href="/produto">
                                            <img src={Produto1} class="ui tiny middle aligned image" /> </a>
                                        </td>

                                        <td className="product-name product-cart">
                                            <a href="/produto"><span className="titulo-cerveja-cart">Cerveja Madalena Double IPA 600ml  </span></a>
                                        </td>

                                        <td className="shipping-date">
                                            <span className="titulo-entrega-cart">Em até 6 dias úteis</span>
                                        </td>


                                        <td className="product-price">
                                            <span className="titulo-carrinho-lista">R$ 4,99</span>
                                        </td>


                                        <td className="quantity">
                                            <div className="quantidade">
                                            <BotaoQtd className="contador" clainicial={1} passo={1}/>
                                            </div>
                                        </td>


                                        <td className="quantity-price">
                                            <span className="titulo-carrinho-lista">R$ 4,99</span>
                                        </td>


                                        <td className="item-remove ">
                                            <Icon className="lixeira " name="trash alternate outline" />
                                        </td>
                                    </tr>





                                    <tr className="product-item">
                                        <td className="product-image"> <a href="/produto">
                                            <img src={props.img} class="ui tiny middle aligned image" /> </a>
                                        </td>

                                        <td className="product-name product-cart">
                                            <a href="/produto"><span className="titulo-cerveja-cart">{props.nome}  </span></a>
                                        </td>

                                        <td className="shipping-date">
                                            <span className="titulo-entrega-cart">{props.frete}</span>
                                        </td>


                                        <td className="product-price">
                                            <span>{props.preco}</span>
                                        </td>


                                        <td className="quantity">
                                            <div class="contador">
                                                <div class="button" data-sinal="-1" >-</div>
                                                <div class="mostrador">0</div>
                                                <div class="button" data-sinal="1">+</div>
                                            </div>
                                        </td>


                                        <td className="quantity-price">
                                            <span>{props.total}</span>
                                        </td>


                                        <td className="item-remove ">
                                            <Icon className="lixeira " name="trash alternate outline" />
                                        </td>
                                    </tr>







                                </tbody>








                            </Table>

                        </div>




                    </Container>

                    <br />    <br />    <br />
                </div>

                <div className="global-lado-direito">
                    <div className="botao-continuar-cmp">
                        <a class="keep-shopping" href="/produtos">
                            <Icon className="icone-comprando" name="angle left" /> Continuar comprando
                        </a>
                    </div>
                    <br />


                    <div className="lado-direito" id="lado-direito">
                        <div className="div-subtotal " >

                            <ul className="lista-carrinho-total">

                                <p className="titulo-entrega"> <Icon className="icone-resumo" name="truck" /><b> Entrega</b></p>
                                <li className="sub-global">
                                    <p>Seu CEP  <span className="texto-total-frete-sub" id="mais-cep"> <b>Frete R$10,00</b> </span> </p>




                                    <InputMask mask="99999-999" type="text" class="form-control" placeholder="00000-000" />
                                    <span class="input-group-btn">
                                        <button class=" btn-default form-control ok-cep" onClick={verMais} id="btnCalcular" type="button">Calcular</button>
                                    </span>
                                </li>
                               
                                <span id="pontos">
                                </span>

                                <br />

                            </ul>

                        </div>


                        <div className="div-total " >
                            <ul className="lista-carrinho-total">

                                <p> <Icon className="icone-resumo" name="file alternate outline" /><b>Resumo do Pedido</b></p>
                                <li className="sub-global"><b>Subtotal</b> <span className="texto-total-frete-sub"> R$ 20,00 {props.subtotal}</span>   </li>
                                <li className="sub-global"><b>Frete </b>  <span className="texto-total-frete">  R$ 10,00{props.frete}</span>   </li>

                                <li className="sub-global borda-total"><b>Total </b> <span className="texto-total-frete-total">  R$ 30,00{props.total}</span>   </li>
                                <button class="btn-finalizar-compra" type="button"><a href="checkout">Finalizar Compra</a> <Icon className="icone-finalizar-compra" name="angle right" /></button>
                                <br />
                                <br />
                            </ul>

                        </div>
                    </div>
                </div>


                <br />
                <br />
                <br />



            </body>


        </>
    )
}

function verMais() {
    var pontos = document.getElementById("pontos");
    var meusPedidos = document.getElementById("mais-cep");
    var btnCalcular = document.getElementById("btnCalcular");

    if (pontos.style.display === "none") {
        pontos.style.display = "inline";
        meusPedidos.style.display = "none";
        btnCalcular.innerHTML = "Calcular";
    } else {
        pontos.style.display = "none";
        meusPedidos.style.display = "inline";


    }
}



export default ListaCarrinho