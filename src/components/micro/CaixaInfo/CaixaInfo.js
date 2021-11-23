import React from 'react'
import './CaixaInfo.css'

function CaixaInfo(props) {

    return (
        <>

            <div class="col-12 col-md-4 mb-4">
                <h6 className='titulo-finalizado d-flex justify-content-center'>{props.titulo}</h6>


                {props.children}


            </div>

        </>
    )
}

export default CaixaInfo