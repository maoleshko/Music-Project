import React from 'react';
import s from './signup.module.css';
import sprite from '../../img/icon/sprite.svg'

export const Registration = () => {
    return (            
        <div className={s.register_form}>
        <div className={s.container}>
            <div className={s.logo}>
              <svg className={s.logo_svg} alt="logo" >
                <use xlinkHref={`${sprite}#logo-light`}></use>
              </svg> 
            </div>
           
      <form >
        <input className={s.login_input} type="text" id="username" placeholder='Логин' />

        <input className={s.login_input} type="password" id="password" placeholder='Пароль' />
        <input className={s.login_input} type="password" id="repeat-password" placeholder='Повторите пароль' />     
        
        <div className={s.btn_box}>
          <button className={s.btn_reg_reg} type="submit">Зарегистрироваться</button>
        </div>
        
      </form>
        </div>
      </div>

    )
}