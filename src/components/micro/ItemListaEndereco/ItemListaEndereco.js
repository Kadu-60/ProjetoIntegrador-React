import { Icon } from 'semantic-ui-react'
function ItemListaEndereco(props) {
    return (
        <>
            <div className="row align-items-center">
                <div className="col-3 ">
                    {props.endereco.nomeCliente}
                </div>
                <div className="col-6 ">
                    <p>{props.endereco.rua}, {props.endereco.numero} {props.endereco.complemento}, {props.endereco.bairro} - {props.endereco.cidade} - {props.endereco.estado}</p>
                </div>
                <div className="col-3 ">
                    <a  >
                        <Icon name="pencil alternate" />
                        Editar        </a>
                    <a >
                        <Icon name="trash" />
                        Excluir        </a>
                </div>
            </div>
            <hr />
        </>
    );
}

export default ItemListaEndereco;