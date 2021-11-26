import React from 'react'
import { Icon } from 'semantic-ui-react';
import './BotaoConfirmar.css'
import axios from 'axios'

function BotaoConfirmar(props) {
  const addToCart = () => {
    let cart = ((localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : []))
    let count = 0
    cart.map((item) => {
      if (item == props.id) {
        count++;
      }
    })
    axios.get('http://localhost:8080/Estoque/' + props.id)
      .then((response) => {
        if (response.data.quantidade >= count + 1) {
          let cartList = localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : []
          cartList.push(props.id)
          let cartString = JSON.stringify(cartList)
          localStorage.setItem("cart", cartString)
          localStorage.setItem('qtyCart', JSON.stringify(cartList.length))
        } else {
          alert("desculpe, a quantidade selecionada está acima da quantidade em estoque")
        }

      })
  }
  const addToCart2 = () => {

    let cart = ((localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : []))
    let count = 0
    cart.map((item) => {
      if (item == props.id) {
        count++;
      }
    })
    axios.get('http://localhost:8080/Estoque/' + props.id)
      .then((response) => {
        if (response.data.quantidade >= count + props.qtd) {
          let cartList = localStorage.getItem("cart")
            ? JSON.parse(localStorage.getItem("cart"))
            : []
          for (let i = 0; i < props.qtd; i++) {
            cartList.push(props.id)
          }

          let cartString = JSON.stringify(cartList)
          localStorage.setItem("cart", cartString)
          localStorage.setItem('qtyCart', JSON.stringify(cartList.length))
        } else {
          alert("desculpe, a quantidade selecionada está acima da quantidade em estoque")
        }

      })


  }
  return (
    <>

      <button type="submit" class=" btn btn-comprar col-12 col-lg-12" onClick={props.qtd ? addToCart2 : addToCart}>{props.texto}<Icon id="botao-carrinho-produto" name="shopping cart" /></button>

    </>
  );
}

export default BotaoConfirmar;
