import React from 'react';
import type { Product } from '../services/api';
import { useCart } from './CartContext';

interface Props {
  product: Product;
  role: 'user' | 'admin' | string; // permite string por seguridad
  onEdit?: (product: Product) => void;
  onDelete?: (id: number) => void;
}

const ProductoCard: React.FC<Props> = ({ product, role, onEdit, onDelete }) => {
  console.log('ProductoCard role:', role);
  const { addToCart } = useCart();

  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={`/imagenes/${product.imagen}`}
        alt={product.name}
        className="card-img-top p-3"
        style={{ height: '250px', objectFit: 'contain' }}
      />
      <div className="card-body text-center">
        <h5 className="card-title fw-bold">{product.name}</h5>
        <p className="text-muted">{product.description}</p>
        <p className="mb-2 fw-bold">${Number(product.price).toFixed(2)}</p>
        <p className="text-secondary">Stock: {product.stock}</p>

        {/* 👤 Botón para usuarios normales */}
        {role === 'user' && (
          <button className="btn btn-dark w-100" onClick={() => addToCart(product)}>
            Añadir al carrito
          </button>
        )}

        {/* 🛠 Botones para admin */}
        {role === 'admin' && (
          <>
            <button
              className="btn btn-warning w-100 mb-2"
              onClick={() => onEdit?.(product)}
            >
              Editar
            </button>
            <button
            className="btn btn-danger w-100"
            onClick={() => onDelete?.(product.id)} // llama la función con id
          >
            Eliminar
          </button>
          </>
        )}
      </div>
    </div>
  );
};

export default ProductoCard;
