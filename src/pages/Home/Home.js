import React from 'react'
import './Home.css'
import TitulosHome from '../../components/micro/TitulosHome/TitulosHome';
import Produto from '../../components/Produto/Produto';
import Img1 from './imgs/ipa-bottle.png'
import BuscaAvan from '../../components/macro/BuscaAvan/BuscaAvan';
import ListarProdutos from '../../components/macro/ListarProdutos/ListarProdutos';
import Carrosel from '../../components/macro/Carrosel/Carrosel';
import Banner1 from './imgs/imgs/banner2.png'
import Banner2 from './imgs/imgs/banner3.png'
import Madalena from './imgs/imgs/madalena.jpg'

function Home(props) {

    return (
        <>
            <main class="container fonte-global">
            <br/>
                <Carrosel className="banner" banner1={Banner1} banner2={Banner2} />
                {/* <TitulosHome titulo="Destaques" /> */}
                <br/> <br/> <br/>
                <p className="title-dash">Novidades</p>
                <hr/>
                <ListarProdutos>
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                </ListarProdutos>
                <br/>
                <hr/>
                <div className="buscarAvn"><BuscaAvan /> <img className="imagem-busca" src={Madalena}/>
                </div>
                {/* <TitulosHome titulo="Novidades" /> */}
                <br/> <br/><br/>
                <p className="title-dash">Destaques</p>
                <hr/>
                <ListarProdutos>
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                </ListarProdutos>
                {/* <TitulosHome titulo="Promoções" /> */}
                <br/> <br/><br/>
                <p className="title-dash">Promoções</p>
                <hr/>
                <ListarProdutos>
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" />
                </ListarProdutos>
                <br/> <br/><br/>
                </main>
        </>
    );
}

export default Home;
