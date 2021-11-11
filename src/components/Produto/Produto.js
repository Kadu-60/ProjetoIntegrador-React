import React from 'react'
import './Produto.css'
<<<<<<< HEAD
import BotaoComprar from '../micro/BotaoConfirmar/BotaoConfirmar';
import BotaoConfirmar from '../micro/BotaoConfirmar/BotaoConfirmar';
=======
import BotaoConfirmar from '../micro/BotaoConfirmar/BotaoConfirmar'
>>>>>>> 4cf7ec38610d3c6438c7286fa41b3ff7a0583af7


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
                                <p >{props.descricao}</p>
                            </div>
                            
                            <p class="preco mt-1">R${props.preco}</p>
                            <div class="col-12 d-flex justify-content-center">
                                <BotaoConfirmar texto='Comprar'/>
                       
                            </div>
                        </div>
                    </div>
    </>
  );
}

export default Produto;
