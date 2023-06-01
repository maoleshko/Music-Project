import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  username: '',
  id: '',
  token: null,
  isAuth: false
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
      state.isAuth = true
    },
    userLogin: (state, action) => {
      state.username = action.payload
      state.id = action.payload
    },
    userLogout: (state) => {
      state.token = null
      state.isAuth = false
    }
  }
})

export const { setToken ,userLogin, userLogout } = userSlice.actions
export default userSlice.reducer