import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductsProvider } from './context/ProductsContext';

import ProductList from './components/ProductList';
import ProductDetail from './components/ProductDetail';
import EditProduct from './components/EditProduct';

const App = () => (
  <ProductsProvider>
    <Router>
      <Routes>
        <Route path="/" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/edit/:id" element={<EditProduct />} />
      </Routes>
    </Router>
  </ProductsProvider>
);

export default App;
