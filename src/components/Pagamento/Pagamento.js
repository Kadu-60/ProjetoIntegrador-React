import React from 'react'
import './Pagamento.css'
import ImgCartao from "./images/cartao-de-credito.png"
function Pagamento(props) {

    return (
        <>
            <p class="pagamentoCaixa">
                <img class="pagamentoCartao" src={ImgCartao} alt="" />
                (Crédito) **** {props.finalCartao}
                <br />
                Em {props.parcelas}x de R$ {props.valorParcela}
            </p>
        </>
    )
}

export default Pagamento