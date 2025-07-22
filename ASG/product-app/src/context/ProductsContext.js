import React, { createContext, useState, useEffect } from 'react';

export const ProductsContext = createContext();

export const ProductsProvider = ({ children }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Fetch products from API
  useEffect(() => {
    const fetchProducts = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch('/products.json');
        if (!res.ok) throw new Error('Failed to fetch products');
        const data = await res.json();
        setItems(data.products);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  // Add new product
  const addProduct = (product) => {
    setItems((prev) => [...prev, product]);
  };

  // Update product by id
  const updateProduct = (updatedProduct) => {
    setItems((prev) =>
      prev.map((p) => (p.id === updatedProduct.id ? updatedProduct : p))
    );
  };

  // Delete product by id
  const deleteProduct = (id) => {
    setItems((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <ProductsContext.Provider
      value={{ items, loading, error, addProduct, updateProduct, deleteProduct }}
    >
      {children}
    </ProductsContext.Provider>
  );
};