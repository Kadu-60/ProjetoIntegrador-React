import React, { useState, useEffect } from 'react'
// import CardCategoria from "../../components/micro/CardCategoria/CardCategoria"
import axios from "axios";
import ListarCardMarcas from "../../components/macro/ListarCardMarcas/ListarCardMarcas"
import {Container, Row, Col, NavLink } from 'react-bootstrap'
import "./Marca.css"
import ListaMarcas from '../../ListaMarcas'
import { Icon } from 'semantic-ui-react';

function Marca() {
    const [marcas, setMarcas] = useState([])
    
    useEffect(() => {
        setMarcas(ListaMarcas)
        axios.get('http://localhost:8080/Marca')
        .then((response) => {
           
            setMarcas(response.data)
        })
        .catch((error) => {
            console.error("Ops! Marca não encontrada" + error)
        })
    }, [])


    return ( 
        <>
        
        <Container>

       <br/><br/>
        <p className="title-dash">  
        <Icon className="tag-marca" name="tag" size='small'/>
        Marcas presentes em nossa loja
        </p>
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

export default Marca;