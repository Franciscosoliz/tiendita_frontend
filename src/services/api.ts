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
  imagen: string;
}

export async function fetchProductos(): Promise<Product[]> {
  const response = await api.get('/productoss');
  // Convertimos price a número
  return response.data.map((prod: any) => ({
    ...prod,
    price: Number(prod.price),
  }));
}

