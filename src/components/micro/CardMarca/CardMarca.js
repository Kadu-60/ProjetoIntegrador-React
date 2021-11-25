import React from 'react'
import { Card } from "react-bootstrap"
import "./CardMarca.css"
import axios from 'axios'

function CardMarca(props) {


    const link = "http://localhost:3000/produtos/" + props.id
    return (
        <>
            <br />
            <Card className="CardCategoria cardlink-marca" class="col-4" style={{ width: '100%' }}>
                <a href={link} className="CardCategorialink">
                    <Card.Header className="text-center">{props.title}</Card.Header>
                    <Card.Img className="Card.Img img-marca" variant="top" src={props.img} />
                    {/* <Card.Body>

                        
                        <Card.Text>
                            {props.desc}
                        </Card.Text>

                    </Card.Body> */}
                </a>
            </Card>
            <br />
        </>
    );
}

export default CardMarca;