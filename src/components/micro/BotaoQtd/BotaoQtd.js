import React, { useState }  from 'react'
import './BotaoQtd.css'

function BotaoQtd(props) {


    const [numero, setNumero] = useState(props.inicial)

    const incremento = () =>{
        setNumero(numero + props.passo)
       
        
    }
    const decremento = () =>{
        setNumero(numero - props.passo)
        
    }
    return(
        <>
        <div class="col btn-mais mt-5">
            <div class="btn-group inline">

                            <div class="contador contador-pag-produto">
                                <button onClick={decremento} class="contador-btn btn-menos" data-sinal="-1" >-</button>
                                <div class="mostrador">{numero}</div>
                                <button onClick={incremento} class="contador-btn btn-maiss" data-sinal="1">+</button>
                            </div>
              
            </div>
        </div>
        </>
    )
}

export default BotaoQtd