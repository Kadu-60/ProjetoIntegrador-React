import React from 'react'

function Checkbox(props) {

    return(
        <>
        
            <input class="form-check-input aceite-termos" type="checkbox" value="termos" id="flexCheckChecked" onChange={()=>{props.onChange()}}/>
            <label class="form-check-label preto" for="flexCheckChecked">{props.texto}</label>
                  
        
        </>
    )
}

export default Checkbox