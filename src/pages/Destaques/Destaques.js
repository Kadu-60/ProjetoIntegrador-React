import React, { useState, useEffect } from 'react'

import ListarProdutos from '../../components/macro/ListarProdutos/ListarProdutos';

import DestaquesHome from '../../components/macro/DestaquesHome/DestaquesHome';






function Home(props) {


    return (
        <>
            <main class="container fonte-global">
            
                <br /> <br /><br />
                <p className="title-dash">Destaques</p>
                <hr />
                <ListarProdutos>
                    <DestaquesHome />
                </ListarProdutos>
                
                <br /> <br /><br />
            </main>
        </>
    );
}

export default Home;
