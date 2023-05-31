import React from 'react';
import { useSelector } from 'react-redux'

const Profile = () => {
  const token = useSelector((state) => state.user.token)


  return (
    <div>
      <h2>Profile</h2>
      <p>Token: {token}</p>
    </div>
  )
}

export default  Profile;