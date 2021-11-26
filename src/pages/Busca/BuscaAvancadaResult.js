import React, { useState, useEffect } from 'react'
import ListarProdutos from '../../components/macro/ListarProdutos/ListarProdutos'
import BotaoPags from '../../components/micro/BotaoPags/BotaoPags'

import axios from 'axios'
import ProdutosBusca from '../../components/macro/BuscaParam/ProdutosBusca'


function BuscaAvancadaResult(props) {


    const [produtos, setProdutos] = useState([])
    const [loading, setLoading] = useState(false)
    const [paginaAtual, setPaginaAtual] = useState(1)
    const [prodsPorPagina, setProdsPorPagina] = useState(15)
    const URL = 'http://localhost:8080/Card/'
    const final = URL + props.pesq



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



    return (


        <>
            <div class="container">
                <div class="row pt-5">
                    <div class="col-10 d-flex justify-content-start">
                        <h4 className="pesquisa titulo-header">Resultados para sua busca</h4>
                    </div>
                </div>


                <ListarProdutos>
                    <ProdutosBusca produtos={prodAtuais} loading={loading} />
                </ListarProdutos>
                <BotaoPags prodsPorPagina={prodsPorPagina} totalProd={produtos.length} paginate={paginate} />


                <br /> <br />
            </div>

        </>


    )



}

export default BuscaAvancadaResult