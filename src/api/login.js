// api/login.js
import request from '@/utils/request';

// Login API
export function login(data) {
  return request({
    url: '/login',
    method: 'post',
    data,
  });
}

// Logout API
export function logout() {
  return request({
    url: '/logout',
    method: 'post',
  });
}

// Get user info API
export function getInfo() {
  return request({
    url: '/getInfo',
    method: 'get',
  });
}
