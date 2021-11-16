import React from 'react'
import CardCategoria from "../../micro/CardCategoria/CardCategoria"
import {Col } from 'react-bootstrap'


function ListarCardMarcas(props) {
    const marcas = props.marcas || [];
    return (  
        <>
        
            {
                marcas.map(marca=>{
                    return(
                        <Col key={marca.id} xl={3} md={4} sm={6} xs={12}>
                            <CardCategoria id={marca.id} img={marca.img} title={marca.nome} desc={marca.desc} />
                        </Col>
                    )
                })
            }
        </>
    );
}

export default ListarCardMarcas;