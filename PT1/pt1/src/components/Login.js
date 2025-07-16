import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Form, Button, Modal } from "react-bootstrap";
import PropTypes from "prop-types";
import axios from "axios";

const Login = ({ setUser }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.get(
        `http://localhost:3000/UserAccounts?username=${username}&password=${password}&status=active`
      );
      if (res.data.length > 0) {
        setShowModal(true);
        setUser(res.data[0]);
        setTimeout(() => {
          setShowModal(false);
          navigate("/laptops");
        }, 1500);
      } else {
        alert("Invalid username or password!");
      }
    } catch {
      alert("Error logging in.");
    }
  };

  return (
    <Container className="mt-5">
      <h2>Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </Form.Group>
        <Button type="submit" className="mt-3">
          Login
        </Button>
      </Form>
      <Modal show={showModal} onHide={() => setShowModal(false)}>
        <Modal.Body>Welcome, {username} login Successful!</Modal.Body>
      </Modal>
    </Container>
  );
};

Login.propTypes = {
  setUser: PropTypes.func.isRequired,
};

export default Login;
