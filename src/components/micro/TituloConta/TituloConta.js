import React, { useEffect, useState } from 'react'


function TituloConta(props){
    const [ nome, setNome ] = useState("")

    useEffect(() => {
        setNome(props.nome)
    })
 
    return(
     <>
     <span>Olá, {nome} </span>

     </>
    )
}

export default TituloConta