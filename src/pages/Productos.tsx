import React, { useEffect, useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ProductoCard from '../components/ProductoCard';
import EditProductModal from '../components/EditProductModal';
import { api } from '../services/api';
import type { Product } from '../services/api';
import { AuthContext } from '../context/AuthContext';

interface Tipo {
  _id: string;
  nombre: string;
}

const Products: React.FC = () => {
  const { tipo } = useParams();
  const [productos, setProductos] = useState<Product[]>([]);
  const [tipos, setTipos] = useState<Tipo[]>([]);
  const [error, setError] = useState('');
  const [productoEditar, setProductoEditar] = useState<Product | null>(null);
  const [mostrarModal, setMostrarModal] = useState(false);
  const [modoCrear, setModoCrear] = useState(false);

  const { usuario } = useContext(AuthContext);
  const role = usuario?.rol || '';

  useEffect(() => {
    async function fetchData() {
      try {
        const [prodRes, tiposRes] = await Promise.all([
          api.get('/productos'),
          api.get('/tipos'),
        ]);
        setProductos(prodRes.data);
        setTipos(tiposRes.data);
      } catch (err: any) {
        setError('Error al cargar productos o tipos: ' + err.message);
      }
    }

    fetchData();
  }, []);

  const handleEdit = (producto: Product) => {
    setProductoEditar(producto);
    setModoCrear(false);
    setMostrarModal(true);
  };

  const handleCreate = () => {
    setProductoEditar(null);
    setModoCrear(true);
    setMostrarModal(true);
  };

  const handleDeleteProduct = async (id: number) => {
    try {
      await api.delete(`/productos/${id}`);
      setProductos(prev => prev.filter(p => p.id !== id));
    } catch (error) {
      alert('Error al eliminar producto');
    }
  };

  const tipoEncontrado = tipos.find(
    (t) => t.nombre.toLowerCase() === tipo?.toLowerCase()
  );

  const productosFiltrados = tipoEncontrado
    ? productos.filter((p) => p.tipo === tipoEncontrado._id)
    : productos;

  if (error) return <p className="text-center text-danger">{error}</p>;

  console.log(productosFiltrados.map(p => p.id));

  return (
    <div className="container py-5">
      {role === 'admin' && (
        <div className="mb-4 text-center">
          <button className="btn btn-primary" onClick={handleCreate}>
            Crear Producto
          </button>
        </div>
      )}

      <h2 className="mb-4 fw-bold text-center">
        Catálogo de Productos {tipo && `- ${tipo.charAt(0).toUpperCase() + tipo.slice(1)}`}
      </h2>

      <div className="row g-4">
        {productosFiltrados.map((prod, index) => (
          <div key={prod.id ?? index} className="col-12 col-sm-6 col-md-4 col-lg-3">
            <ProductoCard product={prod} role={role} onEdit={handleEdit} onDelete={handleDeleteProduct}/>
          </div>
        ))}
      </div>

      {/* Modal de crear/editar */}
      {mostrarModal && (
        <EditProductModal
          product={productoEditar}
          tipos={tipos}
          isOpen={mostrarModal}
          onClose={() => {
            setMostrarModal(false);
            setProductoEditar(null);
            setModoCrear(false);
          }}
          onSave={async (updatedProduct) => {
            try {
              if (modoCrear) {
                // 🚫 No enviar `id` si estamos creando
                const { id, ...productToCreate } = updatedProduct;
                const res = await api.post('/productos', productToCreate);
                console.log('Producto creado:', res.data);
                setProductos(prev => [...prev, res.data]);
              } else {
                // ✅ Editar producto existente
                const updatedProductCorrected = {
                  ...updatedProduct,
                  price: Number(updatedProduct.price),
                  stock: Number(updatedProduct.stock),
                };
                const res = await api.put(`/productos/${updatedProduct.id}`, updatedProductCorrected);
                console.log('Producto a actualizar:', updatedProduct, updatedProductCorrected);
                setProductos(prev =>
                  prev.map(p => (p.id === res.data.id ? res.data : p))
                );
              }
              setMostrarModal(false);
              setProductoEditar(null);
              setModoCrear(false);
            } catch (error) {
              alert('Error al guardar producto');
            }
          }}
        />
      )}
    </div>
  );
};

export default Products;
