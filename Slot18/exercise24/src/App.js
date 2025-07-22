import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import ProductList from './components/ProductList'; 
import Cart from './components/Cart';
function App() {
  return (
    <Provider store={store}>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'flex-start',
          padding: 40,
          backgroundColor: '#e9ecef',
          minHeight: '100vh',
          gap: 40,
          fontFamily: 'Segoe UI, Tahoma, Geneva, Verdana, sans-serif',
        }}
      >
        <ProductList />
        <Cart />
      </div>
    </Provider>
  );
}

export default App;