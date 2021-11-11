import React from 'react'
import CardCategoria from "../../components/micro/CardCategoria/CardCategoria"
import {Container, Row, Col } from 'react-bootstrap'
import "./Categoria.css"

function Categoria() {
    const img = "https://emporiodacerveja.vtexassets.com/assets/vtex.file-manager-graphql/images/34d9e73c-c372-457c-8f55-c8906e120fda___939d0bd38e00474895ae1daec1cf08cb.png"
    const desc = "A Cervejaria Colorado é primeira Cervejaria Artesanal do Brasil, fundada por Marcelo Carneiro, em 1996."
    return ( 
        <>
        
        <Container>
            <h2 className="Categoria-title ">As Categorias presentes em nossa loja:</h2>
            <br/>
            <Row>
                <Col xl={3} md={4} sm={6}><CardCategoria img={img} title="Colorado" desc={desc} /></Col>
                <Col xl={3} md={4} sm={6}><CardCategoria img={img} title="Colorado" desc={desc} /></Col>
                <Col xl={3} md={4} sm={6}><CardCategoria img={img} title="Colorado" desc={desc} /></Col>
                <Col xl={3} md={4} sm={6}><CardCategoria img={img} title="Colorado" desc={desc} /></Col>
                <Col xl={3} md={4} sm={6}><CardCategoria img={img} title="Colorado" desc={desc} /></Col>
                <Col xl={3} md={4} sm={6}><CardCategoria img={img} title="Colorado" desc={desc} /></Col>
                <Col xl={3} md={4} sm={6}><CardCategoria img={img} title="Colorado" desc={desc} /></Col>
                <Col xl={3} md={4} sm={6}><CardCategoria img={img} title="Colorado" desc={desc} /></Col>
                <Col xl={3} md={4} sm={6}><CardCategoria img={img} title="Colorado" desc={desc} /></Col>
                <Col xl={3} md={4} sm={6}><CardCategoria img={img} title="Colorado" desc={desc} /></Col>
                <Col xl={3} md={4} sm={6}><CardCategoria img={img} title="Colorado" desc={desc} /></Col>
                <Col xl={3} md={4} sm={6}><CardCategoria img={img} title="Colorado" desc={desc} /></Col>
            </Row>
        </Container>
        </>
    );
}

export default Categoria;