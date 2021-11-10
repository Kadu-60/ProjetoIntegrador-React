import React from 'react'
import './BotaoBuscaAvan.css'


function BotaoBuscaAvan(props) {

  return (
    <>
        <button type={props.type} class="btn btn-buscaAvan col-12 col-md-4">{props.texto}</button>
    </>
  );
}

export default BotaoBuscaAvan;