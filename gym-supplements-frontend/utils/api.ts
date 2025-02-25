import axios from 'axios';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:5000';

const api = axios.create({
  baseURL: API_URL,
});

export const registerUser = async (userData: any) => {
  return api.post('/api/auth/register', userData);
};

export const loginUser = async (userData: any) => {
  return api.post('/api/auth/login', userData);
};

export const getUsers = async (token: string) => {
  return api.get('/api/auth/users', {
    headers: { Authorization: `Bearer ${token}` },
  });
};

// Add other API functions as needed
