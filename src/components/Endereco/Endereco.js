import React from 'react'
import './Endereco.css'
function Endereco(props) {
    const mascaraCEP = value => {
        return value.replace(/\D/g, "").replace(/^(\d{5})(\d{3})+?$/, "$1-$2");
      };
      const cep = "" + props.cep
      

    return (
        <>
            <p class="enderecoCaixa d-flex justify-content-center">
                {props.rua},{props.numero}
                <br />
                {props.bairro}
                <br />
                {props.cidade}, {props.estado}
                <br />
                CEP {mascaraCEP(cep)}
            </p>
        </>
    )
}

export default Endereco