import React, { useState, useEffect } from 'react'
import ListarProdutos from '../../components/macro/ListarProdutos/ListarProdutos'
import BotaoPags from '../../components/micro/BotaoPags/BotaoPags'
import './Catalogo.css'
import { useHistory } from "react-router-dom"
import axios from 'axios'
import ProdutosBusca from '../../components/macro/BuscaParam/ProdutosBusca'


const initialValue = {
    marca: -1,
    familia: -1,
    categoria: -1,
    prato: -1
}

function Catalogo(props) {

    const [produtos, setProdutos] = useState([])
    const [loading, setLoading] = useState(false)
    const [paginaAtual, setPaginaAtual] = useState(1)
    const [prodsPorPagina, setProdsPorPagina] = useState(15)
    const final = 'http://localhost:8080/Card/todosProdutos'
    const [ busca, setBusca] = useState('')



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
                <div class="row pt-5 caixaTitulo">
                    <div class="col-10  d-flex flex-column justify-content-start">
                    <p className="title-dash dest-produt">Produtos </p>

                    </div>

                </div>
                <br/> <br/>

                <div id="checkboxes" className="col-2">
                
                <ul>
                    <p><b>Marcas</b></p>
                    <li><input type="checkbox" /> Baden</li>
                    <li><input type="checkbox" /> Colorado</li>
                    <li><input type="checkbox" /> Hoegaarden</li>
                    <li><input type="checkbox" /> Patagonia</li>
                    <li><input type="checkbox" /> Michelob</li>
                    <li><input type="checkbox" /> Madalena</li>
                    <li><input type="checkbox"/> Weltenburger</li>
                    <li><input type="checkbox" /> Blumenau</li>
                <br/>
                
                    <p><b>Familias</b></p>
                    <li><input type="checkbox" /> American IPA</li>
                    <li><input type="checkbox"/> Weiss</li>
                    <li><input type="checkbox"/> Pilsen</li>
                    <li><input type="checkbox"/> Bock</li>
                    <li><input type="checkbox"/> India Pale Ale</li>
                    <li><input type="checkbox"/> Witbier</li>
                    <li><input type="checkbox"/> Cristal</li>
                    <li><input type="checkbox"/> Golden</li>
                    <li><input type="checkbox"/> Pale Ale</li>
                    <li><input type="checkbox"/> Red Ale</li>
                    <li><input type="checkbox"/> Lager</li>
                    <li><input type="checkbox"/> Fruit Beer</li>
                    <br/>
                    <p><b>Pratos</b></p>
                    <li><input type="checkbox"/> Aves</li>
                    <li><input type="checkbox"/> Carnes vermelhas</li>
                    <li><input type="checkbox"/> Peixes e frutos do mar</li>
                    <li><input type="checkbox"/> Chocolate</li>
                    <li><input type="checkbox"/> Frutas vermelhas</li>
                    <li><input type="checkbox"/> Massa com molho ao sugo ou bolonhesa</li>
                    <li><input type="checkbox"/> Massa com molho bechamel ou alfredo</li>
                    <li><input type="checkbox"/> Queijos</li>
                    <li><input type="checkbox"/> Torta de limão</li>

                </ul>
                </div>
                
                <ListarProdutos>
                    <ProdutosBusca produtos={prodAtuais} loading={loading}  />
                </ListarProdutos>
                <BotaoPags prodsPorPagina={prodsPorPagina} totalProd={produtos.length} paginate={paginate} />


                <br /> <br />
            </div>

        </>


    )



}

export default Catalogo