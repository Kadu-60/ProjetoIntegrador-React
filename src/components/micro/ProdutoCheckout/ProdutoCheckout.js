import React, { useState, useEffect } from 'react'
import BotaoQtd from '../../micro/BotaoQtd/BotaoQtd';

function ProdutoCheckout(props) {
    const [qty , setQty] = useState(0)
    useEffect(()=>{
        let count = 0
        let cart = ((localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : []))
        cart.map((cartItem)=>{
            if(cartItem==props.product.id_produto){
                count++;
            }
        })
        setQty(count);
    })
    
    return (
        <>
            <tr className="product-item">
                <td className="product-image"> <a href={"/produto/"+props.product.id_produto}>
                    <img src={props.product.foto} class="ui tiny middle aligned image" /> </a>
                </td>

                <td className="product-name product-cart">
                    <a href="/produto"><span className="titulo-cerveja-cart">{props.product.nome_produto}</span></a>
                </td>

                <td className="quantidade-produto-checkout">
                    <span className="titulo-quantidade-cart">{qty} un</span>
                </td>
                <td className="product-checkout-price">
                    <span>R$ {(props.product.valor_preco*qty).toFixed(2).replace('.',',')}</span>
                </td>
        
            </tr>
        </>
    );
}

export default ProdutoCheckout;