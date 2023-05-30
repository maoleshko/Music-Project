import axios from 'axios'

const API_URL = 'https://painassasin.online/user/'

export const registerUser = async (email, password) => {
  const { data } = await axios.post(API_URL + 'signup', {
    email,
    password
  })
  return data
}

export const loginUser = async (email, password) => {
  const { data } = await axios.post(API_URL + 'login', {
    email,
    password
  })
  return data
}