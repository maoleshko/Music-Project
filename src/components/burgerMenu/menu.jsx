import React from "react";
import s from './menu.module.css';

const Menu = ({item, active, setActive}) => {
    
    return (
        <div className={`${s.menu} ${active ? s.active : ''}`} onClick={() => setActive(false)}>
            <div className={s.nav__menu}>
                <ul className={s.menu__list}>
                    { 
                    item.map((item) => 
                        <li className={s.menu__item} key={item.id}>
                            <a href={item.href}>{item.value}</a>
                        </li>

                        
                    )}
                </ul>
            </div>
        </div>
    )
}

export default Menu;
