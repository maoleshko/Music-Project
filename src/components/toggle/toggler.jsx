import React from 'react'
import s from './toggler.module.css'
import sprite from '../../img/icon/sprite.svg'

const Toggle = ({ value, onChange }) => (
  <div className={s.switch_theme}>
    <label className={s.switch} htmlFor="toggler">
    <input
      id="toggler"
      type="checkbox"
      onClick={onChange}
      checked={value}
      readOnly
    />

  </label>

    <div className={s.btn_theme_svg}>
  <svg className={s.btn_theme_svg} alt="theme">
    <use xlinkHref={`${sprite}#theme-dark`}></use>
  </svg>
  <svg className={s.btn_theme_svg} alt="theme">
    <use xlinkHref={`${sprite}#theme-light`}></use>
  </svg>
</div>




  </div>
 
  
)

export default Toggle