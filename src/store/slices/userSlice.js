import { createSlice } from '@reduxjs/toolkit'

const userSlice = createSlice({
  name: 'user',
  initialState: {
    token: '',
    isAuth: false
  },
  reducers: {
    setToken: (state, action) => {
      state.token = action.payload
      state.isAuth = true
    },
    removeToken: (state) => {
      state.token = ''
      state.isAuth = false
    }
  }
})

export const { setToken, removeToken } = userSlice.actions
export default userSlice.reducer