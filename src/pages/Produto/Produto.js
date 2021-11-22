import React, { useState, useEffect } from 'react'
import './Produto.css'
import BotaoAdicionar from '../../components/micro/BotaoConfirmar/BotaoAdicionar';
import BotaoQtd from '../../components/micro/BotaoQtd/BotaoQtd';
import Acordeon from '../../components/macro/Acordeon/Acordeon';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import axios from 'axios'
import AcordeonSemantic from '../../components/macro/Acordeon/AcordeonSemantic';
import { useParams } from "react-router-dom"

function Produto(props) {
    const [produto, setProduto] = useState([])
    const [familia, setFamilia] = useState([])
    const [estilo, setEstilo] = useState([])
    const [harmonizacao, setHarmonizacao] = useState([])
    const [preco1, setPreco1] = useState([])
    const [teste, setTeste] = useState([])
    


    const params = useParams(":pesq")
    const pesq = params.pesq
    const URL = 'http://localhost:8080/produtos/'
    const final = URL + params.pesq

    const URLPreco = 'http://localhost:8080/preco/'
    const precoFinal = URLPreco + params.pesq

    const URLCard = 'http://localhost:8080/Card/'
    const cardFinal = URLCard + params.pesq

    useEffect(() => {
        getProduto()
    }, [])

    const getProduto = () => {
        axios.get(final)
            .then((response) => {
                setProduto(response.data)
                setFamilia(response.data.familia)
                setEstilo(response.data.categoria)
                setHarmonizacao(response.data.prato)
                console.log(response.data.familia.descricao)



            })
    }

    useEffect(() => {
        getPreco()
    }, [])

    const getPreco = () => {
        axios.get(precoFinal)
            .then((response) => {
                setPreco1((+response.data.valor_preco).toFixed(2).toString().replace('.', ','))
                

            })
    }

    useEffect(() => {
        getCard()
    }, [])


    const getCard = () => {
        axios.get(cardFinal)
            .then((response) => {
                setTeste(response.data)
                console.log(teste)
                console.log(response.data)

            })
    }















    return (
        <>
            <br />
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
                            <img src={produto.foto} alt="" srcset="" />
                        </div>
                    </div>
                    <div class="col-12 col-md-6 d-flex align-items-center">
                        <div class="row d-flex justify-content-start info-prod ">
                            <div class="col-12 nome-produto">
                                {/* <p>{produto.marca}</p> */}
                            </div>
                            <div class="col-12 nome-produto">
                                <span className="titulo-produto-nome">{produto.nome_produto}</span>
                            </div>
                            <div class="col-12 mt-3 align-self-center">
                                <div class="preco-produto">
                                    <div class="preco-por">
                                        
                                        <span className="titulo-produto-preco"><b> Por R${preco1}</b></span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 d-flex justify-content-center btn-qtd">
                                <BotaoQtd inicial={1} passo={1} />
                            </div>
                            <div class="col-12 col-lg-8 d-flex mt-4 justify-content-center">
                                <div class="col-12 d-flex justify-content-center">
                                    <a href="/carrinho" id="botao-comprar-pag-produto"><BotaoAdicionar className="botao-comprar-pag-produto" id="botao-comprar-pag-produto" texto='Adicionar ' /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mb-5">

                    <AcordeonSemantic harmonizacao={harmonizacao.descricao} estilo={estilo.nome} familia={familia.descricao} descricaoProd={produto.descricao} ibu={produto.ibu} cor={produto.cor} teor={produto.teor} />


                </div>
            </div>
        </>

    )




}

export default Produto;

