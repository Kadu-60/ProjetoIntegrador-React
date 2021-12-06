import React, { useState, useEffect } from 'react'
import ListarProdutos from '../../components/macro/ListarProdutos/ListarProdutos'
import BotaoPags from '../../components/micro/BotaoPags/BotaoPags'
import './Destaques.css'

import axios from 'axios'
import ProdutosBusca from '../../components/macro/BuscaParam/ProdutosBusca'
import FiltroProdut from '../../components/micro/FiltroProdu/FiltroProdut'


function BuscaAvancadaResult(props) {


    const [produtos, setProdutos] = useState([])
    const [loading, setLoading] = useState(false)
    const [paginaAtual, setPaginaAtual] = useState(1)
    const [prodsPorPagina, setProdsPorPagina] = useState(15)
    const final = 'http://localhost:8080/Card/todosDestaques'



    useEffect(() => {
        const fetchProds = async () => {
            setLoading(true)
            const res = await axios.get(final)
            setProdutos(res.data)
            setLoading(false)
            console.log(produtos)
            console.log(props.pesq)
        }

        fetchProds()

    }, [])

    // produtos atuais
    const indexUltimoProd = paginaAtual * prodsPorPagina
    const indexPrimeioProd = indexUltimoProd - prodsPorPagina
    const prodAtuais = produtos.slice(indexPrimeioProd, indexUltimoProd)

    // mudar pagina 
    const paginate = numeroPags => setPaginaAtual(numeroPags)

        // filtro
  
        function getFiltrar(e){
            axios.get('http://localhost:8080/Card/Marca/' + e.target.value)
            .then(response => {
                setProdutos(response.data)
            }) 
    
        }



    return (


        <>
        <body>

            <div className="filtroo d-flex flex column  ">
                    <FiltroProdut function = {getFiltrar}  />

                    </div>
            <div class="container">
                <div class="row pt-5 caixaTitulo">
                    <div class="col-10  d-flex flex-column justify-content-start">
                        
                        <p className="title-dash dest-produt">Produtos em Destaques </p>

                    </div>

                </div>



                <ListarProdutos>
                    <ProdutosBusca produtos={prodAtuais} loading={loading} />
                </ListarProdutos>
                <BotaoPags prodsPorPagina={prodsPorPagina} totalProd={produtos.length} paginate={paginate} />


                <br /> <br />
            </div>
            </body>

        </>


    )



}

export default BuscaAvancadaResult