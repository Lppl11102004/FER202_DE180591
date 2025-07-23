import React, { useContext, useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';

const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items: products, updateProduct } = useContext(ProductsContext);

  const product = products.find(p => p.id === id);

  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    currentPrice: '',
    image: '',
  });

  useEffect(() => {
    if (product) {
      setForm({
        name: product.name,
        description: product.description,
        price: product.price,
        currentPrice: product.currentPrice,
        image: product.image,
      });
    }
  }, [product]);

  if (!product) return <p className="text-white">Product not found</p>;

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    updateProduct({ id, ...form });
    navigate(`/product/${id}`);
  };

  return (
    <div className="bg-dark min-vh-100 d-flex justify-content-center py-5">
      <div style={{ width: '100%', maxWidth: '1000px', padding: '20px' }}>
        <h2 className="text-center mb-4 text-white">Edit Product</h2>

        <form onSubmit={handleSubmit}>
          {/* Name */}
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="name" className="form-label text-white me-5" style={{ minWidth: '130px' }}>
              Name:
            </label>
            <input
              id="name"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              className="form-control flex-grow-1"
            />
          </div>

          {/* Description */}
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="description" className="form-label text-white me-5" style={{ minWidth: '130px' }}>
              Description:
            </label>
            <input
              id="description"
              name="description"
              value={form.description}
              onChange={handleChange}
              required
              className="form-control flex-grow-1"
            />
          </div>

          {/* Original Price */}
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="price" className="form-label text-white me-5" style={{ minWidth: '130px' }}>
              Original Price:
            </label>
            <input
              id="price"
              name="price"
              value={form.price}
              onChange={handleChange}
              required
              className="form-control flex-grow-1"
            />
          </div>

          {/* Current Price */}
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="currentPrice" className="form-label text-white me-5" style={{ minWidth: '130px' }}>
              Current Price:
            </label>
            <input
              id="currentPrice"
              name="currentPrice"
              value={form.currentPrice}
              onChange={handleChange}
              required
              className="form-control flex-grow-1"
            />
          </div>

          {/* Image */}
          <div className="mb-3 d-flex align-items-center">
            <label htmlFor="image" className="form-label text-white me-5" style={{ minWidth: '130px' }}>
              Image PNG filename:
            </label>
            <input
              id="image"
              name="image"
              value={form.image}
              onChange={handleChange}
              className="form-control flex-grow-1"
            />
          </div>

          {/* Buttons */}
          <div className="d-flex justify-content-center mt-4">
            <button type="submit" className="btn btn-danger me-5 px-4">
              Save
            </button>
            <button
              type="button"
              onClick={() => navigate('/')}
              className="btn btn-primary px-4"
            >
              Back Home
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduct;
