import React, { useEffect, useState } from 'react'
import { FormCheck } from 'react-bootstrap'
import { Form, Label } from 'semantic-ui-react'
import './FiltroProdut.css'
import { useHistory } from "react-router-dom"
import IrPara from "../../macro/BuscaAvan/IrPara";
import Produtos from '../../../pages/Produtos/Produtos'
import axios from 'axios';

import FormCheckInput from 'react-bootstrap/esm/FormCheckInput'




function FiltroProdut(props){


    const [marca , setMarca] = useState([])

      


        useEffect(() =>{
            axios.get("http://localhost:8080/Marca")
            .then((response) => {
                   setMarca(response.data)
            })
            .catch(() => {

            })
        
        },[])


    
   

         


    
  
    return(
     <>

            <div id="checkboxes" className="col-2  checkb">
                
                <div className="filtra-por ">
                <a className="btn-limpar" onClick={() => window.location.reload()}> Limpar filtro </a>  <br/>
                   
                    
                </div>
                <br/> <br/>
                <div className="filtro">
                <p> <b>Marcas</b></p>
                {marca.map((marca , key) =>{

                    return(
                       
                     
                        <div className="filtro" >
                        <ul key={key}>              
                        <div className="div-check ">
                                <li className="li "> 
                                <label className="label-inline" for={marca.nome}>
                                <input className="input" onClick={ (e) => {props.function(e)}} type="radio" name="marca" id={marca.nome} value={marca.id_marca} /> 
                              
                                   { marca.nome}</label> </li>
                                   <br/>
                                </div>
                                   
                        </ul>
                        </div>
                        
                     
                        
                    )
                })}
            

               
                </div>
            </div>
               


     </>
    )
}

export default FiltroProdut