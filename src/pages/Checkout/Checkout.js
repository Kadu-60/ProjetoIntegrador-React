import React from 'react'
import './Checkout.css'
//import 'bootstrap/dist/css'
import FormDefault from '../../components/macro/Forms/FormDefault/FormDefault'
import Button from '../../components/micro/Button/Button'
import { Form, Row, Col } from 'react-bootstrap'

function Checkout(props) {

    return (
        <> <br/>   <br/>   
            <FormDefault className="title-endereco" title="">
                <br/>
               
            <p className="title-dash">Finalizar Pedido</p>
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridEmail">
                            <Form.Label>Nome</Form.Label>
                            <Form.Control type="name" placeholder="Nome" />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridPassword">
                            <Form.Label></Form.Label>
                            <Form.Control type="surname" placeholder="Sobrenome" />
                        </Form.Group>
                    </Row>

                    <Form.Group className="mb-3" controlId="formGridAddress1">
                        <Form.Label>Endereço</Form.Label>
                        <Form.Control placeholder="Av. Corifeu de Azevedo Marques" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formGridAddress2">
                        <Form.Label>Bairro</Form.Label>
                        <Form.Control placeholder="Butantã" />
                    </Form.Group>

                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridCity">
                            <Form.Label>Cidade</Form.Label>
                            <Form.Control />
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Estado</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>Selecione...</option>
                                <option>SP</option>
                                <option>AC</option>
                                <option>AL</option>
                                <option>AP</option>
                                <option>AM</option>
                                <option>...</option>
                                <option>SC</option>
                                <option>RJ</option>
                                <option>RS</option>
                            </Form.Select>
                        </Form.Group>

                        <Form.Group as={Col} controlId="formGridZip">
                            <Form.Label>CEP</Form.Label>
                            <Form.Control placeholder="05580-000" />
                        </Form.Group>
                    </Row>

                    <hr />
                    <Row className="mb-3">
                        <Form.Group as={Col} controlId="formGridState">
                            <Form.Label>Cartão</Form.Label>
                            <Form.Select defaultValue="Choose...">
                                <option>American Express</option>
                                <option>Mastercard</option>
                                <option>Visa</option>
                                <option>Elo</option>
                            </Form.Select>
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Nome como está no cartão</Form.Label>
                            <Form.Control placeholder="Nome Sobrenome" />
                        </Form.Group>
                    </Row>

                    <Row className="mb-3">
                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress1">
                            <Form.Label>Número do Cartão</Form.Label>
                            <Form.Control placeholder="#### #### #### ####" />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="formGridAddress2">
                            <Form.Label>CVV</Form.Label>
                            <Form.Control placeholder="123" />
                        </Form.Group>

                        <Form.Group as={Col} className="mb-3" controlId="formGridZip">
                            <Form.Label>Validade</Form.Label>
                            <Form.Control placeholder="11/27" />
                        </Form.Group>
                    </Row>

                    <Button label="Confirmar Compra" type="submit" onclick="null" class="conversao"/>
                    <Button label="Cancelar" type="submit" onclick="null" class="apoio"/>
            </FormDefault>
            <br/>   <br/>  

        </>
    )
}

export default Checkout