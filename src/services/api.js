import axios from 'axios';

// https://economia.awesomeapi.com.br/json/
// all/usd-brl

const api = axios.create({
  baseURL: 'https://economia.awesomeapi.com.br/json/'
})

export default api;
