import { setToken } from '../../slices/userSlice'
import axios from 'axios';

export const getTokenAction = (email, password) => async dispatch => {
  try {
    const response = await axios.post('https://painassasin.online/user/token/', {
      email,
      password
    });
    const token = response.data.refresh;
    dispatch(setToken(token));
    localStorage.setItem('refresh_token', token);
    
  } catch (error) {
    console.log(error);
  }
}