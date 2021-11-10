import React from "react";
import './NumeroPedido.css'


function NumeroPedido(props) {
  return (
    <>
        
        <p class="numeroPedido titulo">{props.numeroPedido}</p>
    </>
  );
}

export default NumeroPedido;
