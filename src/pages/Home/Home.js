import React from 'react'
import './Home.css'
import TitulosHome from '../../components/micro/TitulosHome/TitulosHome';
import Produto from '../../components/Produto/Produto';
import Img1 from './imgs/ipa-bottle.png'
import BuscaAvan from '../../components/macro/BuscaAvan/BuscaAvan';
import ListarProdutos from '../../components/macro/ListarProdutos/ListarProdutos';
import Carrosel from '../../components/macro/Carrosel/Carrosel';
import Banner1 from '../Home/imgs'
import Banner2 from './imgs/imgs/banner3.png'

function Home(props) {

  return (
    <>
        <main class="container">
            <Carrosel banner1={Banner1} banner2={Banner2}/>
            <TitulosHome titulo="Destaques"/>
            <ListarProdutos>
                <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29"/>
                        <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29"/>
                        <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29"/>
                        <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29"/>
                        <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29"/>
            </ListarProdutos>
            <BuscaAvan/>
            <TitulosHome titulo="Novidades"/>
            <ListarProdutos>
                <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29"/>
                        <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29"/>
                        <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29"/>
                        <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29"/>
                        <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29"/>
            </ListarProdutos>
        </main>
    </>
  );
}

export default Home;
