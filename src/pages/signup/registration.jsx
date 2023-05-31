import React from 'react';
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { registerUserAction, loginUserAction } from '../../store/actions/userAction'

export const Registration = () => {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')
  const [isRegistered, setIsRegistered] = useState(true)

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault()
    if (isRegistered) {
      dispatch(loginUserAction(username, password))  
    } else {
      dispatch(registerUserAction(username, password))
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button type="submit">{isRegistered ? 'Login' : 'Register'}</button>
      <button type="button" onClick={() => setIsRegistered(!isRegistered)}>
        {isRegistered ? 'Need to register?' : 'Already registered?'}
      </button>
    </form>
  )
}

export default Registration;