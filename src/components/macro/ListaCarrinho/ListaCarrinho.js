import React, { useEffect, useState } from 'react'
import './ListaCarrinho.css'
import { Container, Table } from 'react-bootstrap'
import { Icon } from 'semantic-ui-react'
import InputMask from "react-input-mask";
import ProdutoCarrinho from './ProdutoCarrinho'
import axios from 'axios'

function ListaCarrinho(props) {
    const [subtotal, setSubtotal] = useState(0)
    const [cards, setCards] = useState([])
    let conteudoTable = () => {
        if ((localStorage.getItem("cart")
            ? false
            : true) || localStorage.getItem("cart") == '[]' || localStorage.getItem("cart") == []) {


            return (
                <>
                    <div className="container d-flex justify-content-center align-content-center">
                        <p>Carrinho vazio</p>
                    </div>
                </>
            )

        } else {
            return (
                <>
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
                            {
                                cards.map((prod) => (
                                    <ProdutoCarrinho prod={prod} />
                                ))
                            }
                        </tbody>
                    </Table>
                </>
            )
        }
    }
    const checkout = (event)=>{
        if ((localStorage.getItem("cart")? false: true) || localStorage.getItem("cart") == '[]' || localStorage.getItem("cart") == []) {
            alert("carrinho vazio")
        }else{
            if(localStorage.getItem("user")){
                window.location.href = "http://localhost:3000/checkout"
            }else{
                window.location.href = "http://localhost:3000/login"
            }
            
        }
        
    }

    useEffect(() => {
        let cart = ((localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : []))
        if (cart != []) {
            axios.post('http://localhost:8080/Card/multi', cart)
                .then(response => {
                    setCards(response.data)
                    let acumulador = 0
                    response.data.map((data) => {
                        cart.map((item) => {
                            if (item == data.id_produto) {
                                acumulador += data.valor_preco;
                            }
                        })
                    })
                    setSubtotal(acumulador)
                })
                .catch(error => {
                    if (error.response) {
                        console.log(error.response)
                    } else if (error.request) {
                        console.log(error.request)
                    } else if (error.message) {
                        console.log(error.message)
                    }
                })
        }

    }, [])

    return (
        <>


            <body className="body-cart " >

                <div className="body-cart cart-template-holder">
                    <br />
                    <p className="title-dash carrinho-titulo" > <Icon className="icon-carrinho-cart" name="shopping cart" /> Meu Carrinho</p>


                    <br />
                    <Container>
                        <div className="lado-esquerdo" id="lado-esquerdo">


                            {
                                conteudoTable()
                            }
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

                        <div className="div-total " >
                            <ul className="lista-carrinho-total">

                                <p> <Icon className="icone-resumo" name="file alternate outline" /><b>Resumo do Pedido</b></p>
                                <li className="sub-global"><b>Subtotal</b> <span className="texto-total-frete-sub" id={"subTotal"}> R$ {(subtotal||0).toFixed(2).replace('.', ',')}</span>   </li>
                                <li className="sub-global"><b>Frete </b>  <span className="texto-total-frete">  R$ 15,00</span>   </li>

                                <li className="sub-global borda-total"><b>Total </b> <span className="texto-total-frete-total" id={"total"}>  R$ {((subtotal||0) + 15).toFixed(2).replace('.', ',')}</span>   </li>
                                <button class="btn-finalizar-compra" type="button"  onClick={(event)=>{checkout(event)}}>Finalizar Compra<Icon className="icone-finalizar-compra" name="angle right" /></button>
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