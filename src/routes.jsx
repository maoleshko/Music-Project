import React from 'react';
import {Routes, Route} from "react-router-dom"
import {Home} from './pages/home/home'
import {Login} from './pages/login/login'
import {Registration} from './pages/registration/registration'
import {Mytrack} from './pages/mytrack/mytracks'
import {Collections} from './pages/collections/collections'
import {NotFound} from './pages/not-found/notfound'
import { Profile } from './components/userList/profile';
import { Account } from './pages/account';
import { ProtectedRoute } from './components/protected-route';


export const AppRoutes = ({ user }) => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/registration" element={<Registration />} />
            

            <Route element={<ProtectedRoute isAllowed={Boolean(user)} />}>
                <Route path="/account" element={<Account />} />
                <Route path="/mytrack" element={<Mytrack />} />
                <Route path="/collections" element={<Collections />} />
                <Route path="/profile/:id" element={<Profile/>} />
        
            </Route>

            <Route path="*" element={<NotFound />} />
        </Routes>
    )
}