import React from 'react'
import {Card, Button, } from "react-bootstrap"

    function CardCategoria(props) {
        return (
            <>
                <br />
                <Card style={{ width: '100%' }}>
                    <Card.Img variant="top" src={props.img} />
                    <Card.Body>
                        <Card.Title>{props.title}</Card.Title>
                        <Card.Text>
                            {props.desc}
                        </Card.Text>
                        <Button variant="primary">Veja os produtos</Button>
                    </Card.Body>
                </Card>
                <br/>
            </>
        );
    }

export default CardCategoria;