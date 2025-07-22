// src/store.js
import { configureStore, createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action) {
      const item = action.payload;
      const existing = state.items.find(i => i.id === item.id);
      if (existing) {
        existing.quantity += 1;
      } else {
        state.items.push({ ...item, quantity: 1 });
      }
    },
    updateCart(state, action) {
      const { id, quantity } = action.payload;
      const existing = state.items.find(i => i.id === id);
      if (existing && quantity > 0) {
        existing.quantity = quantity;
      }
    },
    deleteFromCart(state, action) {
      const id = action.payload;
      state.items = state.items.filter(i => i.id !== id);
    },
  },
});

export const { addToCart, updateCart, deleteFromCart } = cartSlice.actions;

const store = configureStore({
  reducer: {
    cart: cartSlice.reducer,
  },
});

export default store;