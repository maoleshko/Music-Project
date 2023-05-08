import React from 'react';
import {Routes, Route} from "react-router-dom"
import {Login} from './pages/login/login'
import {Registration} from './pages/registration/registration'
import {Mytrack} from './pages/mytrack/mytracks'
import {Selections} from './pages/selections/selections'
import {NotFound} from './pages/not-found/notfound'
import { Profile } from './components/userList/profile';
import { Account } from './pages/account';
import { ProtectedRoute } from './components/protected-route';
import { Main } from './pages/main/main';


export const AppRoutes = ({ user }) => {
    return (
        <Routes>
            
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            

            <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
                <Route path="/" element={<Main />} />
                <Route path="/account" element={<Account />} />
                <Route path="/mytrack" element={<Mytrack />} />
                <Route path="/selections" element={<Selections />} />
                <Route path="/profile/:id" element={<Profile/>} />
        
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}