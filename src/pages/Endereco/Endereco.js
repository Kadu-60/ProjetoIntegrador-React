import React from "react";
import '../Endereco/Endereco.css'

import FormDefault from '../../components/macro/Forms/FormDefault/FormDefault'
import Input from '../../components/micro/Forms/Input/Input'
import Button from '../../components/micro/Button/Button'
import Input2 from './Index'


function Endereco (props) {



    return (
        <>
        <br/>   <br/>
            <FormDefault className="title-endereco" title="">
            <br/>
            <p className="title-dash">Cadastro de endereço</p>
            <Input label="Rua " type="text"/>
            <Input label="Número" type="text"/>
            <Input label="Bairro" type="text"/>
            <Input label="Cidade" type="text"/>
            <Input label="Estado" type="tel"/>
            <Input2 placeholder="03050-211"  name="cep" mask="cep"  />
            <Input2  name="price" mask="currency" prefix="R$"  />
            <button onClick={ () => console.log()} > Salvar</button>
            <Button label="Voltar" navigation route="login" class="apoio"/>
            <Button label="Confirmar" onclick="null" class="conversao"/>
        </FormDefault >
        <br/>   <br/>
        </>
    )
}

export default Endereco