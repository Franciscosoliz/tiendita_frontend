import axios from 'axios';

export interface User {
  id: number;
  usuario: string;
  rol: 'user' | 'admin' | string;
}

export interface LoginResponse {
  access_token: string;
  user: User;
}

// const API_BASE_URL = 'https://tiendita-api.desarrollo-software.xyz';
const API_BASE_URL = 'http://localhost:2990';


export async function register(usuario: string, password: string) {
  const response = await axios.post(`${API_BASE_URL}/auth/register`, { usuario, password });
  return response.data;
}

export async function login(usuario: string, password: string): Promise<LoginResponse> {
  const response = await axios.post(`${API_BASE_URL}/auth/login`, { usuario, password });
  return response.data;
}



