import React from 'react';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import sprite from '../../img/icon/sprite.svg'
import s from './signup.module.css';

export const UserLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate()
 
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  console.log(email, password)

  const onSubmit = (event) => {
    event.preventDefault(); // Отменяем стандартное поведение формы
  };

  const handleRegister = (event) => {
    event.preventDefault();
    navigate('/registration')
  }


  return (
      <div className={s.login_form}>
         
         <div className={s.container}>
            <div className={s.logo}>
            <svg className={s.logo_svg} alt="logo" >
              <use xlinkHref={`${sprite}#logo-light`}></use>
            </svg> 
            </div>
           
      <form onSubmit={onSubmit}>
        
        <input 
        className={s.login_input}
        type="text" 
        id="email" 
        placeholder='Логин'
        value={email} 
        onChange={handleEmailChange}
        />
        <input 
        className={s.login_input}
        type="password" 
        id="password" 
        placeholder='Пароль' 
        value={password} 
        onChange={handlePasswordChange}
        />
        
        <div className={s.btn_box}>
          <button className={s.btn_sign} type="text">Войти</button>
          <button className={s.btn_reg} type="text" onClick={handleRegister}>Зарегистрироваться</button>
        
        </div>
        
      </form>
        </div>
      </div>
        
    )
}