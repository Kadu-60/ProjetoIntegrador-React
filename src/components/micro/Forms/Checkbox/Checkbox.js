import React from 'react'

function Input(props) {

    return(
        <>
        
            <input class="form-check-input aceite-termos" type="checkbox" value="termos" id="flexCheckChecked" required/>
            <label class="form-check-label preto" for="flexCheckChecked">{props.texto}</label>
                  
        
        </>
    )
}

export default Input