import React, { useState, useEffect } from 'react'

function EnderecoEntrega(props) {
    const [endereco, setEndereco] = useState(null)
    useEffect(() => {
        props.enderecos.map(endereco => {
            if (endereco.enderecoEntrega) {
                setEndereco(endereco.clienteEnderecoKey.endereco)
            }
        })


    }, [props.enderecos])


    if (endereco) {

        return (

            <div className="col-6 ">
                <p className="endereco-dash">Endereço de Entrega</p>
                <hr />
                <ul className="">
                    <li className="">{endereco.destinatario}</li>
                    <li className="">{endereco.rua} , {endereco.numero} {endereco.complemento},</li>
                    <li className="">{endereco.cep} - {endereco.bairro}</li>
                    <li className="">{endereco.cidade} - {endereco.estado}</li>
                </ul>

            </div>

        );
    } else {
        return (
            <></>
        )
    }
}

export default EnderecoEntrega;