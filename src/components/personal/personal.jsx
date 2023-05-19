import React from 'react';
import s from './personal.module.css';
import sprite from '../../img/icon/sprite.svg'


function Personal() {
  return (
    <div className={s.personal}>
      <p className={s.personal_name}>Sergey.Ivanov</p>
      <div className={s.avatar}/>
      <svg className={s.icon_svg} alt="dark-exit" >
          <use xlinkHref={`${sprite}#dark-exit`}></use>
      </svg> 
  </div>
    
    )
}

export default Personal;