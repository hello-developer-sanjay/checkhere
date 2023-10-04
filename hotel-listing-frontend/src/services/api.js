import axios from 'axios';

const baseURL = 'https://rentme-8yha.onrender.com/api'; 

const api = axios.create({
  baseURL: baseURL,
});

export default api;
