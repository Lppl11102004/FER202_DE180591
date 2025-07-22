import React, { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';

const ProductList = () => {
  const { items: products, loading, error, addProduct, deleteProduct } = useContext(ProductsContext);

  const [form, setForm] = useState({
    name: '',
    description: '',
    price: '',
    currentPrice: '',
    image: '',
  });

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = e => {
    e.preventDefault();
    const newProduct = {
      id: Date.now().toString(),
      ...form,
      image: form.image || 'default.png',
    };
    addProduct(newProduct);
    setForm({ name: '', description: '', price: '', currentPrice: '', image: '' });
  };

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="container mt-4">
      <h1 className="mb-4 text-center">Product List</h1>

      <div className="row row-cols-1 row-cols-md-4 g-4 mb-5">
        {products.map(product => (
          <div key={product.id} className="col">
            <div className="card h-100">
              <img
                src={`/images/${product.image}`}
                className="card-img-top"
                alt={product.name}
                style={{ objectFit: 'contain', height: '180px' }}
              />
              <div className="card-body">
                <h5 className="card-title text-danger">{product.name}</h5>
                <p className="card-text">{product.description}</p>
                <p className="card-text">
                  <s>{product.price}</s> → <span className="text-danger">{product.currentPrice}</span>
                </p>
                <Link to={`/product/${product.id}`} className="btn btn-sm btn-info me-2">
                  Details
                </Link>
                <button onClick={() => deleteProduct(product.id)} className="btn btn-sm btn-danger">
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="card p-4">
        <h3 className="mb-4 text-center">Add Product</h3>
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
            <input id="image" name="image" value={form.image} onChange={handleChange} placeholder="example.png" className="form-control" />
          </div>

          <div className="col-md-6 offset-md-2">
            <button type="submit" className="btn btn-primary mt-3">Add Product</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ProductList;