import React from 'react'
import './FormDefault.css'
function FormDefault(props) {

    return(
        <>
        <div className="container">
            
            <form className="form">
                {props.children}
            </form>
        </div>
        </>
    )
}

export default FormDefault