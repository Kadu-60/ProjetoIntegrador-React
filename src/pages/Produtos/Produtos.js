import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './Produtos.css'
import ListarProdutos from '../../components/macro/ListarProdutos/ListarProdutos';

import NovidadesHome from '../../components/macro/NovidadesHome/NovidadesHome';
import axios from "axios";
import MarcaItem from '../../components/micro/MarcaItem/MarcaItem';





function Produtos(){

    const {id} = useParams()
    const [ produtos, setProdutos] = useState({})
   
    useEffect(() => {
        
        axios.get(`http://localhost:8080/Marca/${id}`)
        .then((response) => {
           
            setProdutos(response.data)
        })
        .catch((error) => {
            console.error("Ops! ocorreu um erro"+error)
        })
    }, [])
  

   

    return(
     
    
          
               
                <body className="products-body" >
                   
  

                  
                        <div className="div-global-pag-produtos" >
                            <MarcaItem produtos = {produtos}/>

                        </div>
                      
                        

                       
                                  
                           
                            <div className="list-cards-produtos">
                                <ListarProdutos >
                                    <NovidadesHome/>
                                </ListarProdutos>
                            </div>
             
                                
                                
                          
                            <br/>   <br/>
            
                        
        </body>


                )
      
       
    
    
}


function leiaMais(){
    var pontos = document.getElementById("pontos");
    var maisTexto = document.getElementById("mais");
    var LeiaMais = document.getElementById("LeiaMais");

    if(pontos.style.display === "none"){
        pontos.style.display="inline";
        maisTexto.style.display="none";
        LeiaMais.innerHTML="Mais informações";
    }else {
        pontos.style.display="none";
        maisTexto.style.display="inline";
        LeiaMais.innerHTML="Recolher"; 
    }
}


export default Produtos 