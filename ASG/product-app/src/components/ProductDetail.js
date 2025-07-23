import React, { useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items: products } = useContext(ProductsContext);

  const product = products.find(p => p.id === id);

  if (!product) return <p className="text-white text-center mt-5">Product not found</p>;

  const original = parseFloat(product.price);
  const current = parseFloat(product.currentPrice);
  const discountPercent = original && current ? Math.round(((original - current) / original) * 100) : 0;

  return (
    <div className="bg-dark min-vh-100 py-5 text-white">
      <div className="container d-flex flex-column align-items-center">
        <h2 className="text-danger mb-3 text-center">{product.name}</h2>

        <img
          src={`/images/${product.image}`}
          alt={product.name}
          width="300"
          className="mb-4"
          style={{ objectFit: 'contain' }}
        />

        <p className="text-center mb-3">{product.description}</p>

        <div className="text-center mb-3">
          <div style={{ fontSize: '16px' }}>
            Price:<s>{product.price}</s>đ
          </div>
          <div className="text-center mb-3" style={{ fontSize: '18px', fontWeight: 'bold' }}>
            Current Price :{product.currentPrice}đ
          </div>
          <div className="text-center mt-1">
            Discount: <strong>{discountPercent}%</strong>
          </div>
        </div>

        <div className="mb-3">
          <Link to={`/edit/${product.id}`} className="btn btn-warning me-2">Edit</Link>
          <button className="btn btn-primary" onClick={() => navigate('/')}>Back Home</button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
