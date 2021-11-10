import React, { useState, useEffect } from 'react'
import './Produto.css'
import BotaoConfirmar from '../../components/micro/BotaoConfirmar/BotaoConfirmar';
import BotaoQtd from '../../components/micro/BotaoQtd/BotaoQtd';
import Acordeon from '../../components/macro/Acordeon/Acordeon';
import axios from 'axios'

function Produto() {
    const [produto, setProduto] = useState([])
    const [familia, setFamilia] = useState([])
    const [estilo, setEstilo] = useState([])
    const [harmonizacao, setHarmonizacao] = useState([])

    useEffect(() => {
        getProduto()
    }, [])

    const getProduto = () => {
        axios.get(`http://localhost:8080/produtos/3`)
            .then((response) => {
                setProduto(response.data)
                setFamilia(response.data.familia)
                setEstilo(response.data.categoria)    
                setHarmonizacao(response.data.prato)
                
                

            })
    }
    
    


    
        



            return (
                <>
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
                                        <h4>{produto.nome_produto}</h4>
                                    </div>
                                    <div class="col-12 mt-3 align-self-center">
                                        <div class="preco-produto">
                                            <div class="preco-por">
                                                <h5>Por R${produto.preco}</h5>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-12 d-flex justify-content-center">
                                        <BotaoQtd />
                                    </div>
                                    <div class="col-12 col-lg-8 d-flex mt-4 justify-content-center">
                                        <div class="col-12 d-flex justify-content-center">
                                            <BotaoConfirmar texto='Comprar' />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mb-5">
                            <Acordeon  harmonizacao={harmonizacao.descricao} estilo={estilo.nome} familia={familia.descricao} descricaoProd={produto.descricao} ibu={produto.ibu} cor={produto.cor} teor={produto.teor}/>
                   
                        </div>
                    </div>
                </>

            )
        
    

    
}

export default Produto;

