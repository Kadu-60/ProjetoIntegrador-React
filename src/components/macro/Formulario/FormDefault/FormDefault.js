import React from 'react'
import './FormDefault.css'

function FormDefault(props) {

    return(
        <>
        <br/>
       
        <div class="row">
            <div class="col">
            <div className="container-form">
            <h2>{props.title}</h2>
            <form className="form">
                {props.children}
            </form>
            </div>
            </div>
        </div>
        <br/>
        </>
    )
}

export default FormDefault