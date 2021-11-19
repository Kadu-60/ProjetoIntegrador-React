
import React from "react";



function FazerLogin(props) {

    const dados = {
        email: props.email,
        password: props.password
    }
    
    const chave = axios.post('http://localhost:8080/login', dados)
        .then(res => {
            console.log('resposta')
            console.log(res)
            
        })
        .catch(err => {
            console.log('erro')
            console.log(err)
        })


    return (
        <>
           
        </>
    );
}

export default FazerLogin;
