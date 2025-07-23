import React, { useEffect, useState } from 'react';
import ProductoCard from '../components/ProductoCard';
import { fetchProductos } from '../services/api';
import type { Product } from '../services/api';

const Products: React.FC = () => {
  const [productos, setProductos] = useState<Product[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProductos()
      .then((prod) => {
        if (Array.isArray(prod)) {
          setProductos(prod);
        } else {
          setError('Respuesta inválida del servidor');
        }
      })
      .catch((err) => {
        setError('No se pudieron cargar los productos: ' + (err.message || 'Error desconocido'));
      });
  }, []);

  if (error) return <p className="text-center text-danger">{error}</p>;

  if (productos.length === 0) return <p className="text-center">No hay productos disponibles.</p>;

  return (
    <div className="container py-5">
      <h2 className="mb-4 fw-bold text-center">Catálogo de Productos</h2>
      <div className="row g-4">
        {productos.map((prod) => (
          <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={prod.id}>
            <ProductoCard product={prod} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;