import { NavLink } from "react-router-dom";
import cn from "classnames";
import React from 'react';
import s from './navbar.module.css'

export const NavBar = () => {
  const activeClassName = "underline";

  return (
    <div>
       <nav>
         <ul className={s.NavBar_list}>

         <li>
             
             <NavLink
              to="/"
              className={({ isActive }) =>
                cn("App-link", {
                  [activeClassName]: isActive,
                })
              }
            >
              Главная
             </NavLink>
           </li>

           <li>
             
             <NavLink
              to="/favorites"
              className={({ isActive }) =>
                cn("App-link", {
                  [activeClassName]: isActive,
                })
              }
            >
              Мои треки
             </NavLink>
           </li>

           <li>
             
             <NavLink
              to="/login"
              className={({ isActive }) =>
                cn("App-link", {
                  [activeClassName]: isActive,
                })
              }
            >
              Войти
             </NavLink>
           </li>


          


           

         </ul>
       </nav>
     </div>
  );
};