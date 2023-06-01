import React from 'react';
import { useState } from 'react'
import axios from 'axios';
import s from './signup.module.css';
import sprite from '../../img/icon/sprite.svg'
import { useNavigate } from "react-router-dom";

export const Registration = () => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post('https://painassasin.online/user/signup/', {
        username,
        email,
        password,
      });
      console.log(response.data);
      // перенаправление на страницу логина
      navigate("/login");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div>
       <div className={s.login_form}>
         <div className={s.container}>
            <div className={s.logo}>
            <svg className={s.logo_svg} alt="logo" >
              <use xlinkHref={`${sprite}#logo-light`}></use>
            </svg> 
            </div>
            <form onSubmit={handleSubmit}>
     
              <input 
              className={s.login_input}
              id="username" 
              type="text" 
              placeholder='Username'
              value={username} 
              onChange={(event) => setUsername(event.target.value)} 
              />
          
              <input 
              className={s.login_input}
              id="email"
              type="email" 
              placeholder='email'
              value={email} 
              onChange={(event) => setEmail(event.target.value)} 
              />
            
              <input 
              className={s.login_input}
              id="password"  
              type="password"
              placeholder='password' 
              value={password} 
              onChange={(event) => setPassword(event.target.value)} 
              />
            <div className={s.btn_box}>
              <button className={s.btn_login} type="submit">Зарегистрироваться</button>
            </div>
      
    </form>
    </div>
    </div>
    </div>
  )
}

export default Registration;



