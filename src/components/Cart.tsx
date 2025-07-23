import React from 'react';
import { useCart } from '../components/CartContext';

const CartSummary: React.FC = () => {
  const { totalItems } = useCart();

  return (
    <button type="button" className="btn btn-outline-light position-relative">
      🛒 Carrito
      {totalItems > 0 && (
        <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
          {totalItems}
        </span>
      )}
    </button>
  );
};

export default CartSummary;
