import React from 'react'
import './TituloDash.css'
import { useParams, useHistory } from "react-router-dom"
function TituloDash(props) {

    const history = useHistory();
    const voltar = ()=>{
        history.go(-1)
    }
    return (
        <>
            <br />
            <div className="row">
                <div className="col-7 d-flex flex-column justify-content-end">
                    <h2 className="d-flex justify-content-between align-content-center" >Seja bem vindo {props.nome?props.nome.split(' ').slice(0, 2).join(' '):""}!</h2>
                </div>
                <div className="col-5  d-flex justify-content-end">
                    <button type="button " className="btn btn-voltar pt-1 text-center" onClick={voltar}>
                        Voltar
                    </button>
                </div>


            </div>

            <hr></hr>
            <br />

        </>
    )
}

export default TituloDash