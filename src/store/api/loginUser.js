import axios from 'axios';

const loginUser = (email, password) => {
  return axios.post('https://painassasin.online/user/login/', {
    email,
    password
  });
};

export default loginUser;