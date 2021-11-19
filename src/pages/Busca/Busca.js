import React,{useEffect, useState} from "react"
import './Busca.css'
import ListarProdutos from '../../components/macro/ListarProdutos/ListarProdutos';
import Produto from '../../components/Produto/Produto';
import Img1 from '../Home/imgs/ipa-bottle.png'
import BotaoPags from '../../components/micro/BotaoPags/BotaoPags';
import axios from "axios"
import { useParams } from "react-router-dom"
import BuscaParam from "../../components/macro/BuscaParam/BuscaParam";

function Busca(props) {

  const params = useParams(":pesq")

  const pesq = params.pesq
  const URL = 'http://localhost:8080/produtos/buscar/'
  const final = URL+ params.pesq
  


  
   

  return (
    <>
        
        
            
              <BuscaParam pesq={pesq}/>  
            
          
          
    </>
  );
}

export default Busca;
