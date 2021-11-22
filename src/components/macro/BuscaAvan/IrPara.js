import React, { useState, useEffect} from "react"
import { useHistory } from "react-router-dom"

function IrPara(props) {
    const history = useHistory();
    
    function irParaPag(event){
        event.preventDefault()
        history.push(props.url)
        console.log(props.url)
    }


    return (
        <button className="mt-5" onClick={irParaPag}>
              Enviar
              </button>
    )
}

export default IrPara

