import React from 'react'
import './Input.css'

function Input(props) {

    return(
        <>
        <div className="input-container">
            <label className= {props.corLabel}>{props.label}:</label>
            <input className="form-control" name={props.name} value={props.value} onChange={props.onChange} type={props.type} placeholder={props.placeholder} required={props.required} aria-label={props.arialabel} />
            <small >{props.small}</small>
        </div>
        </>
    )
}

export default Input