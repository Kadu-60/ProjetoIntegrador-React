import React from 'react'
import './NavSub.css'
import Menu from '../../../assets/imgs/header/menu.png'


function NavSub(props){

    return(
     <>
            <body>

            <div className="row align-items-start menu-sub">

                <nav id="menu" className="navbar navbar-expand-lg navbar-light  ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"> </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler"><img src={Menu} width="30px" /></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav menu-sub">

                                <li class="nav-item sub-menu">

                                    <button class="dropbtn"><a class="nav-link " aria-current="page" href="/home"> Home</a></button>

                                </li>


                                <li class="nav-item sub-menu ">
                                  
                                    <button class="dropbtn">  <a class="nav-link " href="/categorias"> CATEGORIA</a></button>
                                  
                                </li>
                                
                                <li class="nav-item sub-menu">
                                    
                                    <button class="dropbtn"> <a class="nav-link " href="/produtos"> Produtos</a></button>

                                </li>

                           

                                <li class="nav-item sub-menu">
                                    <button class="dropbtn">  <a class="nav-link " href="/busca"> DESTAQUES</a></button>
                                </li>

                            </ul>
                        </div>
                    </div>
                </nav>
            </div>
        </body>
     </>
    )
}

export default NavSub;