import React, { useState, useEffect } from 'react'
import './ListaCarrinho.css'
import { Container, Table } from 'react-bootstrap'
import { Icon } from 'semantic-ui-react'
import BotaoQtd from '../../micro/BotaoQtd/BotaoQtd';
import axios from 'axios'
import InputMask from "react-input-mask";
import Swal from 'sweetalert2'
function ProdutoCarrinho(props) {

    const [estoque, setEstoque] = useState(50)
    const [numero, setNumero] = useState(1)

    const incremento = () => {
        if ((numero + 1 <= estoque)) {
            setNumero(numero + 1)
            let cartList = localStorage.getItem("cart")
                ? JSON.parse(localStorage.getItem("cart"))
                : []
            cartList.push(props.prod.id_produto)
            let cartString = JSON.stringify(cartList)
            localStorage.setItem("cart", cartString)
            localStorage.setItem('qtyCart', JSON.stringify(cartList.length))
            props.att(props.attval+1);
        } else {
            Swal.fire({
                title: 'Erro!',
                text: 'quantidade selecionada acima do estoque',
                icon: 'error',
                confirmButtonText: 'fechar'
              })
        }

    }
    const decremento = () => {
        if (numero > 1) {
            setNumero(numero - 1)
        }

        let cartList = localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : []
        cartList.splice(cartList.indexOf(props.prod.id_produto), 1)
        localStorage.setItem("cart", JSON.stringify(cartList))
        localStorage.setItem('qtyCart', JSON.stringify(cartList.length))
        props.att(props.attval+1);
    }


    const remove = () => {
        let id = props.prod.id_produto
        let cart = ((localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : []))
        let indice = cart.indexOf(id);
        while (indice >= 0) {
            cart.splice(indice, 1);
            indice = cart.indexOf(id);
        }
        localStorage.setItem("cart", JSON.stringify(cart))
        localStorage.setItem("qtyCart", JSON.stringify(cart.length))
        props.att(props.attval+1);
    }


    useEffect(() => {
        let cart = ((localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : []))
        let count = 0
        cart.map((item) => {
            if (item == props.prod.id_produto) {
                count++;
            }

        })



        setNumero(count)
        axios.get('http://localhost:8080/Estoque/' + props.prod.id_produto)
            .then((response) => {
                setEstoque(response.data.quantidade)
            })
    }, [])


    return (
        <>

            <tr className="product-item">
                <td className="product-image"> <a href={"/produto/"+props.prod.id_produto}>
                    <img src={props.prod.foto} class="ui tiny middle aligned image" /> </a>
                </td>

                <td className="product-name product-cart">
                    <a href="/produto"><span className="titulo-cerveja-cart">{props.prod.nome_produto}</span></a>
                </td>

                <td className="shipping-date">
                    <span className="titulo-entrega-cart">Em até 6 dias úteis</span>
                </td>


                <td className="product-price">
                    <span className="titulo-carrinho-lista">R$ {(props.prod.valor_preco || 0).toFixed(2).replace('.', ',')}</span>
                </td>


                <td className="quantity">
                    <div className="quantidade">
                        <div class="col btn-mais mt-5">
                            <div class="btn-group inline">

                                <div class="contador contador-pag-produto">
                                    <div onClick={decremento} min="1" class="contador-btn btn-danger" data-sinal="-1">-</div>
                                    <div class="mostrador">{numero}</div>
                                    <div onClick={incremento} max="50" class="contador-btn btn-success" data-sinal="1">+</div>
                                </div>

                            </div>
                        </div>
                    </div>
                </td>


                <td className="quantity-price">
                    <span className="titulo-carrinho-lista" id={"Total" + props.prod.id_produto}>R$ {((props.prod.valor_preco || 0) * numero).toFixed(2).replace('.', ',')}</span>
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