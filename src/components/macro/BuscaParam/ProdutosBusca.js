import React from 'react'
import Produto from '../../Produto/Produto'

const ProdutosBusca = ({ produtos, loading }) => {
    if (loading) {
        return <h3>Carregando...</h3>
    }

    return produtos.map(prod => {
        const link = '/produto/' + prod.id_produto
        return (


            <Produto linkProduto={link} imagem={prod.foto} descricao={prod.nome_produto} preco={(+prod.valor_preco).toFixed(2).toString().replace('.', ',')} >
                <a href={link}></a></Produto>


        )
    })
}

export default ProdutosBusca
