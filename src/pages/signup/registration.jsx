import React from 'react';
import s from './signup.module.css';

export const Registration = () => {
    return (            
        <div className={s.register_form}>
        <div className={s.container}>
            <div className={s.logo}></div>
           
      <form >
        <input type="text" id="username" placeholder='Логин' />

        <input type="password" id="password" placeholder='Пароль' />
        <input type="password" id="repeat-password" placeholder='Повторите пароль' />     
        
        <div className={s.btn_box}>
          <button className={s.btn_reg_reg} type="submit">Зарегистрироваться</button>
        </div>
        
      </form>
        </div>
      </div>

    )
}