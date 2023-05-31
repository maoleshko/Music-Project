import React from 'react';
import { useState } from 'react';
import { useDispatch } from 'react-redux'
import { registerUserAction, loginUserAction } from '../../store/actions/userAction'
import sprite from '../../img/icon/sprite.svg'
import s from './signup.module.css';
import { useNavigate } from "react-router-dom";

export const Login = ({setToken}) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isRegistered, setIsRegistered] = useState(true)

  const dispatch = useDispatch()

  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isRegistered) {
      dispatch(loginUserAction(email, password))
      

    } else {
      dispatch(registerUserAction(email, password))
    }
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
            <div className={s.logo}>
            <svg className={s.logo_svg} alt="logo" >
              <use xlinkHref={`${sprite}#logo-light`}></use>
            </svg> 
            </div>
           
    <form onSubmit={handleSubmit}>
      
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
        <button className={s.btn_login} type="submit">{isRegistered ? 'Войти' : 'Регистрация'}</button>
      <button className={s.btn_reg} type="button" onClick={() => setIsRegistered(!isRegistered)}>
        {isRegistered ? 'Зарегистрироваться' : 'Уже Зарегистрированы?'}
      </button>
      <button className={s.btn_sign} type="text" onClick={handleLogin}>Перейти на главную</button>
        </div>
        
    </form>
  </div>
</div>
        
    )
}