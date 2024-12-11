// utils/request.js
import axios from 'axios';

const service = axios.create({
  baseURL: import.meta.env.VITE_APP_BASE_API || 'http://localhost:8001', // Mock API or real backend URL
  timeout: 10000, // Request timeout
});

// Request interceptor
service.interceptors.request.use(
  (config) => {
    // Add headers or token here if needed
    return config;
  },
  (error) => {
    console.error(error);
    return Promise.reject(error);
  }
);

// Response interceptor
service.interceptors.response.use(
  (response) => {
    const res = response.data;
    if (res.code !== 200) {
      console.error('Error:', res.message || 'Error');
      return Promise.reject(new Error(res.message || 'Error'));
    }
    return res;
  },
  (error) => {
    console.error('Error:', error.message);
    return Promise.reject(error);
  }
);

export default service;