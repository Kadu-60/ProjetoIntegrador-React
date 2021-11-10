// import React from 'react'
// import './Home.css'
// import Banners from '../../components/macro/Banners/Banner'

// function Home(props) {

//     return(
//         <>
//         <div>Home</div>
//         <Banners/>
//         </>
//     )
// }

// export default Home

import React,{ useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import ProductList from '../../components/ProductList'
import Produto from '../../components/Produto/Produto'
//import Img1 from './imgs/ipa-bottle.png'
import BuscaAvan from '../../components/macro/BuscaAvan/BuscaAvan'
import ListarProdutos from '../../components/macro/ListarProdutos/ListarProdutos'
import Carrosel from '../../components/macro/Carrosel/Carrosel'
import TitulosHome from '../../components/micro/TitulosHome/TitulosHome'
// import Banner1 from './imgs/imgs/banner2.png'
// import Banner2 from './imgs/imgs/banner3.png'

function Home(props) {


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
        <h1>Home</h1>

        <h2>{qtyCart}</h2>
        <ProductList products={products} setQtyCart={setQtyCart}/>
        <Link to='/cart'>Ver Carrinho</Link>
        </>
    )
}

export default Home