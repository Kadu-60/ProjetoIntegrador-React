import React from 'react'
import './Endereco.css'
function Endereco(props) {

    return (
        <>
            <p class="enderecoCaixa d-flex justify-content-center">
                {props.rua},{props.numero}
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