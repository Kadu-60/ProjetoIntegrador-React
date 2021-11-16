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
        setProducts(JSON.parse(localStorage.getItem("cart"))||[])
        setQtyCart(JSON.parse(localStorage.getItem("qtyCart"))||[])
    }, [])

    return (
        <>
            <br/>
            <Container>
                <FormDefault className="title-endereco" title="">
                <p className="title-dash">Carrinho</p>
                    <h5>Quantidade de produtos: {qtyCart}</h5>
                    <br/>
                    <ProductList label="Produtos" products={products} cart />
                    <hr/>
                    <h6>Valor total: R$ </h6>
                    <Button label="Ir para pagamento" navigation route="checkout" class="conversao" ><a href="/checkout"></a> </Button>
                    <Button label="Voltar" navigation route="listaproduto" class="apoio" />
                </FormDefault>

                
            </Container>
            <br/>
        </>
    )
}

export default Carrinho