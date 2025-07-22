import React from 'react';
import { useSelector } from 'react-redux';

const cartStyle = {
  padding: 20,
  backgroundColor: '#fff',
  borderRadius: 8,
  boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
  maxWidth: 400,
  minWidth: 300,
};

const listItemStyle = {
  borderBottom: '1px solid #eee',
  padding: '10px 0',
  fontSize: 16,
  display: 'flex',
  justifyContent: 'space-between',
};

function Cart() {
  const items = useSelector(state => state.cart.items);

  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <div style={cartStyle}>
      <h2 style={{ marginBottom: 20, color: '#343a40' }}>Your Cart</h2>
      {items.length === 0 ? (
        <p style={{ fontStyle: 'italic', color: '#6c757d' }}>Your cart is empty.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0, marginBottom: 20 }}>
          {items.map(item => (
            <li key={item.id} style={listItemStyle}>
              <span>{item.name} (x{item.quantity})</span>
              <span>${(item.price * item.quantity).toFixed(2)}</span>
            </li>
          ))}
        </ul>
      )}
      <h3>Total: ${total.toFixed(2)}</h3>
    </div>
  );
}

export default Cart;