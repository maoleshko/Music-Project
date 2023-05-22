import React from 'react'
import s from './themeSwitch.module.css'
import sprite from '../../img/icon/sprite.svg'


const ThemeSwitch = ({ value, onChange }) => {
  const icon = value ? "dark" : "light"; // определяем иконку в зависимости от значения value

  return (
    <svg 
    className={s.btn_theme_svg}
      alt="theme"
      onClick={onChange}
    >
      <use xlinkHref={`${sprite}#theme-${icon}`} />
    </svg>
  );
};

export default ThemeSwitch