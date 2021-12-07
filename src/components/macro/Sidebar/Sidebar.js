import React, { useState } from 'react'
import './Sidebar.css'
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import { Col, Container, Row } from 'react-bootstrap';
import FormDefault from '../Formulario/FormDefault/FormDefault';
import Input from '../../micro/Formulario/Input/Input';
import Nav from 'react-bootstrap/Nav'

function Sidebar(props){
  const [key, setKey] = useState('home');
    return(
        <>
        <br/>

     
      <Container>
        <Row>
          <Col>
          <Tabs id="controlled-tab-example" activeKey={key} onSelect={(k) => setKey(k)} className="mb-3 menu-super" >
        
            <Tab className="dashboard" eventKey="dashboard" title=" Minha Conta ">
            <FormDefault title="Perfil"  >
                    <Input label="Nome" type="text"/>
                    <Input label="Sobrenome" type="text"/>                
                    <Input label="E-mail" type="text"/>
                    <Input label="Endereço" type="text"/>
                    <Input label="Telefone" type="tel"/>

              </FormDefault>

            </Tab>
            <Tab className="dashboard" eventKey="senha" title=" Alterar Senha ">
            <FormDefault title="Alterar Senha " >
 
              <Input label="Senha" type="password"/>
              <Input label="Confirmar Senha" type="password"/>

            </FormDefault>
            </Tab>
            <Tab className="dashboard" eventKey="pedidos" title=" Meus Pedidos " >
            Lorem ypsum87867654654654685564654
            </Tab>
          </Tabs>
          </Col>
        </Row>  

      </Container>
      <br/>
       
    </>
  );
}


     



export default Sidebar