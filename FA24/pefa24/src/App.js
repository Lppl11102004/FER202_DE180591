import React from 'react';
import { BrowserRouter as Router, Routes, Route, NavLink } from 'react-router-dom';
import { CarProvider } from './context/CarContext';
import Register from './components/Register';
import CarManagement from './components/CarManagement';
import { Navbar, Nav, Container } from 'react-bootstrap';

function App() {
  return (
    <CarProvider>
      <Router>
        <Navbar bg="dark" variant="dark" expand="lg">
          <Container>
            <Navbar.Brand href="/">Car Management App</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link as={NavLink} to="/register">
                  Register
                </Nav.Link>
                <Nav.Link as={NavLink} to="/cars">
                  Car Management
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/register" element={<Register />} />
          <Route path="/cars" element={<CarManagement />} />
          <Route path="/" element={<Register />} />
        </Routes>
      </Router>
    </CarProvider>
  );
}

export default App;