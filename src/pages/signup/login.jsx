import React from 'react';
import s from './signup.module.css';

export const Login = () => {
  const taketoken  = () => {
    // Создаем токен
    const token = "any_token_value";

    // Устанавливаем куки с токеном
    document.cookie = `token=${token}`;

    // Перенаправляем пользователя на главную страницу
    window.location.href = "/";
  }
    return (
      <div>
         
         <div className={s.container}>
            <div className={s.logo}></div>
           
      <form >
        
        <input type="text" id="username" placeholder='Логин' />
        <input type="password" id="password" placeholder='Пароль' />
        
        <div className={s.btn_box}>
          <button className={s.btn_sign} type="submit" onClick={taketoken}>Войти</button>
          <button className={s.btn_reg} type="submit">Зарегистрироваться</button>
        </div>
        
      </form>
        </div>
      </div>
        
    )
}