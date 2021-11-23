import React from 'react'
import './Pagamento.css'
import ImgCartao from "./images/cartao-de-credito.png"
function Pagamento(props) {

    return (
        <>
            <p class="pagamentoCaixa d-flex justify-content-center">
                <img class="pagamentoCartao" src={ImgCartao} alt="" />
                (Crédito) **** {props.finalCartao}
                <br />
                {props.parcelas}
            </p>
        </>
    )
}

export default Pagamento