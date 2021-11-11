import React, { useState, useEffect } from 'react'
import CardCategoria from "../../components/micro/CardCategoria/CardCategoria"
import axios from "axios";
import ListarCardMarcas from "../../components/macro/ListarCardMarcas/ListarCardMarcas"
import {Container, Row, Col } from 'react-bootstrap'
import "./Categoria.css"

function Categoria() {
    const [marcas, setMarcas] = useState([])
    
    useEffect(() => {
        axios.get('http://localhost:3001/marcas')
        .then((response) => {
            setMarcas(response.data)
        })
        .catch((error) => {
            console.error("Ops! ocorreu um erro"+error)
        })
    })


    return ( 
        <>
        
        <Container>
            <h2 className="Categoria-title ">As Marcas presentes em nossa loja:</h2>
            <br/>
            <Row>
                <ListarCardMarcas marcas={marcas}/>
            </Row>
        </Container>
        </>
    );
}

export default Categoria;