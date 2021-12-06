import LinhaCartaoCadastrado from '../LinhaCartaoCadastrado/LinhaCartaoCadastrado'

function ListaCartoes(props) {
    
    return (
        <>
            <div className="row d-flex justify-content-center align-items-center">

                <div className="col-1 d-flex justify-content-center align-items-center">
                    <b>Cartão</b>
                </div>
                <div className="col-3 d-flex justify-content-center align-items-center text-center">
                    <b>Nome</b>
                </div>
                <div className="col-3 d-flex justify-content-center align-items-center text-center">
                    <b>Número  </b>
                </div>
                <div className="col-2 d-flex justify-content-center align-items-center text-center">
                    <b>Vencimento</b>
                </div>
                <div className="col-3 d-flex justify-content-center align-items-center">
                    <b>Ações</b>
                </div>

            </div>
            <hr className="mb-0 mt-1" />
            {
                props.cartoes.map((item) =>(
                    
                    <LinhaCartaoCadastrado cartao={item} att={props.att}/>
                ))
            }
        </>
    );
}

export default ListaCartoes;