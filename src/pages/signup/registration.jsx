import React from 'react';
import s from './signup.module.css';
import { RegisterForm } from '../../components/forms/register';

export const Registration = () => {

  return (
    <div>
      <div className={s.login_form}>
        <div className={s.container}>
          <RegisterForm/>
        </div>
      </div>
    </div>
  )
}

export default Registration;



