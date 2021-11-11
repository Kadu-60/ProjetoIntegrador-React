import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import FormDefault from '../../components/macro/Forms/FormDefault/FormDefault';
import ProductList from './ProductList';
import Button from '../../components/micro/Button/Button'

function Carrinho(props) {
    
    const [products, setProducts] = useState([])
    const [qtyCart, setQtyCart] = useState(0)

    useEffect(() => {
        setProducts(JSON.parse(localStorage.getItem("cart")))
        setQtyCart(JSON.parse(localStorage.getItem("qtyCart")))
    },[])

    return(
        <>
        <Container>
            <FormDefault className="title-endereco" title="Carrinho">
        <Link to='/listaproduto'>Lista</Link>
        <h4>Quantidade de produtos: {qtyCart}</h4>
        <ProductList products={products} cart/>
        <Button label="Confirmar" onclick="null" class="conversao"/>
        <Button label="Voltar" navigation route="login" class="apoio"/>
        </FormDefault>
        </Container>
        </>
        
    )
}

export default Carrinho