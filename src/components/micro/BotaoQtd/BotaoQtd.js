import React, { useState }  from 'react'
import './BotaoQtd.css'

function BotaoQtd(props) {


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
        <div class="col btn-mais mt-5">
            <div class="btn-group inline">

                            <div class="contador contador-pag-produto">
                                <div onClick={decremento} class="buttonMenos" data-sinal="-1" >-</div>
                                <div class="mostrador">{numero}</div>
                                <div onClick={incremento} class="buttonMais" data-sinal="1">+</div>
                            </div>
              
            </div>
        </div>
        </>
    )
}

export default BotaoQtd