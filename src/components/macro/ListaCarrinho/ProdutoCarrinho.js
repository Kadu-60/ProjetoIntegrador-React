import React, { useState, useEffect } from 'react'
import './ListaCarrinho.css'
import { Container, Table } from 'react-bootstrap'
import { Icon } from 'semantic-ui-react'
import BotaoQtd from '../../micro/BotaoQtd/BotaoQtd';

import InputMask from "react-input-mask";
function ProdutoCarrinho(props) {
    const [numero, setNumero] = useState(1)

    const incremento = () => {
        setNumero(numero + 1)


    }
    const decremento = () => {
        if (numero > 1) {
            setNumero(numero - 1)
        }
    }
    const remove = () => {
        let id = props.prod.id_produto
        let cart = ((localStorage.getItem("cart")
        ? JSON.parse(localStorage.getItem("cart"))
        : []))
        console.log(cart)
        cart.splice(cart.indexOf(id), 1)
        localStorage.setItem("cart", JSON.stringify(cart))
        localStorage.setItem("qtyCart", JSON.stringify(cart.length))
        window.location.reload()
    }

    return (
        <>

            <tr className="product-item">
                <td className="product-image"> <a href="/produto">
                    <img src={props.prod.foto} class="ui tiny middle aligned image" /> </a>
                </td>

                <td className="product-name product-cart">
                    <a href="/produto"><span className="titulo-cerveja-cart">{props.prod.nome_produto}</span></a>
                </td>

                <td className="shipping-date">
                    <span className="titulo-entrega-cart">Em até 6 dias úteis</span>
                </td>


                <td className="product-price">
                    <span className="titulo-carrinho-lista">R$ {(props.prod.valor_preco || 0).toFixed(2)}</span>
                </td>


                <td className="quantity">
                    <div className="quantidade">
                        <div class="col btn-mais mt-5">
                            <div class="btn-group inline">

                                <div class="contador contador-pag-produto">
                                    <div onClick={decremento} class="contador-btn btn-success" data-sinal="-1" >-</div>
                                    <div class="mostrador">{numero}</div>
                                    <div onClick={incremento} class="contador-btn btn-danger" data-sinal="1">+</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </td>


                <td className="quantity-price">
                    <span className="titulo-carrinho-lista" id={"Total"+props.prod.id_produto}>R$ {((props.prod.valor_preco || 0) * numero).toFixed(2)}</span>
                </td>


                <td className="item-remove ">
                    <button className="btn btn-rmv-cart" onClick={remove}>
                        <Icon className="lixeira " name="trash alternate outline" />
                    </button>

                </td>
            </tr>

        </>
    )
}



export default ProdutoCarrinho