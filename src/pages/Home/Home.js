import React from 'react'
import './Home.css'
import TitulosHome from '../../components/micro/TitulosHome/TitulosHome';
import Produto from '../../components/Produto/Produto';
import Img1 from './imgs/ipa-bottle.png'
import BuscaAvan from '../../components/macro/BuscaAvan/BuscaAvan';

function Home(props) {

  return (
    <>
        <main class="container">
            <TitulosHome titulo="Destaques"/>
            <div class="row d-flex justify-content-center pt-4">
                    <div class="row d-flex listaProdutos">
                        <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29"/>
                        <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29"/>
                        <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29"/>
                        <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29"/>
                        <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29"/>
                    </div>
            </div>
            <BuscaAvan/>

        </main>
    </>
  );
}

export default Home;
