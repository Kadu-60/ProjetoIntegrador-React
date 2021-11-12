import React from "react";
import '../Endereco/Endereco.css'

import FormDefault from '../../components/macro/Forms/FormDefault/FormDefault'
import Input from '../../components/micro/Forms/Input/Input'
import Button from '../../components/micro/Button/Button'

function Endereco (props) {

    return (
        <>
            <FormDefault className="title-endereco" title="Endereço">
            <Input label="Rua" type="text"/>
            <Input label="Número" type="text"/>
            <Input label="Bairro" type="text"/>
            <Input label="Cidade" type="text"/>
            <Input label="Estado" type="tel"/>
            <Button label="Voltar" navigation route="login" class="apoio"/>
            <Button label="Confirmar" onclick="null" class="btn-comprar"/>
        </FormDefault>
        </>
    )
}

export default Endereco