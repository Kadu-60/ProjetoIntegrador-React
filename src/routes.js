import React from 'react'
import { Routes, Route } from 'react-router-dom'
import StoreProvider from './components/Context/Provider'

import Login from './pages/Login/Login'
import Home from './pages/Home/Home'

export const RoutesSite = () => {
    return (
        <StoreProvider>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path="/login" element={<Login/>} />

            </Routes>
        </StoreProvider>
    )
}