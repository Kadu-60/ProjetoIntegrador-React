import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { Container, Tab } from 'semantic-ui-react'
import ItemMeuPedido from '../ItemMeuPedido/ItemMeuPedido'



function MeuPedido(props) {
    const pedido = props.data;
    const [itens, setItens] = useState([])
    //NumeroPedido"id do pedido"
    //DataPedido
    //StatusPedido
    //ListaItemPedido
    //EndereçoPedido
    //DadosPagamento
    //funcaoVerMais

    function verMais() {
        var pontos = document.getElementById("pontos"+pedido.id);
        var meusPedidos = document.getElementById("mais"+pedido.id);
        var btnVerMais = document.getElementById("btnVerMais"+pedido.id);

        if (pontos.style.display === "none") {
            pontos.style.display = "inline";
            meusPedidos.style.display = "none";
            btnVerMais.innerHTML = "Ver Detalhes";
        } else {
            pontos.style.display = "none";
            meusPedidos.style.display = "inline";
            btnVerMais.innerHTML = "Ver Menos";

        }
    }

    useEffect(() => {
        const token = localStorage.getItem('token')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios.get("http://localhost:8080/item_pedido/findBypedido/"+pedido.id, config)
        .then((response)=>{
            setItens(response.data)
        })
        verMais()
        verMais()
    },[])

    return (
        <>
            <Container>

                <div className=" wd-widget">
                    <div className="wd-header">
                        <span className="wd-icon" />


                    </div>
                    <div className="wd-content">
                        <div className="wd-checkout-ordernumber  wd-widget ">
                            <div className="row align-items-center pedido-header">
                                <div className="col-lg-6 col-12 col-order-number">
                                    Número do Pedido
                                    <p><b>{pedido.id || 0}</b> </p>
                                </div>
                                <div className="col-lg-4 col-12 col-status">
                                    <div className="order-status">Situação: <p><b>{pedido.status.estado_pedido}</b> </p></div>{" "}
                                </div>
                                <div className="col-lg-2 col-12">
                                    <div className="div-botao">
                                        <button onClick={()=>{verMais()}} className="btn-botao btn" id={"btnVerMais"+pedido.id}>
                                            Ver Detalhes
                                        </button>

                                    </div>

                                </div>{" "}
                            </div>{" "}
                            <div className="row align-items-center">
                                <div className="col"></div>
                            </div>

                        </div>{" "}
                        <div className="summary-data">
                            {" "}

                            <div className="row">
                                {" "}
                                <div className="col-12 col-lg-6">
                                    {" "}
                                    <ul className="labels">
                                        {" "}
                                        <li className="date">
                                            {" "}
                                            <strong>Data do Pedido:</strong> <span>{pedido.dataDeCriacao.slice(0,10)}</span>{" "}
                                        </li>{" "}
                                        <li className="payment">
                                            {" "}
                                            <strong>Forma de Pagamento:</strong>{" "}

                                            <span>Cartão de Crédito</span>{" "}
                                        </li>{" "}
                                        <li className="total">
                                            {" "}
                                            <strong>Valor Total:</strong> <span>R$ {pedido.total.toFixed(2)}</span>{" "}
                                        </li>{" "}
                                    </ul>{" "}
                                </div>{" "}
                                <div className="col-12 col-lg-6">
                                    {" "}
                                    <div className="payment-data">
                                        {" "}


                                    </div>{" "}
                                </div>{" "}
                            </div>{" "}
                            <div className="row">
                                {" "}
                                <div className="col"> </div>{" "}
                            </div>{" "}
                        </div>{" "}
                    </div>{" "}
                    <div className="wd-footer">
                        {" "}
                        <span className="wd-icon" /> {/* FOOTER */}{" "}
                    </div>{" "}
                </div>


            </Container>
            <br />
            <hr />






            <br />
            <span id={"pontos"+pedido.id}>
            </span>



            <div id={"mais"+pedido.id}>



                <p className="title-dash">PEDIDO {pedido.id}</p>
                <div className="grid ">
                    {" "}
                    <br />{" "}
                    <table className="table-pedido" style={{ marginTop: "-127px" }}>
                        {" "}
                        <thead className="thead-pedido">
                            {" "}
                            <tr>
                                {" "}
                                <th className="th-global product-image">
                                    <span />
                                </th>{" "}
                                <th className="th-global product">
                                    <span >Produtos</span>
                                </th>{" "}
                                <th className="th-global ">
                                    <span>Qtd</span>
                                </th>{" "}
                                <th className="th-global price">
                                    <span>Preço unitário</span>
                                </th>{" "}
                                <th className="th-global price">
                                    <span>Subtotal</span>
                                </th>{" "}
                            </tr>{" "}
                        </thead>{" "}


                        {/* item pedido */}
                        {
                        itens==[]?()=>(
                            <div>
                                <p>você ainda não tem pedidos :(</p>
                            </div>
                        )
                        :
                        itens.map((item)=>(
                                <ItemMeuPedido data={item}/>
                            )
                        )
                        }
                        
                        
                        
                        
                        {/* item pedido */}





                        <tfoot>
                            {" "}
                            <tr className="subtotal">
                                {" "}
                                <td /> <td colSpan={2}>Subtotal</td>{" "}
                                <td className="td-subtotal">R$ {(pedido.total-15).toFixed(2)}</td>{" "}
                            </tr>{" "}
                            <tr className="delivery-amount">
                                {" "}
                                <td /> <td colSpan={2}>Custo de entrega</td>{" "}
                                <td className="td-delivery-amount"> R$15.00 </td>{" "}
                            </tr>{" "}

                            <tr className="total">
                                {" "}
                                <td /> <td colSpan={2}>Total</td>{" "}
                                <td className="td-delivery-amount"> R$ {(pedido.total).toFixed(2)} </td>{" "}

                            </tr>{" "}
                        </tfoot>{" "}
                    </table>{" "}
                    <br />
                </div>
                <br />
                
                <p className="title-dash">dados da entrega</p>
                <div className="grid ">
                    <div className="wd-content-global">
                        {" "}
                        <div className="row">
                            {" "}
                            <div className="col-end">
                                {" "}
                                <div className="content">
                                    <br />
                                    <b>Casa</b>
                                    <br /> <b>{pedido.cliente.nome}</b>
                                    <br /> Rua: {pedido.endereco.rua} , {pedido.endereco.numero} <br /> {pedido.endereco.bairro} , {pedido.endereco.cidade} - {pedido.endereco.estado}
                                    <br /> CEP: {pedido.endereco.cep}{" "}
                                    <br />    <br />
                                </div>{" "}
                            </div>{" "}
                            <div className="col">
                                {" "}
                                <div className="content">
                                    {" "}
                                    <br />
                                    <b>Prazo de Entrega</b> 5 dia(s) útil(eis)
                                    <br /> <b>Forma de Entrega:</b> Correios{" "}
                                </div>{" "}
                            </div>{" "}
                        </div>{" "}
                    </div>
                </div>
                <br />


                <p className="title-dash">dados do pagamento</p>
                <div className="grid ">
                    <div className="wd-content-global wd-pagamento">
                        {" "}
                        <div className="content payment-method">
                            <div className="payment-info">
                                {" "}
                                <br />
                                <b>Cartão de Crédito</b>{" "}
                                <div className="payment-value">
                                    {" "}
                                    <strong>R$ {pedido.total.toFixed(2)} á vista </strong>{" "}

                                </div>{" "}
                                <br />
                            </div>{" "}
                        </div>{" "}
                        <div className="content status-cartao">
                            {" "}
                            <br />
                            <b>Status:</b> Pagamento Aprovado
                            <br /><br />
                            {" "}
                        </div>{" "}
                    </div>
                </div>
                <br />


                <p className="title-dash">Acompanhe seu pedido</p>
                <div className="grid ">
                    <div className="wd-content-global">
                        {" "}
                        {/* CONTENT */}
                        <div className="value">
                            {" "}
                            <ul className="linha-do-pedido">
                                {" "}
                                <li className="status status-global-pedido completed status-1">
                                    {" "}
                                    <br />
                                    {/*<span class="count">1</span>*/} <span className="icon-pedidos" />{" "}
                                    {/* <div className="" /> <small>09/11/2021 11:55:27</small>{" "} */}
                                    <span className="line line-linha filled" /> <strong>Pedido Realizado</strong>{" "}
                                </li>{" "}

                                <li className="status status-global-pedido started status-2">
                                    {" "}
                                    {/*<span class="count">2</span>*/} <span className="" />{" "}
                                    {/* <div className="" /> <small>Em andamento</small>{" "} */}
                                    <span className="line line-linha filled" /> <strong>Confirmaçao de Pagamento</strong>{" "}
                                </li>{" "}
                                <li className="status status-global-pedido status-3">
                                    {" "}
                                    {/*<span class="count">3</span>*/} <span className="" />{" "}
                                    <div className="" /> <small /> <span className="line line-linha" />{" "}
                                    <strong>Preparando para Envio</strong>{" "}
                                </li>{" "}
                                <li className="status status-global-pedido status-4">
                                    {" "}
                                    {/*<span class="count">4</span>*/} <span className="" />{" "}
                                    <div className="" /> <small /> <span className="line" />{" "}
                                    <strong>Pedido Enviado</strong>{" "}
                                    <br /><br />
                                </li>{" "}
                            </ul>{" "}
                        </div>{" "}
                    </div>
                </div>
                <br />
            </div>
        </>
    );
}

export default MeuPedido;