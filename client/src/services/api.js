import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',
});

// TODO: Implement API calls
// Example: export const getUsers = () => api.get('/users');

export default api;
