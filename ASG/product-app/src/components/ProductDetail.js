import React, { useContext } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ProductsContext } from '../context/ProductsContext';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { items: products } = useContext(ProductsContext);

  const product = products.find(p => p.id === id);

  if (!product) return <p>Product not found</p>;

  return (
    <div className="container mt-4">
      <h2 className="text-danger text-center">{product.name}</h2>
      <img src={`/images/${product.image}`} alt={product.name} width="300" className="mb-3 d-block mx-auto" style={{ objectFit: 'contain' }} />
      <p>{product.description}</p>
      <p>
        <s>{product.price}</s> → <span className="text-danger">{product.currentPrice}</span>
      </p>

      <div className="mb-3">
        <Link to={`/edit/${product.id}`} className="btn btn-warning me-2">Edit</Link>
        <button className="btn btn-primary me-2" onClick={() => navigate('/')}>Back Home</button>
      </div>
    </div>
  );
};

export default ProductDetail;