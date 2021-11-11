import React from 'react'
import { Switch, Route } from 'react-router-dom'

import Login from './pages/Login/Login'
import Home from './pages/Home/Home'
import Categoria from './pages/Categoria/Categoria'

export const Routes = () => {
    return (

        <Switch>
            <Route path='/' component={Home} exact/>
            {/* <Route path="/login" component={Login } /> */}
            <Route path="/Categoria" component={Categoria} />
        </Switch>

    )
}