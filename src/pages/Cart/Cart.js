import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import FormDefault from '../../components/macro/Forms/FormDefault/FormDefault';
import ProductList from '../../components/ProductList';
import 'bootstrap'

import Input from '../../components/micro/Forms/Input/Input'
import Button from '../../components/micro/Button/Button'

function Cart(props) {
    
    const [products, setProducts] = useState([])
    const [qtyCart, setQtyCart] = useState(0)

    useEffect(() => {
        setProducts(JSON.parse(localStorage.getItem("cart")))
        setQtyCart(JSON.parse(localStorage.getItem("qtyCart")))
    },[])

    return(
        <>
        <Link to='/'>Home</Link>
        <h1>Cart</h1>
        <FormDefault className="box-cart" title="Carrinho">
        <h2>{qtyCart}</h2>
        <ProductList products={products} cart setQtyCart={setQtyCart}/>
        <Button label="Voltar" navigation route="home" class="apoio"/>
            <Button label="Confirmar" onclick="login" navigation route="login" class="conversao"/>
        </FormDefault>
        </>
    )
}

export default Cart