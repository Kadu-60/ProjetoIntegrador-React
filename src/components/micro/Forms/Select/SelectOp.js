import React from 'react'
import './SelectOp'

function SelectOp(props) {

  return (
    <>
          
        <option selected={props.selected} value={props.valor}>{props.titulo}</option>

          
    </>
  );
}

export default SelectOp;