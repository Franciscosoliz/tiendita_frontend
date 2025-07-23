import React from 'react';
import type { Product } from '../services/api';
import { useCart } from '../components/CartContext';

interface Props {
  product: Product;
}

const ProductoCard: React.FC<Props> = ({ product }) => {
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
        <p className="mb-2 fw-bold">${product.price.toFixed(2)}</p>
        <p className="text-secondary">Stock: {product.stock}</p>
        <button className="btn btn-dark w-100" onClick={() => addToCart(product)}>
          Añadir al carrito
        </button>
      </div>
    </div>
  );
};

export default ProductoCard;
