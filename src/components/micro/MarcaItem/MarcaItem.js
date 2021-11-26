import React from "react";
import { Link } from "react-router-dom";
import Caneca from '../../../assets/imgs/teste/caneca.gif'
import './MarcaItem.css'



    export default function MarcaItem(props) {
    const marcas = props.marcas || {}
    console.log(marcas)
    
              
                     
              
                  return(      
                    <>  
                    <div key={marcas.id}>
                        
                            <div  >
                                <img className="banner-produtos" src={marcas.banner}/>
                            </div>

                            <br/> <br/>
                        <div className="container col-12">
                                <p className="title-dash cervejas-produtos">
                                    <img src={Caneca} width="20px" className="caneca-brew"/>{marcas.nome}
                                </p>
                                
                                    <p className="paragrafo-texto">
                                        {marcas.desc}
                                    </p>
                                    <br/>
                        </div>


                     </div>
        
            
                
            
       
        </>
    );
}
