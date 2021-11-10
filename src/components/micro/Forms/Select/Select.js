import React from 'react'
import './Select.css'


function Select(props) {

  return (
    <>
          <label for={props.titulo}>{props.titulo}:</label>

          <select class="" name={props.titulo} id={props.titulo}>
              {props.children}

          </select>
    </>
  );
}

export default Select;
