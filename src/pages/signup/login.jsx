import React from 'react';
import s from './signup.module.css';
import { LoginForm } from '../../components/forms/loginForm';

export const Login = () => {

  return (
      <div className={s.login_form}>
         <div className={s.container}>         
              <LoginForm/>
        </div>
</div>
        
    )
}

