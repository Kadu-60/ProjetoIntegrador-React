import React from 'react'
import './BotaoVoltar.css'


function BotaoVoltar(props) {

  return (
    
       <button type={props.type} class="btn btn-voltarHome col-12 col-md-3">{props.texto}</button>
  );
}

export default BotaoVoltar;

