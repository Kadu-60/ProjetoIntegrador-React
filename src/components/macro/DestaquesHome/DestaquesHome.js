import React, { useState, useEffect }  from 'react'
import ListarProdutos from '../ListarProdutos/ListarProdutos'
import Produto from '../../Produto/Produto'
import axios from 'axios'


function DestaquesHome(props) {

    const [destaques, setDestaques] = useState([])

    useEffect(() => {
        getDestaques()
    }, [])

    const getDestaques = () => {
        axios.get(`http://localhost:8080/home/destaques`)
            .then((response) => {
                setDestaques(response.data)
                
                

            })
    }
     

    
        return destaques.map(prod => {
            const link = '/produto/' + prod.id_produto
            return (

                
                    <Produto linkProduto={link} imagem={prod.foto} descricao={prod.nome_produto} preco="5,29" >
                        <a className="/produto:id}"></a></Produto>
                

            )
        })
    
    
}

export default DestaquesHome