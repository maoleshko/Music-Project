import axios from 'axios'

const API_URL = 'https://painassasin.online/user/token/'

export const registerUser = async (username, password) => {
  const { data } = await axios.post(API_URL + 'register', {
    username,
    password
  })
  return data
}

export const loginUser = async (username, password) => {
  const { data } = await axios.post(API_URL + 'login', {
    username,
    password
  })
  return data
}