import React from 'react'
import './NavSub.css'
import Menu from '../../../assets/imgs/header/menu.png'


function NavSub(props){

    return(
     <>
            <body className="body-principal-nav-sub">

            <div className="row align-items-start menu-sub">

                <nav id="menu" className="navbar navbar-expand-lg navbar-light  ">
                    <div className="container-fluid">
                        <a className="navbar-brand" href="#"> </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
                            aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler"><img src={Menu} width="30px" /></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarNav">
                            <ul className="navbar-nav menu-sub">

                                <li className="nav-item sub-menu">

                                    <button className="dropbtn"><a className="nav-link " aria-current="page" href="/home"> Home</a></button>

                                </li>


                                <li className="nav-item sub-menu ">
                                  
                                    <button className="dropbtn "> 
                                        <a className="nav-link " id="navbarDarkDropdownMenuLink"  href="/marcas"> MARCAS</a>
                                       
                                      
                                    </button>
                                  
                                </li>
                                
                                <li className="nav-item sub-menu">
                                    
                                    <button className="dropbtn"> <a className="nav-link " href="/catalogo"> Produtos</a></button>

                                </li>

                           

                                <li className="nav-item sub-menu">
                                    <button className="dropbtn">  <a className="nav-link " href="/destaques"> DESTAQUES</a></button>
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