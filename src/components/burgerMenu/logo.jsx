import React from 'react';
import s from './menu.module.css';
import sprite from '../../img/icon/sprite.svg'

function Logo() {

    const icon = document.documentElement.dataset.theme;
    
  return (
    <div className={s.logo}>
    <svg className={s.logo_svg} alt="logo" >
    <use xlinkHref={`${sprite}#logo-${icon}`}></use>
    </svg> 
</div>
    
    )
}

export default Logo;