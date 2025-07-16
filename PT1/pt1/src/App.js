import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login";
import LaptopList from "./components/LaptopList";
import LaptopDetail from "./components/LaptopDetail";

const App = () => {
  const [user, setUser] = useState(null);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login setUser={setUser} />} />
        <Route path="/laptops" element={<LaptopList />} />
        <Route path="/laptops/:id" element={<LaptopDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
