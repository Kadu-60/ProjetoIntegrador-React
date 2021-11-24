import React, { useEffect, useState } from "react"
import './Busca.css'
import { useParams } from "react-router-dom"
import BuscaAvancadaResult from './BuscaAvancadaResult'

function BuscaAvancada(props) {



  const params1 = useParams(":pesq1")
  const params2 = useParams(":pesq2")
  const params3 = useParams(":pesq3")
  const params4 = useParams(":pesq4")

  const pesq = params1.pesq1 + "/" + params2.pesq2 + "/" + params3.pesq3 + "/" + params4.pesq4

  console.log(pesq)



  return (
    <>



      <BuscaAvancadaResult pesq={pesq} />



    </>
  );
}

export default BuscaAvancada;
