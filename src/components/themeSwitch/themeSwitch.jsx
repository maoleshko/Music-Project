import React from 'react'
import s from './themeSwitch.module.css'
import sprite from '../../img/icon/sprite.svg'


const ThemeSwitch = ({ value, onChange }) => {
  const icon = value ? "dark" : "light"; // определяем иконку в зависимости от значения value

  return (
    <div>
        <div className={s.logo}>
            <svg className={s.logo_svg} alt="logo" >
              <use xlinkHref={`${sprite}#logo-${icon}`}></use>
            </svg> 
            </div>

            <div className={s.btn_theme_svg}>
            <svg 
              className={s.btn_theme_svg}
                alt="theme"
                onClick={onChange}
              >
                <use xlinkHref={`${sprite}#theme-${icon}`} />
              </svg>
            </div>


    </div>
    
  );
};

export default ThemeSwitch