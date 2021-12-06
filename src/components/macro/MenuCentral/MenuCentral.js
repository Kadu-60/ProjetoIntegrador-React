import './MenuCentral.css'
import MeuPedido from '../../micro/MeuPedido/MeuPedido'
import EnderecoPrincipal from '../../micro/EnderecoPrincipal/EnderecoPrincipal'
import EnderecoEntrega from '../../micro/EnderecoEntrega/EnderecoEntrega'
import ListaEnderecos from '../../micro/ListaEnderecos/ListaEnderecos'
import React, { useState, useEffect } from 'react'
import { Container, Tab, Icon } from 'semantic-ui-react'
import BotaoDash from '../../micro/BotaoDash/BotaoDash'
import InputMask from "react-input-mask";
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Formik, Field } from 'formik';
import LinhaCartao from '../../micro/LinhaCartao/LinhaCartao'
import ListaCartoes from '../../micro/ListaCartoes/ListaCartoes'
import Cards from 'react-credit-cards'


const deslogar = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  window.location.href = 'http://localhost:3000/home'
}






const Panes = ({ user, dataNascimento }) => {
  const [number, setNumber] = useState('')
  const [name, setName] = useState('')
  const [expiry, setExpiry] = useState('')
  const [cvc, setCvc] = useState('')
  const [focus, setFocus] = useState('')
  const [testeData, setTesteData] = useState([])
  const [cep, setCep] = useState('')
  const [rua, setRua] = useState('')
  const [numeroEndereco, setNumeroEndereco] = useState('')
  const [complemento, setComplemento] = useState('')
  const [bairro, setBairro] = useState('')
  const [cidade, setCidade] = useState('')
  const [estado, setEstado] = useState('')
  const [att, setAtt] = useState(0)
  const [telefoneChanged, setTelefoneChanged] = useState((user.telefone))
  const [nomeChanged, setNomeChanged] = useState((user.nome))
  const [dataNas, setDataNas] = useState('')
  const [senha, setSenha] = useState('')
  const [senhaSec, setSenhaSec] = useState('')
  const [validSenha, setValidSenha] = useState('')
  const [destinatario, setDestinatario] = useState(null)
  const { id } = useParams()
  const [pedidos, setPedidos] = useState([])
  const [dateInvalida, setDateInvalida] = useState('d-none')
  const [dateLess, setDateLess] = useState('d-none')
  const teste1 = (("" + dataNascimento).slice(0, 10).replaceAll("-", "/"))
  const data1 = new Date(teste1).toLocaleDateString()
  const [muda, setMuda] = useState('')
  const [endPrincipal, setEndPrincipal] = useState(null)
  const [endEntrega, setEndEntrega] = useState(null)
  const [enderecos, setEnderecos] = useState([])
  const [cartoes, setCartoes] = useState([])
  const [cartao, setCartao] = useState({})
  const [checkboxCartao, setCheckboxCartao] = useState(false)


  const alterarDados = (event) => {
    event.preventDefault()
    const token = localStorage.getItem('token')
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    axios.put('http://localhost:8080/cadastro-cliente/' + id, { "nome": nomeChanged, "telefone": telefoneChanged, "dataNascimento": dataNas }, config)
      .then(response => {
        Swal.fire({
          title: 'Sucesso!',
          text: 'Dados Cadastrais alterados com sucesso!',
          icon: 'success',
          confirmButtonText: 'fechar'
        })
        window.location.reload()
      })


  }

  function buscaCep() {
    const value = cep;

    const cepbusc = value?.replace(/[^0-9]/g, '');

    if (cepbusc?.length !== 8) {
      return;
    }

    fetch(`https://viacep.com.br/ws/${cepbusc}/json/`)
      .then((res) => res.json())
      .then((data) => {
        setRua(data.logradouro);
        setBairro(data.bairro);
        setCidade(data.localidade);
        setEstado(data.uf);
      });

  }

  const adicionarEndereco = () => {
    let endereco =
    {
      "clienteEnderecoKey":
      {
        "cliente":
        {
          "id_Cliente": user.id_Cliente
        },
        "endereco":
        {
          "estado": estado,
          "cidade": cidade,
          "bairro": bairro,
          "rua": rua,
          "cep": cep,
          "numero": numeroEndereco,
          "complemento": complemento,
          "ponto_referencia": "",
          "destinatario": destinatario
        }
      },
      "enderecoPrincipal": false,
      "enderecoEntrega": false
    }
    axios.post("http://localhost:8080/clienteEndereco/create", endereco)
      .then((response) => {
        console.log(response.data)
        Swal.fire({
          title: 'Sucesso!',
          text: 'Endereco adicionado com sucesso!',
          icon: 'success',
          confirmButtonText: 'fechar'
        })
        setTimeout(() => { window.location.reload() }, 800)

      })

  }

  const AdicionarCartao = () => {
    let novoCartao = {
      "clienteCartaoKey": {
        "cliente": {
          "id_Cliente": user.id_Cliente
        },
        "cartao": {
          "nome": name,
          "numero": number,
          "validade": new Date(expiry.replace('/', "/01/"))
        }
      },
      "principal": checkboxCartao
    }
    axios.post("http://localhost:8080/clienteCartao/create",novoCartao)
      .then(response => {
        
        localStorage.setItem("defaultIndex", JSON.stringify(4))
        window.location.href = "http://localhost:3000/dashboard/"+user.id_Cliente
      })
  }


  const alterarSenha = (event) => {
    event.preventDefault()
    const token = localStorage.getItem('token')
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    if (senha == senhaSec) {
      axios.put("http://localhost:8080/cadastroCliente/alterarSenha/" + id, { "password": senha }, config)
        .then(response => {
          Swal.fire({
            title: 'Sucesso!',
            text: 'Senha alterada com sucesso!',
            icon: 'success',
            confirmButtonText: 'fechar'
          })
          window.location.reload()
        })
        .catch((error) => {
          Swal.fire({
            title: 'Erro!',
            text: 'Ocorreu um erro na sua senha!',
            icon: 'error',
            confirmButtonText: 'fechar'
          })
        })
    } else {
      setValidSenha('d-block')
    }
  }





  useEffect(() => {


    localStorage.removeItem('defaultIndex')
    const token = localStorage.getItem('token')
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    };
    axios.get("http://localhost:8080/Pedido/cliente/" + id, config)
      .then((response) => {
        setPedidos(response.data);
      })
    axios.get("http://localhost:8080/clienteEndereco/cliente/" + id)
      .then((response) => {
        setEnderecos(response.data);

      })
    axios.get("http://localhost:8080/clienteCartao/cliente/" + id)
      .then((response) => {
        setCartoes(response.data);
        response.data.map((item) => {

          if (item.principal) {
            
            setCartao(item)
          }
        })
      })

  }, [att])

  





  return ([
    {
      menuItem: 'Minha Conta', render: () => <Tab.Pane>
        <p className="title-dash">DADOS CADASTRAIS</p>
        <Container>


          <div class="" >
            <div class="row">
              <div class="col">
                <label className="label-minha-conta" for="nome">Nome:</label>
                <input type="text" class="form-control-dash" value={nomeChanged} onChange={(event) => { setNomeChanged(event.target.value) }} id="nome" placeholder={user.nome}></input>
              </div>
              <div class="col">
                <label className="label-minha-conta" for="email">E-mail:</label>
                <input type="text" class="form-control-dash" disabled id="email" placeholder={user.email} />
              </div>

            </div>
            <div class="row">
              <div class="col">
                <label className="label-minha-conta" for="tel">Telefone:</label>
                <input type="text" class="form-control-dash" id="tel" value={telefoneChanged} placeholder={user.telefone} onChange={(event) => { setTelefoneChanged(event.target.value) }} />
              </div>
              <div class="col">
                <label className="label-minha-conta" for="CPF">CPF:</label>
                <input type="text" class="form-control-dash" disabled id="CPF" placeholder="" placeholder={user.cpf} />

              </div>
            </div>



            <div class="row">
              <div class="col-6 ">
                <label className="label-minha-conta" for="date">Data de Nascimento:</label>
                <input onKeyDown={(e) => e.preventDefault()} id='data123' type='text' max="2003-11-30" class="form-control-dash" onFocus={(e) => e.target.type = 'date'} onblur={(e) => e.target.type = 'text'} value={dataNas} placeholder={data1} onChange={(event) => { setDataNas(event.target.value) }} />
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
                  <input type="password" className="form-group form-control-dash" value={senhaSec} onChange={event => { setSenhaSec(event.target.value); setValidSenha('') }} />
                  <div id="validationServerUsernameFeedback" className={"invalid-feedback " + validSenha} >
                    Senha diferente
                  </div>
                </div>
                <div className="form-group col-md-6 offset-md-3">
                  <label className="label-minha-conta" htmlFor="inputSenha" >
                    Confirme sua Senha:
                  </label>
                  <input type="password" className="form-group form-control-dash" value={senha} onChange={event => { setSenha(event.target.value); setValidSenha('') }} />
                  <div id="validationServerUsernameFeedback" className={"invalid-feedback " + validSenha} >
                    Senha diferente
                  </div>
                </div>
              </div>
            </form>
            <div className="btn-form ">
              <br />

              <BotaoDash label="Salvar" onClick={(event) => { alterarSenha(event) }} class="apoio butn-senha" />

            </div>
            <br />
          </div>

        </Container>
        <br />


      </Tab.Pane>
    },
    {
      menuItem: 'Meus Pedidos', render: () => <Tab.Pane>



        <p className="title-dash">Meus Pedidos</p>
        {
          pedidos == false ?
            <div className="container bg-light " >
              <div class="alert alert-warning alert-dismissible container  d-flex justify-content-center align-content-center" role="alert">
                <strong className="me-1">Você ainda não tem pedidos!</strong>

              </div>
            </div>
            :
            pedidos.map((pedido) => (
              <MeuPedido data={pedido} key={pedido.id} />
            ))

        }


      </Tab.Pane>
    },
    {
      menuItem: 'Meus Endereços', render: () =>
        <Tab.Pane>
          <div className="row">

            <EnderecoPrincipal enderecos={enderecos} />

            <EnderecoEntrega enderecos={enderecos} />

            <div className="col-12">
              <br />
              <div className="row">
                <div className="col-9 d-flex flex-column justify-content-end">
                  <h2 className="d-flex justify-content-between align-content-center" >Endereços Cadastrados</h2>
                </div>
                <div className="col-3  d-flex justify-content-end">
                  <button type="button " class="btn btn-adcend pt-1 text-center" data-bs-toggle="modal" data-bs-target="#exampleModal" >
                    <Icon name="plus circle  " className="icon-menucentral icon-plus-white" />Adicionar
                  </button>
                </div>


              </div>

              <hr />
              <ListaEnderecos enderecos={enderecos} att={setAtt} />
            </div>
          </div>
          <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Adicionar Endereco</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <Formik>
                    <div className="" >

                      <ul className="lista-checkout-total">

                        <li className="">



                          <ul className="lista-carrinho-total">

                            <div className="row">
                              <div className="col-3">
                                <label>* CEP </label>
                                <Field type="text" id="cep" name="cep" onChange={(ev) => setCep(ev.target.value)} value={cep} className="form-control input-cep" data-js="cep" placeholder="00000-000" required />
                              </div>
                              <div class="col-3 d-flex flex-column justify-content-end">
                                <button type="button" onClick={() => buscaCep()} class="btn btn-secondary" >Buscar</button>
                              </div>

                            </div>

                            <div className="row ">
                              <div className="col-9 ">
                                <label>* Rua </label>
                                <Field type="text" className="form-control input-endereco" name="logradouro" id="logradouro" placeholder="Rua das flores" onChange={(event) => { setRua(event.target.value) }} value={rua} required />
                              </div>

                              <div className="col-3">
                                <label>* Número </label>
                                <Field type="text" className="form-control " placeholder="1234" name="numero" id="numero" placeholder="" onChange={(event) => { setNumeroEndereco(event.target.value) }} value={numeroEndereco} required />
                              </div>

                            </div>
                            <label> Complemento </label>
                            <Field type="text" className="form-control input-comp" name="complemento" placeholder="Ex. apto 200" onChange={(event) => { setComplemento(event.target.value) }} value={complemento} />
                            <label>* Bairro </label>
                            <Field type="text" className="form-control input-bairro" id="bairro" name="bairro" placeholder="Jardim das Flores" onChange={(event) => { setBairro(event.target.value) }} value={bairro} required />
                            <label>* Cidade </label>
                            <Field type="text" className="form-control input-cidade" id="cidade" name="cidade" placeholder="São Paulo" onChange={(event) => { setCidade(event.target.value) }} value={cidade} required />
                            <label>* Estado </label>
                            <Field type="text" className="form-control input-estado" name="uf" id="uf" placeholder="São Paulo" onChange={(event) => { setEstado(event.target.value) }} value={estado} required />
                            <label>Nome do destinatário </label>
                            <input type="text" class="form-control" placeholder={user.nome} value={destinatario} onChange={(event) => { setDestinatario(event.target.value == "" ? null : event.target.value) }} />


                          </ul>


                        </li>



                        <br />
                      </ul>

                    </div>
                  </Formik>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                  <button type="button" class="btn btn-primary" onClick={() => { adicionarEndereco() }}>Adicionar Endereço</button>
                </div>
              </div>
            </div>
          </div>
        </Tab.Pane>
    },
    {
      menuItem: 'Meus Cartões', render: () =>
        <Tab.Pane>
<<<<<<< HEAD
         
=======
          <div className="row">
            <div className="col-9 ">
              <h2 className=" " >Cartão Principal</h2>
            </div>
          </div>
          <hr className="mt-1" />

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
          <LinhaCartao cartao={cartao} att={setAtt} />
          <div className="row">
            <div className="col-9 d-flex flex-column justify-content-end">
              <h2 className="d-flex justify-content-between align-content-center" >Cartões Cadastrados</h2>
            </div>
            <div className="col-3  d-flex justify-content-end">
              <button type="button " class="btn btn-adcend pt-1 text-center" data-bs-toggle="modal" data-bs-target="#ModalAdicionarCartao" >
                <Icon name="plus circle  " className="icon-menucentral icon-plus-white" />Adicionar
              </button>
            </div>
          </div>
          <hr className="mt-1" />
          <div class="modal fade" id="ModalAdicionarCartao" tabindex="-1" aria-labelledby="ModalAdicionarCartao" aria-hidden="true">
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="ModalAdicionarCartao">Adicionar Cartão</h5>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                  <div className="div-fundo" id="div-fundo">
                    <p> <Icon className="icone-resumo" name="credit card outline" /><b>Adicionar Cartão</b></p>
                    <Cards
                      number={number}
                      name={name}
                      expiry={expiry}
                      cvc={cvc}
                      focused={focus}

                    />
                    <br />

                    <label>Número do cartão *</label>
                    <InputMask mask="9999999999999999" type="tel" name="number" value={number} onChange={e => setNumber(e.target.value)} onFocus={e => setFocus(e.target.name)} className="form-control input-endereco" placeholder="0000.0000.0000.0000" required />

                    <label>Nome impresso no cartão *</label>
                    <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} onFocus={e => setFocus(e.target.name)} className="form-control input-endereco" placeholder="Nome Impresso no Cartão" />

                    <label>Validade *</label>
                    <InputMask mask="99/99" type="text" name="expiry" value={expiry} onChange={e => setExpiry(e.target.value)} onFocus={e => setFocus(e.target.name)} className="form-control input-validade" placeholder="Ex: 12/28" />

                    <label>Código de Segurança *</label>
                    <InputMask mask="999" type="tel" name="cvc" value={cvc} onChange={e => setCvc(e.target.value)} onFocus={e => setFocus(e.target.name)} className="form-control input-cod-seg" placeholder="000" />
                    <br/>
                    <input type="checkbox" value={checkboxCartao} onChange={e => setCheckboxCartao(e.target.checked)}/> Desejo tornar este cartão meu principal
                    




                    <br />
                    <br />
                  </div>
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Fechar</button>
                  <button type="button" class="btn btn-primary" onClick={() => { AdicionarCartao()}}>Adicionar Cartão</button>
                </div>
              </div>
            </div>
          </div>
          <ListaCartoes cartoes={cartoes} att={setAtt} />


>>>>>>> meusEnderecos
        </Tab.Pane>
    },

    {
      menuItem: 'Sair', render: () => <Tab.Pane>
        <h2>Deseja Realmente Sair?</h2>
        <br /><br /><br />
        <div className="d-grid gap-2">
          <button class="btn btn-danger btn-sair" onClick={() => { deslogar() }} type="button">Sair</button>

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
  if (localStorage.getItem("comprando")) {
    localStorage.removeItem("comprando");
    window.location.href = "http://localhost:3000/carrinho"
  }
  if (JSON.parse(localStorage.getItem("defaultIndex")) == 1) {
    Swal.fire({
      title: 'Atenção!',
      text: 'Altere a sua Senha!',
      icon: 'warning',
      confirmButtonText: 'OK'
    })
  }

  let index = localStorage.getItem('defaultIndex') ? JSON.parse(localStorage.getItem('defaultIndex')) : 0
  return (
    <Tab menu={{ fluid: true, vertical: true, tabular: true }} panes={Panes(props)} defaultActiveIndex={index} />
  )
}





export default TabExampleVerticalTabular




