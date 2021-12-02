import { Icon } from 'semantic-ui-react'
import ItemListaEndereco from '../ItemListaEndereco/ItemListaEndereco'

function ListaEnderecos(props) {
    return (
        <>
            {props.enderecos.map((endereco) =>(
                <ItemListaEndereco endereco={endereco}/>
            ))}
            
            
        </>
    );
}

export default ListaEnderecos;