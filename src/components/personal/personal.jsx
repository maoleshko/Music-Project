import React from 'react';
import s from './personal.module.css';
import sprite from '../../img/icon/sprite.svg'
import { NavLink } from 'react-router-dom';


function Personal() {


  return (
    <div className={s.personal}>
      <NavLink className={s.btn_login} to="/profile">Профиль</NavLink>
      <div className={s.avatar}/>
      <svg className={s.icon_svg} alt="icon-exit" >
          <use xlinkHref={`${sprite}#icon-exit`}></use>
      </svg> 
  </div>
    
    )
}

export default Personal;