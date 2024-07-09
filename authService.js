// src/authService.js

import axios from 'axios';

const API_URL = 'https://tu-endpoint-de-autenticacion.com';

export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_URL}/login`, { username, password });
    if (response.data.token) {
      localStorage.setItem('jwtToken', response.data.token);
    }
    return response.data;
  } catch (error) {
    throw new Error('Error al iniciar sesión');
  }
};

export const logout = () => {
  localStorage.removeItem('jwtToken');
};

export const getCurrentUser = () => {
  return localStorage.getItem('jwtToken');
};
