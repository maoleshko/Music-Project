import { NavLink } from "react-router-dom";
import cn from "classnames";
import React from 'react';


export const NavBar = ({ user, onAuthButtonClick }) => {
  const activeClassName = "underline";

  return (
    <div>
       <nav>
         <ul className="NavBar__list">

         <li>
             
             <NavLink
              to="/"
              className={({ isActive }) =>
                cn("App-link", {
                  [activeClassName]: isActive,
                })
              }
            >
              Main
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
              Login
             </NavLink>
           </li>

           <li>
             
             <NavLink
              to="/registration"
              className={({ isActive }) =>
                cn("App-link", {
                  [activeClassName]: isActive,
                })
              }
            >
              Registration
             </NavLink>
           </li>

           <li>
             
             <NavLink
              to="/selections"
              className={({ isActive }) =>
                cn("App-link", {
                  [activeClassName]: isActive,
                })
              }
            >
              Selections
             </NavLink>
           </li>


           

         </ul>
       </nav>

       <button onClick={onAuthButtonClick}>
        {user ? "Выйти" : "Войти"}
       </button>
     </div>
  );
};