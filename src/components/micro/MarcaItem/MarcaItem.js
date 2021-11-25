import React from "react";
import { Link } from "react-router-dom";
import Caneca from '../../../assets/imgs/teste/caneca.gif'



    export default function MarcaItem(props) {
    const produtos = props.produtos || []
    
        return (
        <>
            {
            <div >
                {produtos.id}
                  <div className="banner-produtos" >
                      <img src={produtos.img}/>
                  </div>

              <br/> <br/>
              <div className="container col-12">
                  <p className="title-dash cervejas-produtos">
                      <img src={Caneca} width="20px" className="caneca-brew"/>{produtos.nome}
                  </p>
                  
                      <p className="paragrafo-texto">
                          {produtos.desc}
                      </p>
                        <br/>
          </div>


          </div>
        
            }
       
        </>
    )
    }