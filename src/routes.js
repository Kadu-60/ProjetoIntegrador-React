import React from 'react'
import { Switch, Route } from 'react-router-dom'
import StoreProvider from './components/Context/Provider'
import RoutesPrivate from './components/Routes/Private/Private'
import Login from './pages/Login/Login'
import Home from './pages/Home/Home'


export const RoutesSite = () => {
    return (
        <StoreProvider>
            <Switch>
                <RoutesPrivate path='/' component={Home} exact/>
                <Route path="/login" component={Login} />
            </Switch>
        </StoreProvider>
    )
}