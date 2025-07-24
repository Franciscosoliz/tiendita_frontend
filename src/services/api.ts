import axios from 'axios';

// const API_BASE_URL = 'https://tiendita-api.desarrollo-software.xyz';
const API_BASE_URL = 'http://localhost:2990';

export const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export interface Product {
  id: number;
  name: string;
  description: string;
  price: number; // precio como número
  stock: number;
  imagen?: string;
  tipo?: string;
}

api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token && config.headers) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export async function fetchProductos(tipo?: string): Promise<Product[]> {
  // Arma la URL con query si tipo está definido
  const url = tipo ? `/productos?tipo=${encodeURIComponent(tipo)}` : '/productos';

  const response = await api.get(url);

  // Convertimos price a número, por si viene como string
  return response.data.map((prod: any) => ({
    ...prod,
    price: Number(prod.price),
  }));
}

