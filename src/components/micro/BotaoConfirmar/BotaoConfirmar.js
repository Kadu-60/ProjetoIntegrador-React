import React from 'react'
import './BotaoConfirmar.css'

function BotaoConfirmar(props) {

  return (
    <>
        
        <button type="submit" class="comprar btn btn-comprar col-6 col-lg-12">{props.texto}</button>
            
    </>
  );
}

export default BotaoConfirmar;