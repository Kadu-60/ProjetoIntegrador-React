import React from 'react'
import { Card, Button } from "react-bootstrap"
import "./CardMarca.css"
import axios from 'axios'
import Marca from '../../../pages/Marca/Marca'

function CardMarca(props) {


    const link = "http://localhost:3000/produtos/" + props.id
    return (
        <>
            <br />
            <Card className="CardCategoria cardlink-marca shadow-sm p-3 mb-5 bg-white rounded" class="col-4" style={{ width: '100%' }}>
                <a href={link} class="CardCategorialink">
                    <Card.Header className="text-center titulo-marca ">{props.title}</Card.Header>
                    <Card.Img className="Card.Img img-marca" variant="top" src={props.img} />
                                         
                    <Card.Body>
                       

                        {/* <Card.Text>
                            {props.desc}
                        </Card.Text> */}
                    
                    </Card.Body>

                </a>
            </Card>
            <br />
        </>
    );
}

export default CardMarca;