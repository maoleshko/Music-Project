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
              to="/account"
              className={({ isActive }) =>
                cn("App-link", {
                  [activeClassName]: isActive,
                })
              }
            >
              Account
             </NavLink>
           </li>

           <li>
             
             <NavLink
              to="/mytrack"
              className={({ isActive }) =>
                cn("App-link", {
                  [activeClassName]: isActive,
                })
              }
            >
              My track
             </NavLink>
           </li>

           <li>
             
             <NavLink
              to="/collections"
              className={({ isActive }) =>
                cn("App-link", {
                  [activeClassName]: isActive,
                })
              }
            >
              Collections
             </NavLink>
           </li>


           

         </ul>
       </nav>

       <button onClick={onAuthButtonClick}>
        {user ? "Sign out" : "Sign in"}
       </button>
     </div>
  );
};