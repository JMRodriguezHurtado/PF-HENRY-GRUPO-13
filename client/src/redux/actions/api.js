import axios from 'axios';

const URL = 'http://localhost:3001' || 'https://master--chipper-toffee-f8c293.netlify.app'

const api = axios.create({
  baseURL: URL,
});

export default api
