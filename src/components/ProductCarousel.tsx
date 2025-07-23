import { useEffect, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import ProductoCard from './ProductoCard';
import { fetchProductos } from '../services/api'; // ✅ Importa correctamente
import type { Product } from '../services/api'; // ✅ Importa correctamente

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 5,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 2,
  },
};

const ProductCarousel = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cargarProductos = async () => {
      try {
        const data = await fetchProductos(); // ✅ Usa la función importada
        setProducts(data);
      } catch (error) {
        console.error('Error al cargar productos:', error);
      } finally {
        setLoading(false);
      }
    };

    cargarProductos();
  }, []);

  if (loading) return <p className="text-center">Cargando productos...</p>;

  return (
    <div className="py-5">
      <h2 className="text-center fw-bold mb-4">Shop The Classics</h2>
      <Carousel responsive={responsive} infinite autoPlay>
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <ProductoCard product={product} />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default ProductCarousel;
