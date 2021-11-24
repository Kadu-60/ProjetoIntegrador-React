import React from 'react'
import { Card, Button, } from "react-bootstrap"
import "./CardCategoria.css"
import axios from 'axios'

function CardCategoria(props) {

    


    const link = "http://localhost:8080/Marca" + props.id
    return (
        <>
            <br />
            <Card className="CardCategoria" style={{ width: '100%' }}>
                <a href={link} className="CardCategorialink">
                    <Card.Img className="Card.Img" variant="top" src={props.img} />
                    <Card.Body>

                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.desc}
                        </Card.Text>

                    </Card.Body>
                </a>
            </Card>
            <br />
        </>
    );
}

export default CardCategoria;