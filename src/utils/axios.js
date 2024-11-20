import axios from 'axios';
// config

// const BASE_URL = 'http://localhost:8000';
const BASE_URL = 'https://mani-my-chat-server.onrender.com/';

// ----------------------------------------------------------------------
 
const axiosInstance = axios.create({ baseURL: BASE_URL });  

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => Promise.reject((error.response && error.response.data) || 'Something went wrong')
);

export default axiosInstance;