import React from 'react';
import s from './menu.module.css';
import { NavBar } from '../navbar/navbar';

// const Menu = ({item, active, setActive}) => {

    const Menu = ({active, setActive}) => {
    
    return (
        
        <div className={`${s.menu} ${active ? s.active : ''}`} onClick={() => setActive(false)}>
            <div className={s.nav__menu}>
                <ul className={s.menu__list}>
                <NavBar/>
                    {/* { 
                    item.map((item) => 
                        <li className={s.menu__item} key={item.id}>
                            <a href={item.href}>{item.value}</a>
                        </li>
                    )} */}
                </ul>
            </div>
        </div>
    )
}

export default Menu;
