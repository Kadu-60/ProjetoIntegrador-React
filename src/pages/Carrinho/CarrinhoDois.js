import React, {useState, useEffect} from 'react'
import './CarrinhoDois.css'
import ListaCarrinho from '../../components/macro/ListaCarrinho/ListaCarrinho'



function CarrinhoDois(props){
    const [products, setProducts] = useState([])


    useEffect(() =>{
        let cartList = localStorage.getItem("cart") 
            ? JSON.parse(localStorage.getItem("cart")) 
            : []
        setProducts(cartList)
    }
    ,[])
    return(
     <>
     
     <ListaCarrinho data={products}/>
    


    

     </>
    )
}

export default CarrinhoDois








