import React, { useState, useEffect } from 'react'
import CardCategoria from "../../components/micro/CardCategoria/CardCategoria"
import axios from "axios";
import ListarCardMarcas from "../../components/macro/ListarCardMarcas/ListarCardMarcas"
import {Container, Row, Col } from 'react-bootstrap'
import "./Categoria.css"
import ListaMarcas from '../../ListaMarcas'
import { Icon } from 'semantic-ui-react';

function Categoria() {
    const [marcas, setMarcas] = useState([])
    
    useEffect(() => {
        setMarcas(ListaMarcas)
        // axios.get('http://localhost:3001/marcas')
        // .then((response) => {
        //     setMarcas(response.data)
        // })
        // .catch((error) => {
        //     console.error("Ops! ocorreu um erro"+error)
        // })
    })


    return ( 
        <>
        
        <Container>

       <br/><br/>
        <p className="title-dash">  <Icon className="tag-marca" name="tag" size='small'/>marcas presentes em nossa loja</p>
            <hr/>
            <br/>
            <Row>
                <ListarCardMarcas marcas={marcas}/>
            </Row>
            <br/><br/>
        </Container>
        </>
    );
}

export default Categoria;