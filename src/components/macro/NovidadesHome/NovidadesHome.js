import React, { useState, useEffect }  from 'react'
import ListarProdutos from '../ListarProdutos/ListarProdutos'
import Produto from '../../Produto/Produto'
import axios from 'axios'


function NovidadesHome(props) {

    const [novidades, setNovidades] = useState([])

    useEffect(() => {
        getNovidades()
    }, [])

    const getNovidades = () => {
        axios.get(`http://localhost:8080/home/novidades`)
            .then((response) => {
                setNovidades(response.data)
                console.log(novidades)
                
                

            })
    }
     

    
        return novidades.map(prod => {
            return (

                
                    <Produto linkProduto="" imagem={prod.foto} descricao={prod.nome_produto} preco="5,29" >
                        <a className="/produto:id}"></a></Produto>
                

            )
        })
    
    
}

export default NovidadesHome