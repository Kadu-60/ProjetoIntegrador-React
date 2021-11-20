import React from 'react'
import { Icon } from 'semantic-ui-react';
import './BotaoConfirmar.css'

function BotaoConfirmar(props) {

  return (
    <>
        
        <button type="submit" class="comprar btn btn-comprar col-6 col-lg-12">{props.texto}<Icon id="botao-carrinho-produto" name="shopping cart" /></button>
            
    </>
  );
}

export default BotaoConfirmar;
