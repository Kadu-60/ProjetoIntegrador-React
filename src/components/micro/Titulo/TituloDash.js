import React from 'react'
import './TituloDash.css'

function TituloDash(props){

    return(
     <>
     <br/>
     <p className="titulo-dash"> Olá, {props.nome} seja bem vindo!  </p>
     <hr></hr>
     <br/>

     </>
    )
}

export default TituloDash