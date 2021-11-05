import React from 'react'
import './CaixaInfo.css'

function CaixaInfo(props) {

    return (
        <>

            <div class="col col-md-3">
                <h6 className='titulo'>{props.titulo}</h6>


                {props.children}


            </div>

        </>
    )
}

export default CaixaInfo