import React from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, updateCart, deleteFromCart } from '../store';

const products = [
  {
    id: '123456',
    name: 'Example Product 1',
    price: 9.99,
    description: 'This is an example product 1.',
    catalogs: ['catalog1', 'catalog2'],
  },
  {
    id: '234567',
    name: 'Example Product 2',
    price: 19.99,
    description: 'This is an example product 2.',
    catalogs: ['catalog3'],
  },
  {
    id: '345678',
    name: 'Example Product 3',
    price: 5.5,
    description: 'This is an example product 3.',
    catalogs: ['catalog1', 'catalog4'],
  },
];

const cardStyle = {
  border: '1px solid #ddd',
  borderRadius: 8,
  padding: 16,
  marginBottom: 20,
  boxShadow: '0 2px 5px rgba(0,0,0,0.1)',
  backgroundColor: '#fff',
  maxWidth: 320,
};

const buttonStyle = {
  marginRight: 10,
  padding: '8px 14px',
  borderRadius: 4,
  border: 'none',
  cursor: 'pointer',
  fontWeight: 'bold',
};

const addBtn = {
  ...buttonStyle,
  backgroundColor: '#28a745',
  color: '#fff',
};

const updateBtn = {
  ...buttonStyle,
  backgroundColor: '#007bff',
  color: '#fff',
};

const deleteBtn = {
  ...buttonStyle,
  backgroundColor: '#dc3545',
  color: '#fff',
};

function ProductList() {
  const dispatch = useDispatch();

  return (
    <div style={{ padding: 20, backgroundColor: '#f8f9fa', borderRadius: 8 }}>
      <h2 style={{ marginBottom: 20, color: '#343a40' }}>Product List</h2>
      <div style={{ display: 'flex', gap: 20, flexWrap: 'wrap' }}>
        {products.map(product => (
          <div key={product.id} style={cardStyle}>
            <h3 style={{ marginBottom: 8 }}>{product.name}</h3>
            <p style={{ fontStyle: 'italic', color: '#6c757d' }}>{product.description}</p>
            <p><strong>Price:</strong> ${product.price.toFixed(2)}</p>
            <p><strong>Catalogs:</strong> {product.catalogs.join(', ')}</p>
            <div style={{ marginTop: 12 }}>
              <button style={addBtn} onClick={() => dispatch(addToCart(product))}>Add to Cart</button>
              <button style={updateBtn} onClick={() => dispatch(updateCart({ id: product.id, quantity: 2 }))}>
                Update to Cart (qty 2)
              </button>
              <button style={deleteBtn} onClick={() => dispatch(deleteFromCart(product.id))}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;