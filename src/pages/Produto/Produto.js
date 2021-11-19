import React, { useState, useEffect } from 'react'
import './Produto.css'
import BotaoAdicionar from '../../components/micro/BotaoConfirmar/BotaoAdicionar';
import BotaoQtd from '../../components/micro/BotaoQtd/BotaoQtd';
import Acordeon from '../../components/macro/Acordeon/Acordeon';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import axios from 'axios'
import AcordeonSemantic from '../../components/macro/Acordeon/AcordeonSemantic';

function Produto(props) {
    const [produto, setProduto] = useState([])
    const [familia, setFamilia] = useState([])
    const [estilo, setEstilo] = useState([])
    const [harmonizacao, setHarmonizacao] = useState([])

    // useEffect(() => {
    //     getProduto()
    // }, [])

    // const getProduto = () => {
    //     axios.get(`http://localhost:8080/produtos/3`)
    //         .then((response) => {
    //             setProduto(response.data)
    //             setFamilia(response.data.familia)
    //             setEstilo(response.data.categoria)    
    //             setHarmonizacao(response.data.prato)
                
                

    //         })
    // }
    
    


    
        



            return (
                <>
                <br/>
<Breadcrumb className="cor-migalha">
  <Breadcrumb.Item className="migalha-pao" href="/home"> Home</Breadcrumb.Item>
  <Breadcrumb.Item href="/produtos">
   Produtos
  </Breadcrumb.Item>
  <Breadcrumb.Item active> Produto</Breadcrumb.Item>
</Breadcrumb>
                    <div key={produto.id} class="container container-produto">
                        <div class="row">
                            <div class="col-12 col-md-6">
                                <div class="img-produto">
                                    <img src="https://emporiodacerveja.vtexassets.com/arquivos/ids/180778-800-auto?v=637709575915270000&width=800&height=auto&aspect=true" alt="" srcset="" />
                                </div>
                            </div>
                            <div class="col-12 col-md-6 d-flex align-items-center">
                                <div class="row d-flex justify-content-start info-prod ">
                                <div class="col-12 nome-produto">
                                        <p>Colorado {props.marca}</p> 
                                    </div>
                                    <div class="col-12 nome-produto">
                                        <h4>Cerveja Colorado Orgânica 600ml {props.nome}</h4>
                                    </div>
                                    <div class="col-12 mt-3 align-self-center">
                                        <div class="preco-produto">
                                            <div class="preco-por">
                                             <h5><b> Por R$15,99{props.preco}</b></h5>                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 d-flex justify-content-center">
                                        <BotaoQtd inicial={1} passo={1}  />
                                    </div>
                                    <div class="col-12 col-lg-8 d-flex mt-4 justify-content-center">
                                        <div class="col-12 d-flex justify-content-center">
                                            <a href="/carrinho" id="botao-comprar-pag-produto"><BotaoAdicionar className="botao-comprar-pag-produto" id="botao-comprar-pag-produto" texto='Adicionar '/></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">

                            <AcordeonSemantic  harmonizacao={harmonizacao.descricao} estilo="Fruit Beer" familia="Puro Malte" descricaoProd="Essa é a Colorado Orgânica, uma fruit beer feita com ingredientes orgânicos, do malte ao cambuci." ibu="12" cor="Amarelo dourado" teor="4.0"/>
                        
                   
                        </div>
                    </div>
                </>

            )
        
    

    
}

export default Produto;

