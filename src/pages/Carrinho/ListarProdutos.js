import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ProductList from './ProductList'

function ListarProdutos(props) {


    const [products, setProducts] = useState([])
    const [qtyCart, setQtyCart] = useState(0)

    useEffect(() => {
        getProducts()
        setQtyCart(JSON.parse(localStorage.getItem('qtyCart')))
    }, [])

    const getProducts = () => {
        axios.get('http://localhost:3001/produtos').then((response) => {
            setProducts(response.data)
        })
    }

    return(
        <>
        <h1>Lista de Produtos</h1>
        <h2>{qtyCart}</h2>
        <ProductList products={products} setQtyCart={setQtyCart}/>
        <Link to='/carrinho'>Ver Carrinho</Link>
        </>
    )
}

export default ListarProdutos