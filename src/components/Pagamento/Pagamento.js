import React, { useState} from 'react'
import './Pagamento.css'
import ImgCartao from "./images/cartao-de-credito.png"
function Pagamento(props) {

    const idPag = props.metodoPagId
    const final = props.finalCartao
    const parcelas = props.parcelas
    console.log(props)
    console.log(idPag)

    const metodoDePagamento = (props) =>{
        if (idPag == '1') {
            return (
                <>
                    <p class="pagamentoCaixa d-flex justify-content-center">
                        <img class="pagamentoCartao" src={ImgCartao} alt="" />
                        (Crédito) **** {final}
                        <br />
                        {parcelas}
                    </p>
                </>
            )
        } else if (idPag == '2') {
            return (
                <>
                    <p class="pagamentoCaixaBoleto d-flex justify-content-center">
                        À VISTA NO BOLETO
                    </p>
                </>
            )
        }else{
            return (
                <>
                    <p class="pagamentoCaixaBoleto d-flex justify-content-center">
                    À VISTA NO PIX
                    </p>
                </>
            )
        }
        
    }

    return(
        metodoDePagamento()
    )

    
}

export default Pagamento