import React from 'react'
import { Switch, Route } from 'react-router-dom'
import StoreProvider from './components/Context/Provider'
import RoutesPrivate from './components/Routes/Private/Private'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Faq from './pages/FAQ/Faq'
// import Categoria from './pages/Marca/Marca'
import Busca from './pages/Busca/Busca'
import BuscaAvancada from './pages/Busca/BuscaAvancada'
import CadastroCliente from './pages/CadastroCliente/CadastroCliente2'
import PedidoFinalizado from './pages/PedidoFinalizado/PedidoFinalizado'
import Produto from './pages/Produto/Produto'
// import Cart from './pages/Cart/Cart'
import Checkout from './pages/Checkout/Checkout'
import Endereco from "./pages/Endereco/Endereco"
import HomePop from './pages/Home/Home-pop'
import Produtos from './pages/Produtos/Produtos'
import CarrinhoDois from './pages/Carrinho/CarrinhoDois'
import ListarProdutos from './pages/Carrinho/ListarProdutos'
import Fale from './pages/FormularioContato/FormularioContato'
import Teste from './pages/Teste'
import Marca from './pages/Marca/Marca'
import Destaques from './pages/Destaques/Destaques'
import NotFound from './pages/404/404'

import Catalogo from './pages/Catalogo/Catalogo'

export const RoutesSite = () => {
    return (
        <StoreProvider>
            <Switch>
                <Route path='/' component={HomePop} exact />
                <Route path='/home' component={Home} />
                <Route path="/login" component={Login} />
                <Route path="/dashboard/:id" component={Dashboard} />
                <Route path="/faq" component={Faq} />
                <Route path="/contato" component={Fale} />
                <Route path="/marcas/" component={Marca} />
                <Route path="/busca/:pesq" component={Busca} exact/>
                <Route path="/buscaAvancada/:pesq1/:pesq2/:pesq3/:pesq4" component={BuscaAvancada} exact/>
                <Route path="/cadastro" component={CadastroCliente} />
                <Route path="/pedidoFinalizado/:pesq" component={PedidoFinalizado} />
                <Route path="/produto/:pesq" component={Produto} />
                <Route path="/cart" component={CarrinhoDois} />
                <Route path="/checkout" component={Checkout} />
                <Route path="/endereco" component={Endereco} />
                <Route path="/produtos/:id" component={Produtos} />
                <Route path="/carrinho" component={CarrinhoDois} />
                <Route path="/listarprodutos" component={ListarProdutos} />
                <Route path="/destaques" component={Destaques} />
                <Route path="/catalogo" component={Catalogo} />
                <Route path="/teste/:id" component={Teste} />
                <Route component={NotFound} />
            </Switch>
        </StoreProvider>
    )
}