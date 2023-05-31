import React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUserAction, loginUserAction } from '../../store/actions/userAction'
import s from './signup.module.css';
import sprite from '../../img/icon/sprite.svg'

export const Registration = () => {
  const [username, setUsername] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [isRegistered, setIsRegistered] = useState(true)
  

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isRegistered) {
      dispatch(loginUserAction(email, password))  
    } else {
      dispatch(registerUserAction(email, password))
    }
  }

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
            onChange={(e) => setUsername(e.target.value)} 
            />
      
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
      <button type="button" onClick={() => setIsRegistered(!isRegistered)}>
        {isRegistered ? 'Need to register?' : 'Already registered?'}
      </button>
      <button className={s.btn_reg} type="button" >Зарегистрироваться</button>
      <button className={s.btn_sign} type="text" >Перейти на главную</button>
      </div>       
  </form>
    </div>
    </div>
    </div>
  )
}

export default Registration;
