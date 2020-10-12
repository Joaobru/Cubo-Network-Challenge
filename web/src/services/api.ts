import axios from 'axios';

const api = axios.create({
  baseURL: 'https://cubo-network.herokuapp.com/',
});

export default api;