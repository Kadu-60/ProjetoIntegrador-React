// import './MenuCentral.css'
import MeuPedido from '../../micro/MeuPedido/MeuPedido'
import React, { useState, useEffect } from 'react'
import { Container, Tab } from 'semantic-ui-react'
import BotaoDash from '../../micro/BotaoDash/BotaoDash'
import InputMask from "react-input-mask";
import { useParams } from 'react-router-dom'
import axios from 'axios'
import Swal from 'sweetalert2'


const deslogar = () => {
  localStorage.removeItem('token')
  localStorage.removeItem('user')
  window.location.href = 'http://localhost:3000/home'
}






const Panes = ({ user, dataNascimento }) => {


  const [testeData, setTesteData] = useState([])


  const [telefoneChanged, setTelefoneChanged] = useState((user.telefone))
  const [nomeChanged, setNomeChanged] = useState((user.nome))
  const [dataNas, setDataNas] = useState('')
  const [senha, setSenha] = useState('')
  const [senhaSec, setSenhaSec] = useState('')
  const [validSenha, setValidSenha] = useState('')
  const { id } = useParams()
  const [pedidos, setPedidos] = useState([])
  const [dateInvalida, setDateInvalida] = useState('d-none')
  const [dateLess, setDateLess] = useState('d-none')

  const teste1 = (("" + dataNascimento).slice(0, 10).replaceAll("-", "/"))
  const data1 = new Date(teste1).toLocaleDateString()
  const [muda, setMuda] = useState('')

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
  }, [])





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
    }
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
  let index = localStorage.getItem('defaultIndex') ? 2 : 0
  return (
    <Tab menu={{ fluid: true, horizontal: true, tabular: true }} panes={Panes(props)} defaultActiveIndex={index} />
  )
}





export default TabExampleVerticalTabular




