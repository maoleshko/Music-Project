import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { loginUserAction } from '../../store/actions/creators/userAction'
import sprite from '../../img/icon/sprite.svg'
import s from './signup.module.css';


export const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const dispatch = useDispatch();

  const handleLogin = () => {
    dispatch(loginUserAction(email, password))
    window.location.reload();
  };
      

const handleRegistration = () => {
  // перенаправляем на форму регистрации
  window.location.href = '/registration';
};

//      window.location.href = '/';
     

  
  return (
      <div className={s.login_form}>
         <div className={s.container}>
            <div className={s.logo}>
            <svg className={s.logo_svg} alt="logo" >
              <use xlinkHref={`${sprite}#logo-light`}></use>
            </svg> 
            </div>
           
            <form >
              
              <input 
              className={s.login_input}
              id="email" 
              type="text" 
              placeholder='Email'
              value={email} 
              onChange={(e) => setEmail(e.target.value)} 
              />
              <input 
              className={s.login_input}
              id="password"  
              placeholder='Пароль'
              type="password" 
              value={password} 
              onChange={(e) => setPassword(e.target.value)} 
              />
                <div className={s.btn_box}>
                
                  <button className={s.btn_login} type="button" onClick={handleLogin}>Войти</button>
                  <button className={s.btn_reg} type="button" onClick={handleRegistration}>Зарегистрироваться</button>             
                </div>       
            </form>
        </div>
</div>
        
    )
}

