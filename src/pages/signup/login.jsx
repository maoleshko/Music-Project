import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

import s from './signup.module.css';

export const Login = ({setToken}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()
 
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
    navigate('/registration')
  }

  function handleLogin() {

    const token = "any_token_value";
    document.cookie = `token=${token}`;

    setToken(token)  // Установка куки с токеном

     // Перенаправляем пользователя на главную страницу
     navigate('/');
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
          <button className={s.btn_sign} type="text" onClick={handleLogin}>Войти</button>
          <button className={s.btn_reg} type="text" onClick={handleRegister}>Зарегистрироваться</button>
        
        </div>
        
      </form>
        </div>
      </div>
        
    )
}