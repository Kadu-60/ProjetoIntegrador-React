import React from 'react'
import './Endereco.css'
function Endereco(props) {

    return (
        <>
            <p class="enderecoCaixa">
                {props.rua}
                <br />
                {props.bairro}
                <br />
                {props.cidade}, {props.estado}
                <br />
                CEP {props.cep}
            </p>
        </>
    )
}

export default Endereco