import React from 'react';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

import s from './signup.module.css';

export const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
 

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  console.log(username, password)

  const onSubmit = (event) => {
    event.preventDefault(); // Отменяем стандартное поведение формы
  };

  const handleRegister = (event) => {
    event.preventDefault();
    Navigate('/registration')
  }


  const taketoken  = () => {
    // Создаем токен
    const token = "any_token_value";

    // Устанавливаем куки с токеном
    document.cookie = `token=${token}`;

    // Перенаправляем пользователя на главную страницу
    window.location.href = "/";
  }
    return (
      <div className={s.login_form}>
         
         <div className={s.container}>
            <div className={s.logo}></div>
           
      <form onSubmit={onSubmit}>
        
        <input 
        type="text" 
        id="username" 
        placeholder='Логин'
        value={username} 
        onChange={handleUsernameChange}
        />
        <input 
        type="password" 
        id="password" 
        placeholder='Пароль' 
        value={password} 
        onChange={handlePasswordChange}
        />
        
        <div className={s.btn_box}>
          <button className={s.btn_sign} type="text" onClick={taketoken}>Войти</button>
          <button className={s.btn_reg} type="text" onClick={handleRegister}>Зарегистрироваться</button>
        
        </div>
        
      </form>
        </div>
      </div>
        
    )
}