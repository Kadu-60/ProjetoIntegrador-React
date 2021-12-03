import React from 'react'
import './Home-pop.css'

import Produto from '../../components/Produto/Produto';
import Img1 from './imgs/ipa-bottle.png'
import BuscaAvan from '../../components/macro/BuscaAvan/BuscaAvan';
import ListarProdutos from '../../components/macro/ListarProdutos/ListarProdutos';
import Carrosel from '../../components/macro/Carrosel/Carrosel';
import Banner1 from './imgs/imgs/banner-1.png'
import Banner2 from './imgs/imgs/banner-2.png'
import Banner3 from './imgs/imgs/banner-3.png'
import Madalena from './imgs/imgs/madalena.jpg'
import Logo from './imgs/imgs/logo.png'

function Home(props) {

    return (
        <>
             <main class="container fonte-global">
            <br/>
                <Carrosel className="banner" banner1={Banner1} banner2={Banner2}  banner3={Banner3}  />
                {/* <TitulosHome titulo="Destaques" /> */}
                <br/> <br/> <br/>
                <p className="title-dash">Novidades</p>
                <hr/>
                <ListarProdutos>
                    <Produto linkProduto="" imagem={Img1} descricao="EISENBAHN American Ipa Puro Malte Long Neck 355ml" preco="5,29" >
                    <a className="/produto"></a></Produto>
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
                
                

      <div class="modal modal-confirm" tabindex="-1">
        <div class="modal-dialog modal-confirm-content">
          <div class="modal-content">
            <div class="modal-header">
                
                <img class="logo-popup" src={Logo} alt=""/>
          
                
            </div>
            <div class="modal-body">
              <p class="texto-18"><b> Você tem mais de 18 anos? </b></p>
              <a href="https://www.encartale.com.br/smart/modulos/produto/imagens/grande/adesivo-proibido-bebida-alcoolica-p-menores-de-18-anos_48-17.jpg"><button type="button" class="btn btn-nao" >NÃO</button></a>
              <a href="/home"><button type="button" class="btn btn-sim" data-bs-dismiss="modal"  value="Submit Button">SIM</button></a>
            </div>
            <div class="modal-footer">
              <p class="dirija"> <b>Se beber, não dirija.</b> Não compartilhe esse conteúdo com menores de 18 anos.</p>
            </div>
         
            
          </div>
        </div>
      </div>

            </main>
        </>
    );
}

export default Home;
