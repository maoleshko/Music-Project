import React from 'react';
// import s from './signup.module.css';
// import sprite from '../../img/icon/sprite.svg'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUserAction, loginUserAction } from '../../store/actions/userActions'


export const Registration = () => {
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
    <form onSubmit={handleSubmit}>
      <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">{isRegistered ? 'Войти' : 'Зарегистрироваться'}</button>
      <button type="button" onClick={() => setIsRegistered(!isRegistered)}>
        {isRegistered ? 'Зарегистрироваться' : 'Already registered?'}
      </button>
    </form>
  )
    // return (            
    //     <div className={s.register_form}>
    //     <div className={s.container}>
    //         <div className={s.logo}>
    //           <svg className={s.logo_svg} alt="logo" >
    //             <use xlinkHref={`${sprite}#logo-light`}></use>
    //           </svg> 
    //         </div>
           
    //   <form >
    //     <input className={s.login_input} type="text" id="username" placeholder='Логин' />

    //     <input className={s.login_input} type="password" id="password" placeholder='Пароль' />
    //     <input className={s.login_input} type="password" id="repeat-password" placeholder='Повторите пароль' />     
        
    //     <div className={s.btn_box}>
    //       <button className={s.btn_reg_reg} type="submit">Зарегистрироваться</button>
    //     </div>
        
    //   </form>
    //     </div>
    //   </div>

    // )
}