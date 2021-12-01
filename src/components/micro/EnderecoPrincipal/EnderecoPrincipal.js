function EnderecoPrincipal(props) {
    return (
        
            <div className="col-6 ">
                <h2>Endereço Principal</h2>
                <hr />
                <ul className="">
                    <li className="">{props.endereco.nomeCliente}</li>
                    <li className="">{props.endereco.rua} , {props.endereco.numero} {props.endereco.complemento},</li>
                    <li className="">{props.endereco.cep} - {props.endereco.bairro}</li>
                    <li className="">{props.endereco.cidade} - {props.endereco.estado}</li>
                </ul>

            </div>
        
    );
}

export default EnderecoPrincipal;