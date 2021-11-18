import React from "react"
import Button from "../../components/micro/Button/Button"
import "./FormularioContato.css"

function FormularioContato(props) {
  return (
    <>

      ;<form className="form-inline dados-form">
        <div className="container col-5">
          <p className="title-dash">Formulário Contato</p>

          <p id="subtitulo">
            Em caso de dúvida, sugestão, elogio ou reclamação, envie:
          </p>
        </div>
        <div className="container col-6 titulo">
        <p className="p-nome"> *Nome:</p>
          <input
            type="text"
            className="form-control"
            placeholder="Digite o seu nome"
            aria-required="true"
          />
        </div>
      
        <div className="container col-6 titulo">
          <label htmlFor="exampleFormControlInput1" className="form-label">
          <p className="p-nome">   *E-mail:</p>
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="contato@devbrew.com.br"
          />
        </div>
        <div className="container col-6 titulo">
        <p className="p-nome"> *Tipo De Contato:</p>
          <select className="form-select" aria-label="Tipo De Contato">
            <option selected>Selecione</option>
            <option value={1}>Informação</option>
            <option value={2}>Reclamação</option>
            <option value={3}>Sujestão</option>
            <option value={4}>Elogio</option>
          </select>
        </div>
     
        <div className="container col-6 titulo">
          <label htmlFor="exampleFormControlInput1" className="form-label">
          <p className="p-nome">   *Assunto:{" "}</p>
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="Digite o assunto"
          />
        </div>
        <div className="container col-6 mensagem-form titulo">
          <label htmlFor="exampleFormControlTextarea1" className="form-label">
          <p className="p-nome">  *Mensagem:</p>
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
      <br /><br /><br /><br /><br />

    </>
  );
}

export default FormularioContato;