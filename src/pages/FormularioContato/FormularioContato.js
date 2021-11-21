import React, { useState} from "react"
import "./FormularioContato.css"
import { Modal, Button } from "react-bootstrap"
import axios from 'axios'
import { useHistory } from "react-router-dom"




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

    function onChange(ev){
      const { name, value } = ev.target;

      setValues({ ...values, [name]: value })
    }
  const history = useHistory();
   


    function onSubmit(event){
      event.preventDefault();

      axios.post(URL+'formulariocontato', values)
      .then((response) => {
        
        alert("Mensagem enviada com sucesso!")

        history.push('/');
      });
    
    
    
    
    }
   
  
  return (
<body className="formulario-contato"  >
;<form className="form-inline dados-form" onSubmit={onSubmit}>
        <div className="container col-4">
          <p className="title-dash">Formulário Contato</p>

          <p id="subtitulo">
            Dúvidas, sugestões, elogios ou reclamações, envie:
          </p>
        </div>
        <div className="container col-4 titulo">
        <p className="p-nome">  Nome:*</p>
          <input 
           id="nome"
            type="text"
            className="form-control"
            placeholder="Digite o seu nome"
            aria-required="true"  name="nome" onChange={onChange} required
          />
        </div>
        <div className="container col-4 titulo">
          <label htmlFor="exampleFormControlInput1" className="form-label">
          <p className="p-nome">   Telefone:*</p>
          </label>
          <input
           id="telefone"
            type="number"
            className="form-control"
            placeholder="11 99999-9999" name="telefone" onChange={onChange} 
          />
        </div>
        <div className="container col-4 titulo">
          <label htmlFor="exampleFormControlInput1" className="form-label">
          <p className="p-nome">   E-mail:*</p>
          </label>
          <input 
           id="email"
            type="email"
            className="form-control"
            placeholder="contato@devbrew.com.br" name="email" onChange={onChange} required
          />
        </div>
        <div className="container col-4 titulo">
        <p className="p-nome"> Tipo De Contato:*</p>
          <select className="form-select form-control" aria-label="Tipo De Contato" required name="tipo_de_contato" id="tipo_de_contato" onChange={onChange} >
          <option selected>Selecione</option> 
            <option value="Informação"  onChange={onChange}>Informação</option>
            <option value="Reclamação" onChange={onChange}>Reclamação</option>
            <option value="Sugestão"  onChange={onChange}>Sugestão</option>
            <option value="Elogio"  onChange={onChange}>Elogio</option> 
          </select>
        </div>
        <div className="container col-4 titulo">
          <label htmlFor="exampleFormControlInput1" className="form-label">
          <p className="p-nome">   Assunto:*{" "}</p>
          </label>
          <input 
           id="assunto"
            type="text"
            className="form-control"
            placeholder="Digite o assunto" name="assunto" id="assunto" onChange={onChange} required
          />
        </div>
        <div className="container col-4 mensagem-form titulo">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <p className="p-nome">  Mensagem:*</p>
          </label>
          <textarea
           id="mensagem"
            className="form-control"
            rows={9}
            defaultValue={""} required="true" name="mensagem" onChange={onChange}
          />
          <div className="container buttonform col-12 d-flex titulo">
            <div className="container col-1">

              <button onClick="null" className="apoio" type="reset">
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