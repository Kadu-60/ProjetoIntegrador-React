import React, { useState, useEffect } from 'react'
import './Dashboard.css'
import { useParams } from "react-router-dom";
import axios from 'axios'

import MenuCentral from '../../components/macro/MenuCentral/MenuCentral'
import TituloDash from '../../components/micro/Titulo/TituloDash'



function Dashboard(props) {
    let { id } = useParams();
    const [user, setUser] = useState({})
    const token = localStorage.getItem('token')
    const config = {
        headers: { Authorization: `Bearer ${token}` }
    };
    useEffect(() => {
        axios.get("http://localhost:8080/cadastro-cliente/" + id, config)
            .then(response => {
                setUser(response.data)
            })
    })

    return (
        <>
            <div className="container">
                <TituloDash nome={user.nome} />
                <MenuCentral />
                <br/>
                <br/>
            </div>
        </>
    )
}

export default Dashboard