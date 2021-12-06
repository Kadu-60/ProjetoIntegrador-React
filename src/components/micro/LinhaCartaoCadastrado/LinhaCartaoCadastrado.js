import { Icon } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import axios from 'axios'

function LinhaCartaoCadastrado(props) {
    let {id} = useParams()
    let numero = props.cartao.clienteCartaoKey.cartao.numero
    let id_cartao = props.cartao.clienteCartaoKey.cartao.id_Cartao
    
    const tornarPrincipal = ()=>{
        axios.put(`http://localhost:8080/clienteCartao/tornarPrincipal/${id}/${id_cartao}`)
            .then(response=>{
                props.att(response)
            })
    }

    const excluir = ()=>{
        axios.delete(`http://localhost:8080/clienteCartao/delete/${id}/${id_cartao}`)
            .then(response=>{
                props.att(response)
            })
    }
    return (
        <>
            {/* <hr className="mb-0" /> */}
            <div className="row d-flex justify-content-center align-items-center">

                <div className="col-1 d-flex justify-content-center align-items-center">
                    <Icon name="credit card outline" className="icon-menucentral pt-2" />
                </div>
                <div className="col-3 d-flex justify-content-center align-items-center text-center">
                    {props.cartao.clienteCartaoKey.cartao.nome}
                </div>
                <div className="col-3 d-flex justify-content-center align-items-center text-center">
                    **** **** **** {numero.slice(numero.length - 4, numero.length)}
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center text-center">
                    {props.cartao.clienteCartaoKey.cartao.validade.slice(0, 7).replace('-', '/')}
                </div>
                <div className="col-3 d-flex justify-content-center align-items-center">
                    <a onClick={() => {tornarPrincipal() }} className=" cursorPointer d-flex align-items-center me-1">
                        <input type="radio" className="me-1" checked={props.cartao.principal}/> Principal
                    </a>
                    <span className="separadoritemListaEndereco mb-2">|</span>
                    <a onClick={() => {excluir() }} className=" cursorPointer d-flex align-items-center">
                        <Icon name="trash" className="icon-menucentral pt-2" />
                        Excluir        </a>
                </div>

            </div>
            <hr className="mt-0" />
        </>
    );
}

export default LinhaCartaoCadastrado;