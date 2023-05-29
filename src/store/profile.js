import React from 'react';
import { useSelector } from 'react-redux'

const Profile = () => {
  const token = useSelector((state) => state.user.token)
  console.log(token)

  return (
    <div>
      <h1>Profile</h1>
      <p>Token: {token}</p>
    </div>
  )
}

export default  Profile;