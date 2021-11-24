import React, { useState, useEffect } from 'react'
import axios from 'axios';

function ItemMeuPedido(props) {
    const [preco, setPrice] = useState(0)
    const item = props.data;

    useEffect(() => {
        getLastPrice(item.produto.id_produto)
    },[])

    function getLastPrice(id_prod){
        const token = localStorage.getItem('token')
        const config = {
            headers: { Authorization: `Bearer ${token}` }
        };
        axios.get("http://localhost:8080/preco/"+id_prod, config)
        .then((response)=>{
            setPrice(response.data.valor_preco)
        })
    }

    
    return (
        <>
            <tbody>
                {" "}
                <tr className="items">
                    {" "}
                    <td className="product-image" rowSpan={1}>
                        {" "}
                        <img src={item.produto.foto} width="120px" />
                    </td>{" "}
                    <td className="product">
                        {" "}
                        <b
                            className="product-name"
                            title="Cerveja Madalena IPA 473ml "
                            alt="Cerveja Madalena IPA 473ml">
                            {item.produto.nome_produto}

                        </b>{" "}
                        <br /> <span className="skuoptions"> </span>{" "}
                    </td>{" "}
                    <td className="quantity">{item.quantidade_produto}</td>{" "}
                    <td className="price">
                        {" "}
                        {"R$ "+preco.toFixed(2)}{" "}
                    </td>{" "}
                    <td className="item-subtotal">
                        {" "}
                        R$ {(preco*item.quantidade_produto).toFixed(2)}{" "}
                    </td>{" "}
                </tr>{" "}
            </tbody>{" "}
        </>
    );
}

export default ItemMeuPedido;