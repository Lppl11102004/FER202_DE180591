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

  if (!product) return <p>Product not found</p>;

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    updateProduct({ id, ...form });
    navigate(`/product/${id}`);
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center mb-4 text-danger">Edit Product</h2>

      <form onSubmit={handleSubmit} className="row g-3 align-items-center">
        <div className="col-md-2 text-end">
          <label htmlFor="name" className="col-form-label">Name:</label>
        </div>
        <div className="col-md-4">
          <input id="name" name="name" value={form.name} onChange={handleChange} required className="form-control" />
        </div>

        <div className="col-md-2 text-end">
          <label htmlFor="description" className="col-form-label">Description:</label>
        </div>
        <div className="col-md-4">
          <input id="description" name="description" value={form.description} onChange={handleChange} required className="form-control" />
        </div>

        <div className="col-md-2 text-end">
          <label htmlFor="price" className="col-form-label">Original Price:</label>
        </div>
        <div className="col-md-4">
          <input id="price" name="price" value={form.price} onChange={handleChange} required className="form-control" />
        </div>

        <div className="col-md-2 text-end">
          <label htmlFor="currentPrice" className="col-form-label">Current Price:</label>
        </div>
        <div className="col-md-4">
          <input id="currentPrice" name="currentPrice" value={form.currentPrice} onChange={handleChange} required className="form-control" />
        </div>

        <div className="col-md-2 text-end">
          <label htmlFor="image" className="col-form-label">Image PNG filename:</label>
        </div>
        <div className="col-md-4">
          <input id="image" name="image" value={form.image} onChange={handleChange} className="form-control" />
        </div>

        <div className="col-md-6 offset-md-2">
          <button type="submit" className="btn btn-primary mt-3">Save</button>
          <button type="button" onClick={() => navigate(-1)} className="btn btn-secondary mt-3 ms-3">
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditProduct;