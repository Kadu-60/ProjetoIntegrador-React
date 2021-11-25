import React from 'react'
import { Icon } from 'semantic-ui-react';
import './BotaoConfirmar.css'

function BotaoConfirmar(props) {
  const addToCart = () => {
    let cartList = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : []
    cartList.push(props.id)
    let cartString = JSON.stringify(cartList)
    localStorage.setItem("cart", cartString)
    localStorage.setItem('qtyCart', JSON.stringify(cartList.length))

  }
  return (
    <>

      <button type="submit" class=" btn btn-comprar col-12 col-lg-12" onClick={addToCart}>{props.texto}<Icon id="botao-carrinho-produto" name="shopping cart" /></button>

    </>
  );
}

export default BotaoConfirmar;
