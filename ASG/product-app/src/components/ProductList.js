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
    <div className="bg-dark min-vh-100 py-4">
      <div className="container text-white">
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
                <div className="card-body d-flex flex-column justify-content-between">
                  <div>
                    <h5 className="card-title text-danger text-center">{product.name}</h5>
                    <p className="card-text">{product.description}</p>
                    <div className="text-center">
                      <div style={{ fontSize: '14px' }}>
                        <s>{product.price}đ</s>
                      </div>
                      <div className="text-danger" style={{ fontSize: '16px', fontWeight: 'bold' }}>
                        {product.currentPrice}đ
                      </div>
                    </div>
                  </div>
                  <div className="mt-3 text-center">
                    <Link to={`/product/${product.id}`} className="btn btn-sm btn-info me-2">
                      Details
                    </Link>
                    <button onClick={() => deleteProduct(product.id)} className="btn btn-sm btn-danger">
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="card p-4 bg-dark">
          <h3 className="mb-4 text-center text-white">Add Product</h3>
          <form onSubmit={handleSubmit}>
            <div className="row align-items-center mb-3">
              <div className="col-md-3 text-white text-center">
                <label htmlFor="name" className="col-form-label">Name:</label>
              </div>
              <div className="col-md-9">
                <input id="name" name="name" value={form.name} onChange={handleChange} required className="form-control" />
              </div>
            </div>

            <div className="row align-items-center mb-3">
              <div className="col-md-3 text-white text-center">
                <label htmlFor="description" className="col-form-label">Description:</label>
              </div>
              <div className="col-md-9">
                <input id="description" name="description" value={form.description} onChange={handleChange} required className="form-control" />
              </div>
            </div>

            <div className="row align-items-center mb-3">
              <div className="col-md-3 text-white text-center">
                <label htmlFor="price" className="col-form-label">Original Price:</label>
              </div>
              <div className="col-md-9">
                <input id="price" name="price" value={form.price} onChange={handleChange} required className="form-control" />
              </div>
            </div>

            <div className="row align-items-center mb-3">
              <div className="col-md-3 text-white text-center">
                <label htmlFor="currentPrice" className="col-form-label">Current Price:</label>
              </div>
              <div className="col-md-9">
                <input id="currentPrice" name="currentPrice" value={form.currentPrice} onChange={handleChange} required className="form-control" />
              </div>
            </div>

            <div className="row align-items-center mb-3">
              <div className="col-md-3 text-white text-center">
                <label htmlFor="image" className="col-form-label">Image PNG filename:</label>
              </div>
              <div className="col-md-9">
                <input id="image" name="image" value={form.image} onChange={handleChange} placeholder="example.png" className="form-control" />
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <button type="submit" className="btn btn-primary mt-3">Add Product</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
