import React from 'react';

// Import các component từ thư mục components
import Counter from './components/Counter';
import UserInfoForm from './components/UserInfoForm';       // bài 2
import ProductList from './components/ProductList';         // bài 3
import ProductSelector from './components/ProductSelector'; // bài 4

function App() {
  return (
    <div style={{ padding: 20 }}>
      <h1>Bài 1: Đếm số lần bấm nút</h1>
      <Counter />

      <hr />

      <h1>Bài 2: Cập nhật giá trị name, age từ textbox</h1>
      <UserInfoForm />

      <hr />

      <h1>Bài 3: Hiển thị các sản phẩm được chọn (checkbox)</h1>
      <ProductList />

      <hr />

      <h1>Bài 4: Hiển thị sản phẩm được chọn (radio button)</h1>
      <ProductSelector />
    </div>
  );
}

export default App;