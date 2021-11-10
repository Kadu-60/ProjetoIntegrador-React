import React from 'react'
import './TitulosHome.css'

function TitulosHome(props) {

  return (
    <>
        
            <div class="tituloLinha  destaques d-flex justify-content-center align-items-center">
                <h2 class="titulo">{props.titulo}</h2>
            </div>
            
    </>
  );
}

export default TitulosHome;
