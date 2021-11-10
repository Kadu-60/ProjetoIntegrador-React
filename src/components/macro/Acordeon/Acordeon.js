import React from 'react'
import './Acordeon.css'
import Accordion from 'react-bootstrap/Accordion'

function Acordeon(props) {

    return (
        <>
            <Accordion defaultActiveKey="0">
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Descrição do Produto</Accordion.Header>
                    <Accordion.Body>
                        {props.descricaoProd}
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Descrição Técnica</Accordion.Header>
                    <Accordion.Body>
                        <ul>
                            <label> <strong>Familia da Cerveja:</strong></label>
                            <li>{props.familia}</li>
                            <label> <strong>Estilo ou Família:</strong></label>
                            <li>{props.estilo}</li>
                            <label> <strong>IBU:</strong></label>
                            <li>{props.ibu}</li>
                            <label> <strong>Cor da Cerveja:</strong></label>
                            <li>{props.cor}</li>
                            <label> <strong>Teor Alcoólico:</strong></label>
                            <li>{props.teor}00%</li>
                        </ul>
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>Harmonização</Accordion.Header>
                    <Accordion.Body>
                        {props.harmonizacao}
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </>
    )
}

export default Acordeon