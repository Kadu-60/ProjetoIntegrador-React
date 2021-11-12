import React from 'react'
import './TituloDash.css'

function TituloDash(props){

    return(
     <>
     <br/>
     <p className="titulo-dash"> Olá, {props.nome} aqui é a sua conta :) </p>
     <hr></hr>
     <br/>

     </>
    )
}

export default TituloDash