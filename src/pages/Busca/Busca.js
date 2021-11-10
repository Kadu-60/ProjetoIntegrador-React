import React from 'react'
import './Busca.css'
import ListarProdutos from '../../components/macro/ListarProdutos/ListarProdutos';
import Produto from '../../components/Produto/Produto';
import Img1 from '../Home/imgs/ipa-bottle.png'
import BotaoPags from '../../components/micro/BotaoPags/BotaoPags';

function Busca(props) {

  return (
    <>
        
        <div class="container">
            <div class="row pt-5">
                <div class="col-10 d-flex justify-content-start">
                    <h5 className="titulo">1-16 de 390 resultados para</h5><h5 class="pesquisa titulo">"Cerveja"</h5>
                </div>
            </div>
            <ListarProdutos>
            <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
            </ListarProdutos>
            <BotaoPags/>
        </div>
          
    </>
  );
}

export default Busca;
