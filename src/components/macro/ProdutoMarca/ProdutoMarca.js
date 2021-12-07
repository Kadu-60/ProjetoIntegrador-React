import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import Produto from '../../Produto/Produto'
import axios from 'axios'



function ProdutoMarca(props){
    const {id} = useParams()
    const [produtoMarca, setProdutoMarca] = useState([])
   
    


    useEffect(() => {
        getProdutoMarca()
    }, [])

    const getProdutoMarca = () => {
        axios.get(`http://localhost:8080/Card/Marca/${id}`)
        .then((response) => {
            setProdutoMarca(response.data)
        })
    }
    
    return produtoMarca.map(prod =>{
       const link = '/produto/' + prod.id_produto

       return (
        <Produto id={prod.id_produto} linkProduto={link} imagem={prod.foto} descricao={prod.nome_produto} preco={(+prod.valor_preco).toFixed(2).toString().replace('.', ',')}>
            <a className="/produto:id}"></a>
        </Produto>
       )
    
})
}

export default ProdutoMarca