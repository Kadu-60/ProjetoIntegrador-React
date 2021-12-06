import React, { useState, useEffect } from 'react'
import "./FormularioContato.css"
import { Modal, Button } from "react-bootstrap"
import axios from 'axios'
import { useHistory } from "react-router-dom"
import Swal from 'sweetalert2'




const initialValue = {
  nome: '',
  telefone: 0,
  email: '',
  tipo_de_contato: '',
  assunto: '',
  mensagem: ''
}
const URL = 'http://localhost:8080/'

function FormularioContato(props) {

  const [ values, setValues ] = useState(initialValue);

  //   function onChange(ev){
  //     const { name, value } = ev.target;
      

  //     setValues({ ...values, [name]: value })
  //   }
  const history = useHistory();

  const [telefone, setTelefone] = useState('')
  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [assunto, setAssunto] = useState('')
  const [tipo_de_contato, setTipo_de_contato] = useState('')
  const [mensagem, setMensagem] = useState('')

  const [nomePlaceholder, setNomePlaceholder] = useState("Digite o seu nome...")
  

  // function setCampos(logado) {

  //   if (logado == 1) {
  //     setValues({ ...values, nome: usuario.nome })
      
  //   }
    
  // }


  const [logado, setLogado] = useState(0)
  const [token, setToken] = useState('')
  const [usuario, setUsuario] = useState([])


  useEffect(() => {
    setToken(localStorage.getItem('token'))
    let email = localStorage.getItem('user')
    if (token && logado == 0 && email) {
        axios.get("http://localhost:8080/cadastro-cliente/getByEmail/" + email)
            .then((response) => {
              setUsuario(response.data)
              setNome(response.data.nome)
              setTelefone((response.data.telefone))
              setEmail(response.data.email)
            })
            .catch((error) => { console.log(error) })
        setLogado(1)
    }
    
    
    
    
})





console.log(usuario)

   


    function onSubmit(event){
      event.preventDefault();

      const formContato = {
        nome: nome,
        telefone: telefone.replace('-', '').replace('(', '').replace(')', '').replaceAll(' ', ''),
        email: email,
        tipo_de_contato: tipo_de_contato,
        assunto: assunto,
        mensagem: mensagem
      }
      setValues(formContato)
      console.log(formContato)
      console.log(values)


      axios.post(URL+'formulariocontato',formContato)
      .then((response) => {
        
        Swal.fire({
          title: 'Ok!',
          text: 'Mensagem enviada!',
          icon: 'success',
          confirmButtonText: 'fechar'
        })

        history.push('/home');
      });
    
    
    
    
    }
   
  
  return (
<body className="formulario-contato"  >
;<form className="form-inline dados-form" onSubmit={onSubmit}>
        <div className="container col-4">
          <p className="title-dash">Formulário De Contato</p>

          <p id="subtitulo">
            Dúvidas, sugestões, elogios ou reclamações, envie:
          </p>
        </div>
        <div className="container col-4 titulo">
        <p className="p-nome">  Nome:*</p>
          <input 
           id="nome"
           value={nome}
            type="text"
            className="form-control"
            placeholder="Digite o seu nome..."
            aria-required="true"  name="nome" onChange={(event) => { setNome(event.target.value) }} required
          />
        </div>
        <div className="container col-4 titulo">
          <label htmlFor="exampleFormControlInput1" className="form-label">
          <p className="p-nome">   Telefone:*</p>
          </label>
          <input
           id="telefone"
           value={telefone}
            type="text"
            className="form-control"
            placeholder="(11) 12345-6789" name="telefone" onChange={(event) => { setTelefone(event.target.value) }} 
          />
        </div>
        <div className="container col-4 titulo">
          <label htmlFor="exampleFormControlInput1" className="form-label">
          <p className="p-nome">   E-mail:*</p>
          </label>
          <input 
           id="email"
           value={email}
            type="email"
            className="form-control"
            placeholder="contato@devbrew.com.br" name="email" onChange={(event) => { setEmail(event.target.value) }} required
          />
        </div>
        <div className="container col-4 titulo">
        <p className="p-nome"> Tipo de Contato:*</p>
          <select className="form-select form-control" aria-label="Tipo De Contato" required name="tipo_de_contato" id="tipo_de_contato" onChange={(event) => { setTipo_de_contato(event.target.value) }} >
          <option selected>Selecione</option> 
            <option value="Informação"  onChange={(event) => { setTipo_de_contato(event.target.value) }}>Informação</option>
            <option value="Reclamação" onChange={(event) => { setTipo_de_contato(event.target.value) }}>Reclamação</option>
            <option value="Sugestão"  onChange={(event) => { setTipo_de_contato(event.target.value) }}>Sugestão</option>
            <option value="Elogio"  onChange={(event) => { setTipo_de_contato(event.target.value) }}>Elogio</option> 
          </select>
        </div>
        <div className="container col-4 titulo">
          <label htmlFor="exampleFormControlInput1" className="form-label">
          <p className="p-nome">   Assunto:*{" "}</p>
          </label>
          <input 
           id="assunto"
           value={assunto}
            type="text"
            className="form-control"
            placeholder="Digite o assunto..." name="assunto" id="assunto" onChange={(event) => { setAssunto(event.target.value) }} required
          />
        </div>
        <div className="container col-4 mensagem-form titulo">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <p className="p-nome">  Mensagem:*</p>
          </label>
          <textarea
           id="mensagem"
           value={mensagem}
            className="form-control"
            rows={9}
            defaultValue={""} required="true" name="mensagem" placeholder="Digite aqui a sua mensagem..." onChange={(event) => { setMensagem(event.target.value) }}
          />
          <div className="container buttonform col-12 d-flex titulo">
            <div className="container col-1">

              <button onClick="null" className="apoio-form" type="reset">
                Excluir
              </button>
              <button  className="enviar" type="submit" >
              Enviar
              </button>
            </div>
            </div>
            </div>
{/*          
        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                     data-bs-toggle="modal" data-bs-target="#exampleModal"
                        <h5 class="modal-title" id="exampleModalLabel"> A sua mensagem será respondida
                            dentro de alguns minutos! DevBrew agradeçe o contato.</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                     Mensagem foi enviada com sucesso!
                    </div>
                    <div class="modal-footer">
                        <a href="/home" class="btn btn-secondary btn-lg active" role="button" aria-pressed="true">Fechar</a>
                    </div>
                </div>
            </div>
        </div>
      */}
      
      <br /><br /><br /><br /><br />
    </form>
 </body>
          
  );
}

export default FormularioContato;