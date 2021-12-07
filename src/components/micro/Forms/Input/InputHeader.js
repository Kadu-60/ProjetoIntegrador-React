import React from 'react'

function InputHeader(props) {

    return(
        <>
        
        <input className={props.className} name={props.name} value={props.value} onChange={props.onChange} type={props.type} placeholder={props.placeholder} required={props.required} aria-label={props.arialabel} />
            
        </>
    )
}

export default InputHeader