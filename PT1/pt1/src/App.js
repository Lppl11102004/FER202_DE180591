import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, useNavigate } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/LoginForm';
import LaptopList from './components/LaptopList';
import LaptopDetail from './components/LaptopDetail';

function App() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [user, setUser] = useState(null);

  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route 
            path="/" 
            element={
              <Login 
                username={username} 
                password={password} 
                onUsernameChange={(e) => setUsername(e.target.value)} 
                onPasswordChange={(e) => setPassword(e.target.value)} 
                setUser={setUser}
              />
            } 
          />
          <Route path="/laptops" element={<LaptopList />} />
          <Route path="/laptops/:id" element={<LaptopDetail />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;