import React from 'react'
import './FormDefault.css'
function FormDefault(props) {

    return(
        <>
        <div className="container">
            
            <form onSubmit={props.onSubmit} className="form">
                {props.children}
            </form>
        </div>
        </>
    )
}

export default FormDefault