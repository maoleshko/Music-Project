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
         </ul>
       </nav>

       <button onClick={onAuthButtonClick}>
        {user ? "Sign out" : "Sign in"}
       </button>
     </div>
  );
};