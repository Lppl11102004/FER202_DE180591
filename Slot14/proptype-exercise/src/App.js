import React from "react";
import UserForm from "./components/UserForm";
import "bootstrap/dist/css/bootstrap.min.css";

const App = () => {
  const handleFormSubmit = (formData) => {
    console.log("Dữ liệu đã gửi:", formData);
    alert("Gửi thành công! Xem dữ liệu trong console.");
  };

  return (
    <div className="App">
      <h1 className="text-center mt-4">Ứng Dụng Đăng Ký</h1>
      <UserForm title="Form Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />
    </div>
  );
};

export default App;
