import React from 'react'
import './TotalPedido.css'
function TotalPedido(props) {

    return (
        <>
            <p class="totalCaixa">
                Subtotal do(s) item(ns):R$ {props.subtotal}
                <br />
                Frete e manuseio:R$ {props.frete}
                <br />
                Total:R$ {props.total}
            </p>
        </>
    )
}

export default TotalPedido