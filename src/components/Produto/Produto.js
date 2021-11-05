import React from 'react'
import './Produto.css'
import BotaoComprar from '../micro/BotaoComprar/BotaoComprar';


function Produto(props) {

  return (
    <>
        <div class="col-12 col-lg-2 my-2 mx-3 resultadoPesquisa">
                        <div class="imgCard d-flex justify-content-center">
                          <a class="imgPesquisa" href={props.linkProduto}>
                              <img class="imgPesquisa" src={props.imagem}alt=""/>
                          </a>
                        </div>
                        
                        <div class="descricao">
                            <div class="col-12 d-flex justify-content-center">
                                <p>{props.descricao}</p>
                            </div>
                            
                            <p class="preco">R${props.preco}</p>
                            <div class="col-12 d-flex justify-content-center">
                                <BotaoComprar/>
                       
                            </div>
                        </div>
                    </div>
    </>
  );
}

export default Produto;
