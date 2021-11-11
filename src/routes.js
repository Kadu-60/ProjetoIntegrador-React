import React from 'react'
import { Switch, Route } from 'react-router-dom'
import StoreProvider from './components/Context/Provider'
import RoutesPrivate from './components/Routes/Private/Private'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Faq from './pages/FAQ/Faq'
import Categoria from './pages/Categoria/Categoria'
import Busca from './pages/Busca/Busca'
import CadastroCliente from './pages/CadastroCliente/CadastroCliente'
import PedidoFinalizado from './pages/PedidoFinalizado/PedidoFinalizado'
import Produto from './components/Produto/Produto'


export const RoutesSite = () => {
    return (
        <StoreProvider>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path='/home' component={Home}/>
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/faq" component={Faq}/>
                <Route path="/categorias" component={Categoria}/>
                <Route path="/busca" component={Busca}/>
                <Route path="/cadastro" component={CadastroCliente}/>
                <Route path="/pedidoFinalizado" component={PedidoFinalizado}/>
                <Route path="/produto" component={Produto}/>
            </Switch>
        </StoreProvider>



    )
}