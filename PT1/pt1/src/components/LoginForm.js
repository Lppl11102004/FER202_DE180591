import React, { useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import { Form, Button, Modal, Alert, Card, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LoginForm = ({ username, password, onUsernameChange, onPasswordChange, setUser }) => {
  const [showModal, setShowModal] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setError('Please enter both username and password.');
      return;
    }

    try {
      const response = await axios.get('http://localhost:3001/UserAccounts');
      const foundUser = response.data.find(
        (u) => u.username === username && u.password === password && u.status === "active"
      );

      if (foundUser) {
        setUser(foundUser);
        setShowModal(true);
        setError('');
      } else {
        setError('Invalid username or password!');
      }
    } catch {
      setError('Error connecting to server.');
    }
  };

  return (
    <Container className="d-flex justify-content-center align-items-center" style={{ minHeight: '100vh' }}>
      <Card style={{ width: '350px', padding: '20px' }}>
        <h4 className="text-center mb-3">Login</h4>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Username</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter username"
              value={username}
              onChange={onUsernameChange}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={onPasswordChange}
            />
          </Form.Group>

          <Button type="submit" variant="primary" className="w-100">Login</Button>
          {error && (
            <Alert variant="danger" className="mt-3 text-center py-2">
              {error}
            </Alert>
          )}
        </Form>

        <Modal show={showModal} onHide={() => setShowModal(false)} centered>
          <Modal.Header closeButton>
            <Modal.Title>Login Successful</Modal.Title>
          </Modal.Header>
          <Modal.Body>Welcome, {username}! Login successful.</Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={() => { setShowModal(false); navigate('/laptops'); }}>
              Continue
            </Button>
          </Modal.Footer>
        </Modal>
      </Card>
    </Container>
  );
};

LoginForm.propTypes = {
  username: PropTypes.string.isRequired,
  password: PropTypes.string.isRequired,
  onUsernameChange: PropTypes.func.isRequired,
  onPasswordChange: PropTypes.func.isRequired,
  setUser: PropTypes.func.isRequired,
};

export default LoginForm;
