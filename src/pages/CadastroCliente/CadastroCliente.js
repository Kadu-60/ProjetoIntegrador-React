import React, { useState } from 'react'
import './CadastroCliente.css'
import FormDefault from '../../components/micro/Forms/FormDefault/FormDefault'
import Input from '../../components/micro/Forms/Input/Input'
import Checkbox from '../../components/micro/Forms/Checkbox/Checkbox'
import BotaoConfirmar from '../../components/micro/BotaoConfirmar/BotaoConfirmar'
import { Button, Modal } from 'react-bootstrap'

function CadastroCliente(props) {
    
    const [show, setShow] = useState(false);

    return(
        <>
        <FormDefault>
                <br/>    <br/>
                <div class="row d-flex justify-content-center">
                
                    <div class="col d-flex justify-content-center">
                    <p className="title-dash">Criar conta</p>
                    </div>
               </div>
                <br/>
                <div class="row d-flex justify-content-center">
                    
                    <div class="form-group col-md-6">
                        <Input corLabel="preto" label="Nome Completo" type="text" required="true"/>
                    </div>
                    
                </div>
               <div class="row d-flex justify-content-center">
               
                    <div class="form-group col-md-3">
                        <Input corLabel="preto" label="CPF" type="text" placeholder="XXX.XXX.XXX-XX" small="Apenas número" required="true"/>
                    </div>
                    <div class="form-group col-md-3">
                        <Input corLabel="preto" label="Data de nascimento" type="text" placeholder="DD/MM/AAAA" required="true"/>
                    </div>
                    
               </div>
               <div class="row d-flex justify-content-center">
             
                   <div class="form-group col-md-3">
                       <Input corLabel="preto" label="E-mail" type='text' placeholder="user@email.com" small='Este será seu Login' required="true"/>
                   </div>
                   <div class="form-forup col-md-3">
                       <Input corLabel="preto" label='Telefone' type='text' placeholder="(XX) XXXXX-XXXX" small='Apenas números' required="true"/>
                   </div>
               </div>
               <div class="row">
                <div class="col-md-3"></div>
                   <div class="form-group col-md-3">
                       <Input corLabel='preto' label='Senha' type='password' placeholder="Insira sua senha" small='Deve conter pelo menos 8 caracteres' required="true"/>
                   </div>
                    <div class="form-group col-md-3">
                        <Input corLabel='preto' label='Repita sua senha' type='password' placeholder="Insira sua senha" required="true"/>
                    </div>
               </div>
               
               <br/><br/>
               <div class="row justify-content-center">
                <div class="col-md-6 d-flex justify-content-around">
                    <div class="form-check col-md-6 termos">
                        <Checkbox texto="Aceito e concordo com os " /> <a className="link-termo" onClick={() => setShow(true)}> <u>Termos e condições</u></a>

                    </div>
                </div>
                </div>
               <br/>
               <div class="row d-flex justify-content-center">
                <div class="col-12 col-md-4  d-flex justify-content-around">
                    <BotaoConfirmar texto='Criar conta'/>
                </div>
             
             
                </div>
               <br/>
               
                <div class="row d-flex justify-content-center">
                
                    <div class="col-md-4 d-flex justify-content-center">
                        <p>
                            Já possui conta? <a className="fazer-login" href="/login"> Fazer login</a>
                        </p>
                    </div>
               </div>

         
        <Modal
        show={show}
        onHide={() => setShow(false)}
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
           Termos e Condições do site
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Ipsum molestiae natus adipisci modi eligendi? Debitis amet quae unde
            commodi aspernatur enim, consectetur. Cumque deleniti temporibus
            ipsam atque a dolores quisquam quisquam adipisci possimus
            laboriosam. Quibusdam facilis doloribus debitis! Sit quasi quod
            accusamus eos quod. Ab quos consequuntur eaque quo rem! Mollitia
            reiciendis porro quo magni incidunt dolore amet atque facilis ipsum
            deleniti rem!
          </p>
        </Modal.Body>
        <Modal.Footer>
           
        <Button  className="btn-modal-termo" onClick={() => setShow(false)}>Concordo</Button>
      </Modal.Footer>
      </Modal>

               <br/>
            </FormDefault>
        </>
    )
}



export default CadastroCliente