import React from 'react';
import { useState } from 'react';
import {Routes, Route} from "react-router-dom"
import {Login} from './pages/signup/login'
import {Registration} from './pages/signup/registration'
import {NotFound} from './pages/not-found/notfound'
import { ProtectedRoute } from './components/protected-route';
import { Main } from './pages/main/main';
import {Favorites} from './pages/favorites/favorites'
import {Selections} from './pages/selections/selections'


export const AppRoutes = () => {

    const [token, setToken] = useState();

    return (
        <Routes>    
            <Route path="/login" element={<Login setToken={setToken}/> } />        
            <Route path="/registration" element={<Registration />} />
            
            
            <Route element={<ProtectedRoute isAllowed={Boolean(token)} />}>
                <Route path="/" element={<Main />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="/selections/playlist/:id" element={<Selections />} />
     
            </Route>
            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}