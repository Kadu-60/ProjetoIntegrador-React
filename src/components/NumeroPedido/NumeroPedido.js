import React from "react";
import './NumeroPedido.css'


function NumeroPedido(props) {
  return (
    <>
        
        <p class="numeroPedido titulo d-flex justify-content-center">{props.numeroPedido}</p>
    </>
  );
}

export default NumeroPedido;
