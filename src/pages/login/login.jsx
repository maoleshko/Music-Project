import React from 'react';
import s from '../../style/App.module.css';

export const Login = () => {
    return (
        <div>
            <div className={s.logo}></div>
      <form>
        
        <input type="text" id="username" placeholder='Логин:' />

        <input type="password" id="password" placeholder='Пароль:' />
        
        <h1>Страница Main и Selections доступна только зарегистрировнным пользователям</h1>

        {/* <button type="submit">Войти</button> */}
      </form>
        </div>
    )
}