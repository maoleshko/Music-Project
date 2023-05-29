import { setToken } from '../slices/userSlice'
import { registerUser, loginUser } from '../api/userApi'

export const registerUserAction = (username, password) => async dispatch => {
  try {
    const { token } = await registerUser(username, password)
    dispatch(setToken(token))
  } catch (error) {
    console.log(error)
  }
}

export const loginUserAction = (username, password) => async dispatch => {
  try {
    const { token } = await loginUser(username, password)
    dispatch(setToken(token))
  } catch (error) {
    console.log(error)
  }
}