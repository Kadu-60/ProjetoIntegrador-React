import React from 'react'
import './Produtos.css'
import ListarProdutos from '../../components/macro/ListarProdutos/ListarProdutos';
import Produto from '../../components/Produto/Produto';
import Img1 from '../Home/imgs/ipa-bottle.png'
import { Icon } from 'semantic-ui-react';
function Produtos(props){

    return(
     <>
            <br/>      <br/>
        <p className="title-dash cervejas-produtos"><Icon className="icone-cerveja-produtos" name="shopping bag"/>Cervejas      <p className="produtos-encontrados">40 produtos</p></p>
  
                      
                <ListarProdutos>
                <p className="title-dash cervejas-produtos"> <Icon className="icone-cerveja-produtos" name="beer"/>Colorado</p>
 
                    
                   
                </ListarProdutos>
                 
                
                <ListarProdutos>
                <p className="title-dash cervejas-produtos"><Icon className="icone-cerveja-produtos" name="beer"/>Baden</p>
                   
                   
                </ListarProdutos>

                <ListarProdutos>
                <p className="title-dash cervejas-produtos"><Icon className="icone-cerveja-produtos" name="beer"/>Hoegaarden</p>
                   
                   
                </ListarProdutos>

                <ListarProdutos>
                <p className="title-dash cervejas-produtos"><Icon className="icone-cerveja-produtos" name="beer"/>Patagonia </p>
                    
                   
                </ListarProdutos>

                <ListarProdutos>
                <p className="title-dash cervejas-produtos"><Icon className="icone-cerveja-produtos" name="beer"/>Fritz </p>
                   
                   
                </ListarProdutos>

                <ListarProdutos>
                <p className="title-dash cervejas-produtos"><Icon className="icone-cerveja-produtos" name="beer"/>Mantibier </p>
                    
                   
                </ListarProdutos>

                <ListarProdutos>
                <p className="title-dash cervejas-produtos"><Icon className="icone-cerveja-produtos" name="beer"/>Madalena</p>
                    
                   
                </ListarProdutos>

                <ListarProdutos>
                <p className="title-dash cervejas-produtos"><Icon className="icone-cerveja-produtos" name="beer"/>Weltenburger</p>
                    
                   
                </ListarProdutos>
                
                <br/>   <br/>

     </>
    )
}

export default Produtos