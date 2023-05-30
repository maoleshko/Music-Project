import { setToken } from '../slices/userSlice'
import { registerUser, loginUser } from '../api/userApi'

export const registerUserAction = (username, email, password) => async dispatch => {
  try {
    const { token } = await registerUser(username, email, password)
    dispatch(setToken(token))
  } catch (error) {
    console.log(error)
  }
}

export const loginUserAction = (email, password) => async dispatch => {
  try {
    const { token } = await loginUser(email, password)
    dispatch(setToken(token))
  } catch (error) {
    console.log(error)
  }
}