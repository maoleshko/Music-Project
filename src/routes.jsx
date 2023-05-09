import React from 'react';
import {Routes, Route} from "react-router-dom"
import {Login} from './pages/signup/login'
import {Registration} from './pages/signup/registration'
import {Selections} from './pages/selections/selections'
import {NotFound} from './pages/not-found/notfound'
import { ProtectedRoute } from './components/protected-route';
import { Main } from './pages/main/main';


export const AppRoutes = ({ user }) => {
    return (
        <Routes>
            
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            

            <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
                <Route path="/" element={<Main />} />
                <Route path="/selections" element={<Selections />} />
    
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}