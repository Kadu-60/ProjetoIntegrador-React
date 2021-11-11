import React, { Component } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';

import NavSub from '../../macro/NavSub/NavSub';
import NavPrincipal from '../../macro/NavPrincipal/NavPrincipal';




class Header extends Component {

 
    render(){
    return (
        <>
        <header>
          
                <NavPrincipal/>
                <NavSub/>
                

        </header>
            
        </>
    )
}
}

export default Header