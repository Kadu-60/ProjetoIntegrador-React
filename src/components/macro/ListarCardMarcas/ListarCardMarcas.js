import React, { useEffect } from 'react'
import CardMarca from "../../micro/CardMarca/CardMarca"
import {Col } from 'react-bootstrap'
import axios from 'axios'


function ListarCardMarcas(props) {
    const marcas = props.marcas || [];


    return (  
        <>
        
            {
                marcas.map((marca)=>{
                    return(
                        <Col key={marca.id_marca} xl={3} md={4} sm={6} xs={12} >
                            <CardMarca  id={marca.id_marca} img={marca.img} title={marca.nome} desc={marca.desc} />
                        </Col>
                    )
                })
            }
        </>
    );
}

export default ListarCardMarcas;