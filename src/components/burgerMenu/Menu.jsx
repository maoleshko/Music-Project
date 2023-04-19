import React from "react";
import './Menu.css';

const Menu = ({header, item, active, setActive}) => {
    return (
        <div className={active ? 'menu active' : 'menu'} onClick={() => setActive(false)}>
            <div className="blur" />
            <div className="menu__content">
                <div className="menu__header">{header}</div>
                <ul>
                    { 
                    item.map((item) => 
                        <li key={item.id}>
                            <a href={item.href}>{item.value}</a>
                        </li>
                    )}
                </ul>
            </div>

        </div>
    )
}

export default Menu;