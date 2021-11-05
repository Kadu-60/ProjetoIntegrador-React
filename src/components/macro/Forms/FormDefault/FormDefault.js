import React from 'react'
import './FormDefault.css'
import Input from '../../../micro/Forms/Input/Input'

function FormDefault(props) {

    return(
        <>
        <div className="container-form">
            <h2 className="titulo">{props.title}</h2>
            <form className="form">
                {props.children}
            </form>
        </div>
        </>
    )
}

export default FormDefault