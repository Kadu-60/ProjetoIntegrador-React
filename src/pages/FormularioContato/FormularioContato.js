import React from "react"
import Button from "../../components/micro/Button/Button"
import "./FormularioContato.css"

function FormularioContato (props) {
  return (
<>

;<form className="form-inline">
  <div className="container col-5">
    <h1 id="titulo">Formulário de Contato</h1>
    <p id="subtitulo">
      Em caso de dúvida, sugestão, elogio ou reclamação, envie:
    </p>
  </div>
  <div className="container col-6 titulo">
    Nome:*
    <input
      type="text"
      className="form-control"
      placeholder="Digite o seu nome"
      aria-required="true"
    />
  </div>
  <div className="container col-6 titulo">
    <label htmlFor="exampleFormControlInput1" className="form-label">
      Telefone:{" "}
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleFormControlInput1"
      placeholder="ex (00) 00000-0000"
    />
  </div>
  <div className="container col-6 titulo">
    <label htmlFor="exampleFormControlInput1" className="form-label">
      E-mail:*
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleFormControlInput1"
      placeholder="contato@devbrew.com.br"
    />
  </div>
  <div className="container col-6 titulo">
    Tipo De Contato:*
    <select className="form-select" aria-label="Tipo De Contato">
      <option selected>Selecione</option>
      <option value={1}>Informação</option>
      <option value={2}>Reclamação</option>
      <option value={3}>Sujestão</option>
      <option value={4}>Elogio</option>
    </select>
  </div>
  <div className="container col-6 titulo">
    <div className="container col-6 d-flex titulo">
      <div className="container col-5">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault1"
        />
        <label className="form-check-label" htmlFor="flexRadioDefault1">
          Sou Cliente
        </label>
      </div>
      <div className="container col-7">
        <input
          className="form-check-input"
          type="radio"
          name="flexRadioDefault"
          id="flexRadioDefault2"
          defaultChecked
        />
        <label className="form-check-label" htmlFor="flexRadioDefault2">
          Não sou Cliente
        </label>
      </div>
    </div>
  </div>
  <div className="container col-6 titulo">
    <label htmlFor="exampleFormControlInput1" className="form-label">
      Assunto:*{" "}
    </label>
    <input
      type="email"
      className="form-control"
      id="exampleFormControlInput1"
      placeholder="Digite o assunto"
    />
  </div>
  <div className="container col-6 titulo">
    <label htmlFor="exampleFormControlTextarea1" className="form-label">
      Mensagem:*
    </label>
    <textarea
      className="form-control"
      id="exampleFormControlTextarea1"
      rows={9}
      defaultValue={""}
    />
    <div className="container col-12 d-flex titulo">
      <div className="container col-1">
      
      <Button label="Excluir" onclick="null" class="apoio">
      </Button>
      </div>
      <div className="container col-1">
      <Button label="Enviar" onclick="null" class="enviar">
      </Button>
      </div>
    </div>
  </div>
  <div
    className="modal fade"
    id="exampleModal"
    tabIndex={-1}
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div className="modal-dialog">
      <div className="modal-content">
        <div className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">
            {" "}
            A sua mensagem será respondida dentro de alguns minutos! DevBrew
            agradeçe o contato.
          </h5>
          <button
            type="button"
            className="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          />
        </div>
        <div className="modal-body">Mensagem enviada com sucesso!</div>
        <div className="modal-footer">
          <a
            href="/home"
            className="btn btn-secondary btn-lg active"
            role="button"
            aria-pressed="true"
          >
            Fechar
          </a>
        </div>
      </div>
    </div>
  </div>
</form>

</>
  );
}

export default  FormularioContato;