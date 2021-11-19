import './MenuCentral.css'
import React, { useState, useEffect } from 'react'
import { Container, Tab } from 'semantic-ui-react'
import BotaoDash from '../../micro/BotaoDash/BotaoDash'
import InputMask from "react-input-mask";
import { useParams } from 'react-router-dom'
import axios from 'axios'


const deslogar = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  window.location.href = 'http://localhost:3000/'
}


const Panes = (user) => {

  const alterarDados = (event) => {
    event.preventDefault()
    const token = localStorage.getItem('token')
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    axios.put('http://localhost:8080/cadastro-cliente/' + id, { "nome": nomeChanged, "telefone": telefoneChanged, "dataNascimento": dataNas }, config)
      .then(response => {
        console.log(response.data)
      })
  }
  const [telefoneChanged, setTelefoneChanged] = useState((user.telefone))
  const [nomeChanged, setNomeChanged] = useState((user.nome))
  const [dataNas, setDataNas] = useState((user.dataNascimento||'').slice(0,10))
  const {id} = useParams()
  useEffect(() => {
    setDataNas((user.dataNascimento||'').slice(0,10))
  },[])


  return ([
    {
      menuItem: 'Minha Conta', render: () => <Tab.Pane>
        <p className="title-dash">DADOS CADASTRAIS</p>
        <Container>


          <div class="" >
            <div class="row">
              <div class="col">
                <label className="label-minha-conta" for="nome">Nome:</label>
                <input type="text" class="form-control-dash" value={nomeChanged} onChange={(event) =>{setNomeChanged(event.target.value)}} id="nome" placeholder={user.nome}></input>
              </div>
              <div class="col">
                <label className="label-minha-conta" for="email">E-mail:</label>
                <input type="text" class="form-control-dash" disabled id="email" placeholder={user.email} />
              </div>

            </div>
            <div class="row">
              <div class="col">
                <label className="label-minha-conta" for="tel">Telefone:</label>
                <input type="text" class="form-control-dash" id="tel" value={telefoneChanged} placeholder={user.telefone} onChange={(event) =>{setTelefoneChanged(event.target.value)}}/>
              </div>
              <div class="col">
                <label className="label-minha-conta" for="CPF">CPF:</label>
                <input type="text" class="form-control-dash" disabled id="CPF" placeholder="" placeholder={user.cpf} />

              </div>
            </div>



            <div class="row">
              <div class="col-6 ">
                <label className="label-minha-conta" for="date">Data de Nascimento:</label>
                <input type="date" class="form-control-dash" id="date" onChange={(event) =>{setDataNas(event.target.value)}} value={((dataNas||'').slice(0,10))} />
              </div>

            </div>
          </div>






          <BotaoDash label="Salvar" onClick={(event) => { alterarDados(event) }} class="apoio" />




          <br /><br /><br /><br /><br /><br /><br />




        </Container>



      </Tab.Pane>
    },
    {
      menuItem: 'Alterar Senha', render: () => <Tab.Pane>


        <Container>

          <div className="formulario" >
            <p className="title-dash">Alterar senha</p>


            <form>
              <div className="form-row">
                <div className="form-group col-md-6 offset-md-3">
                  <label className="label-minha-conta" htmlFor="inputEmail" >
                    Digite sua nova Senha:
                  </label>
                  <input type="password" className="form-group form-control-dash" />
                </div>
                <div className="form-group col-md-6 offset-md-3">
                  <label className="label-minha-conta" htmlFor="inputSenha" >
                    Confirme sua Senha:
                  </label>
                  <input type="password" className="form-group form-control-dash" />
                </div>
              </div>
            </form>
            <div className="btn-form ">
              <br />

              <BotaoDash label="Salvar" onclick="null" class="apoio butn-senha" />

            </div>
            <br />
          </div>

        </Container>
        <br />


      </Tab.Pane>
    },
    {
      menuItem: 'Meus Pedidos', render: () => <Tab.Pane>



        <p className="title-dash">meus pedidos</p>
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
                    <p><b> 602892</b> </p>
                  </div>
                  <div className="col-lg-4 col-12 col-status">
                    <div className="order-status">Situação: <p><b> Confirmação de Pagamento</b> </p></div>{" "}
                  </div>
                  <div className="col-lg-2 col-12">
                    <div className="div-botao">
                      <button onClick={verMais} className="btn-botao" id="btnVerMais">
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
                        <strong>Data do Pedido:</strong> <span>09/11/2021 11:55:27</span>{" "}
                      </li>{" "}
                      <li className="payment">
                        {" "}
                        <strong>Forma de Pagamento:</strong>{" "}

                        <span>Cartão de Crédito</span>{" "}
                      </li>{" "}
                      <li className="total">
                        {" "}
                        <strong>Valor Total:</strong> <span>R$ 1.574,10</span>{" "}
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
        <span id="pontos">
        </span>



        <div id="mais">



          <p className="title-dash">pedido 602892</p>
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
              <tbody>
                {" "}
                <tr className="items">
                  {" "}
                  <td className="product-image" rowSpan={1}>
                    {" "}
                    <img src="https://emporiodacerveja.vtexassets.com/arquivos/ids/174818-800-auto?v=637056354423530000&width=800&height=auto&aspect=true" width="120px" />
                  </td>{" "}
                  <td className="product">
                    {" "}
                    <b
                      className="product-name"
                      title="Cerveja Madalena IPA 473ml "
                      alt="Cerveja Madalena IPA 473ml">
                      Cerveja Madalena IPA 473ml

                    </b>{" "}
                    <br /> <span className="skuoptions"> </span>{" "}
                  </td>{" "}
                  <td className="quantity">1</td>{" "}
                  <td className="price">
                    {" "}
                    R$ 17,99{" "}
                  </td>{" "}
                  <td className="item-subtotal">
                    {" "}
                    R$ 17,99{" "}
                  </td>{" "}
                </tr>{" "}
              </tbody>{" "}
              <tfoot>
                {" "}
                <tr className="subtotal">
                  {" "}
                  <td /> <td colSpan={2}>Subtotal</td>{" "}
                  <td className="td-subtotal">R$ 17,99</td>{" "}
                </tr>{" "}
                <tr className="delivery-amount">
                  {" "}
                  <td /> <td colSpan={2}>Custo de entrega</td>{" "}
                  <td className="td-delivery-amount"> R$15,00 </td>{" "}
                </tr>{" "}

                <tr className="total">
                  {" "}
                  <td /> <td colSpan={2}>Total</td>{" "}
                  <td className="td-delivery-amount"> R$32,99 </td>{" "}

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
                    <br /> <b>Florinda Martins</b>
                    <br /> Rua das flores, 555 <br /> Jardim perola , São Paulo - SP
                    <br /> CEP: 03698-090{" "}
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
                    <strong>R$ 32,99 á vista </strong>{" "}

                  </div>{" "}
                  <br />
                </div>{" "}
              </div>{" "}
              <div className="content status-cartao">
                {" "}
                <br />
                <b>Status:</b> Pendente
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
                    <span className="line line-linha" /> <strong>Pedido Realizado</strong>{" "}
                  </li>{" "}

                  <li className="status status-global-pedido started status-2">
                    {" "}
                    {/*<span class="count">2</span>*/} <span className="" />{" "}
                    {/* <div className="" /> <small>Em andamento</small>{" "} */}
                    <span className="line line-linha" /> <strong>Confirmaçao de Pagamento</strong>{" "}
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

      </Tab.Pane>
    },


    {
      menuItem: 'Sair', render: () => <Tab.Pane>
        <h2>Deseja Realmente Sair?</h2>
        <br /><br /><br />
        <div className="d-grid gap-2">
          <button class="btn btn-danger" onClick={() => { deslogar() }} type="button">Sair</button>

        </div>
      </Tab.Pane>
    },
  ])
}

function verMais() {
  var pontos = document.getElementById("pontos");
  var meusPedidos = document.getElementById("mais");
  var btnVerMais = document.getElementById("btnVerMais");

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






const TabExampleVerticalTabular = (props) => {
  
  return (
    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={Panes(props.user)} />
  )
}





export default TabExampleVerticalTabular



