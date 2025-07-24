import React, { useState, useEffect } from 'react';

export interface Tipo {
  _id: string; // <-- Asegúrate de que sea number si lo espera el backend
  nombre: string;
}

interface Product {
  id?: number; // <-- Opcional para creación
  name: string;
  description: string;
  price: number;
  stock: number;
  imagen?: string;
  tipo?: string; // <-- número, no string
}

interface EditProductModalProps {
  product: Product | null;
  tipos: Tipo[];
  isOpen: boolean;
  onClose: () => void;
  onSave: (updatedProduct: Product) => void;
}

const EditProductModal: React.FC<EditProductModalProps> = ({
  product,
  tipos,
  isOpen,
  onClose,
  onSave,
}) => {
  const [formData, setFormData] = useState<Product>({
    name: '',
    description: '',
    price: 0,
    stock: 0,
    imagen: '',
    tipo: undefined,
  });

  useEffect(() => {
    if (product) {
      setFormData(product);
    } else {
      setFormData({
        id: 0,
        name: '',
        description: '',
        price: 0,
        stock: 0,
        imagen: '',
        tipo: undefined,
      });
    }
  }, [product]);

  if (!isOpen) return null;

  const handleChange = (
  e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
) => {
  const { name, value } = e.target;

  setFormData(prev => ({
    ...prev,
    [name]:
      name === 'price' || name === 'stock'
        ? Number(value)
        : value, // para 'tipo' o cualquier otro campo, dejar string
  }));
};


  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSave(formData);
  };

  return (
    <div className="modal-backdrop">
      <div className="modal" style={{ display: 'block' }}>
        <div className="modal-dialog">
          <form onSubmit={handleSubmit} className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title">{product ? 'Editar' : 'Crear'} Producto</h5>
              <button type="button" className="btn-close" onClick={onClose} />
            </div>

            <div className="modal-body">
              {/* Campos */}
              <div className="mb-3">
                <label className="form-label">Nombre</label>
                <input
                  name="name"
                  type="text"
                  className="form-control"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Descripción</label>
                <textarea
                  name="description"
                  className="form-control"
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Precio</label>
                <input
                  name="price"
                  type="number"
                  step="0.01"
                  className="form-control"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Stock</label>
                <input
                  name="stock"
                  type="number"
                  className="form-control"
                  value={formData.stock}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="mb-3">
                <label className="form-label">Tipo</label>
                <select
                  name="tipo"
                  className="form-select"
                  value={formData.tipo ?? ''}
                  onChange={handleChange}
                  required
                >
                  <option value="">Selecciona un tipo</option>
                  {tipos.map(tipo => (
                    <option key={tipo._id} value={tipo._id}>
                      {tipo.nombre}
                    </option>
                  ))}
                </select>
              </div>

              <div className="mb-3">
                <label className="form-label">Imagen URL</label>
                <input
                  name="imagen"
                  type="text"
                  className="form-control"
                  value={formData.imagen || ''}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>
                Cancelar
              </button>
              <button type="submit" className="btn btn-primary">
                Guardar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EditProductModal;
