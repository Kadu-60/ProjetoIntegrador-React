import React from "react"
import { Switch, Route } from 'react-router-dom'

import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import Category from './pages/Category/Category'
import Checkout from './pages/Checkout/Checkout'
import Dashboard from './pages/Dashboard/Dashboard'
import Login from './pages/Login/Login'
import Product from './pages/Product/Product'
import Register from './pages/Register/Register'
import Success from './pages/Success/Success'
import NotFound from "./pages/NotFound/NotFound"
import Endereco from "./pages/Endereco/Endereco"

export const Routes = () => {
    return (
        <Switch>
            <Route path="/" component={Home} exact/>
            <Route path="/home" component={Home}/>
            <Route path="/cart" component={Cart}/>
            <Route path="/category" component={Category}/>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/dashboard" component={Dashboard}/>
            <Route path="/login" component={Login}/>
            <Route path="/product/:id" component={Product}/>
            <Route path="/register" component={Register}/>
            <Route path="/endereco" component={Endereco}/>
            <Route path="/success" component={Success}/>
            <Route component={NotFound}/>
        </Switch>
    )
}