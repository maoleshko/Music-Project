import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  
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
    removeToken: (state) => {
      state.token = null
      state.isAuth = false
    }
  }
})

export const { setToken, removeToken } = userSlice.actions
export default userSlice.reducer