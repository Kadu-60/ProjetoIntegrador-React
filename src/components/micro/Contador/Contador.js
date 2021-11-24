import React, { useState } from 'react'

function Contador(props){

    const [numero, setNumero] = useState(props.inicial)

    const incremento = () =>{
        setNumero(numero + props.passo)
       
        console.log(numero)
    }
    const decremento = () =>{
        setNumero(numero - props.passo)
        console.log(numero)
    }
    return(
     <>
        <h2>{numero}</h2>
        <button onClick={incremento}>+</button>
        <button onClick={decremento}>-</button>
     </>
    )
}

export default Contador