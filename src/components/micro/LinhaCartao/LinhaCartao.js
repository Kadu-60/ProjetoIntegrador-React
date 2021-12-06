import { Icon } from 'semantic-ui-react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'

function LinhaCartao(props) {
    let { id } = useParams()
    if (props.cartao.clienteCartaoKey == undefined) {
        return (
            <>
                <div className="d-flex justify-content-center align-items-center">]
                    <div>
                        desculpe mas você ainda nao tem um cartao Principal
                    </div>
                </div>
            </>
        )
    }

    let numero = props.cartao.clienteCartaoKey.cartao.numero
    let id_cartao = props.cartao.clienteCartaoKey.cartao.id_Cartao
    const excluir = () => {

        axios.delete(`http://localhost:8080/clienteCartao/delete/${id}/${id_cartao}`)
            .then(response => {
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
                    <a onClick={() => {excluir() }} className=" cursorPointer d-flex align-items-center">
                        <Icon name="trash" className="icon-menucentral pt-2" />
                        Excluir        </a>
                </div>

            </div>
            <hr className="mt-0" />
        </>
    );
}

export default LinhaCartao;