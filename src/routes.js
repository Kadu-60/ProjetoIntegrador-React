import React from "react"
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
//import Category from './pages/Category/Category'
//import Checkout from './pages/Checkout/Checkout'
//import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import Produto from './pages/Produto/Produto'
//import Register from './pages/Register/Register'
//import Success from './pages/Success/Success'
//import NotFound from "./pages/NotFound/NotFound"
import Endereco from "./pages/Endereco/Endereco"
import CadastroCliente from "./pages/CadastroCliente/CadastroCliente"
import FormularioContato from "./pages/FormularioContato/FormularioContato"

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/home" component={Home}/>
            <Route path="/cart" component={Cart}/>
            {/* <Route path="/category" component={Category}/>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/dashboard" component={Dashboard}/> */}
            <Route path="/login" component={Login}/>
            <Route path="/produto/:id" component={Produto}/>
            <Route path="/cadastro" component={CadastroCliente}/> 
            <Route path="/endereco" component={Endereco}/>
            <Route path="/formularioContato" component={FormularioContato}/>
            {/* <Route path="/success" component={Success}/>
            <Route component={NotFound}/> */}
        </Switch>
    )
}