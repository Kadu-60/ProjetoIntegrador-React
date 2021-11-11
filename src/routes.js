import React from 'react'
import { Switch, Route } from 'react-router-dom'
import StoreProvider from './components/Context/Provider'
import RoutesPrivate from './components/Routes/Private/Private'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Dashboard from './pages/Dashboard/Dashboard'
import Faq from './pages/FAQ/Faq'

export const RoutesSite = () => {
    return (
        <StoreProvider>
            <Switch>
                <Route path='/' component={Home} exact/>
                <Route path="/login" component={Login} />
                <Route path="/dashboard" component={Dashboard}/>
                <Route path="/faq" component={Faq}/>
            </Switch>
        </StoreProvider>



    )
}