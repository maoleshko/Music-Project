import { setToken } from '../slices/userSlice'
import { registerUser } from '../api/userApi'
import axios from 'axios';

export const registerUserAction = (email, password) => async dispatch => {
  try {
    const { token } = await registerUser(email, password)
    dispatch(setToken(token))
  } catch (error) {
    console.log(error)
  }
}

export const loginUserAction = (email, password) => async dispatch => {
  try {
    const response = await axios.post('https://painassasin.online/user/token/', {
      email,
      password
    });
    const { token } = response.data.access;
    document.cookie = `access_token=${response.data.access}`;
    document.cookie = `refresh_token=${response.data.refresh}`;
    dispatch(setToken(token));
    console.log(response.data.access)
  } catch (error) {
    console.log(error);
  }
}