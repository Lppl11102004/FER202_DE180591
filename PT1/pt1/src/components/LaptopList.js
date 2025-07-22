import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Container, Row, Col, Card, Button, Form, Carousel, Navbar, Nav } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const LaptopList = () => {
  const [allLaptops, setAllLaptops] = useState([]);
  const [filteredLaptops, setFilteredLaptops] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    axios.get('http://localhost:3001/Laptops')
      .then(res => {
        setAllLaptops(res.data);
        setFilteredLaptops(res.data);
      });
  }, []);

  const handleSearch = () => {
    const keyword = searchTerm.toLowerCase();
    const filtered = allLaptops.filter(
      laptop =>
        laptop.brand.toLowerCase().includes(keyword) ||
        laptop.model.toLowerCase().includes(keyword)
    );
    setFilteredLaptops(filtered);
  };

  const handleAddToCart = async (laptop) => {
    if (laptop.quantity > 0) {
      try {
        await axios.patch(`http://localhost:3001/Laptops/${laptop.id}`, {
          quantity: laptop.quantity - 1
        });

        let cart = JSON.parse(localStorage.getItem('cart')) || [];
        const existing = cart.find(item => item.id === laptop.id);

        if (existing) {
          existing.cartQuantity += 1;
        } else {
          cart.push({ ...laptop, cartQuantity: 1 });
        }

        localStorage.setItem('cart', JSON.stringify(cart));
        alert('Added to cart successfully!');
      } catch (error) {
        alert('Error adding to cart.');
      }
    } else {
      alert('This item is out of stock!');
    }
  };

  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand onClick={() => navigate('/')} style={{ cursor: 'pointer' }}>Laptop Management</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link onClick={() => navigate('/')}>Logout</Nav.Link>
              <Nav.Link onClick={() => navigate('/laptops')}>Laptop List</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Container className="my-4">
        <h2 className="text-center mb-4">Laptop List</h2>
        <div className="d-flex mb-4 justify-content-center">
          <Form.Control
            type="text"
            placeholder="Search by brand or model"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ maxWidth: '300px' }}
          />
          <Button className="ms-2" onClick={handleSearch}>Search</Button>
        </div>

        <Carousel className="mb-4" interval={4000} fade>
          <Carousel.Item>
            <img className="d-block mx-auto" src="/images/dell-xps13.jpg" alt="Dell XPS 13" style={{ maxHeight: '500px', width: 'auto', borderRadius: '12px', objectFit: 'contain' }} />
            <Carousel.Caption><h5>Dell XPS 13</h5></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block mx-auto" src="/images/macbook-pro.jpg" alt="MacBook Pro" style={{ maxHeight: '500px', width: 'auto', borderRadius: '12px', objectFit: 'contain' }} />
            <Carousel.Caption><h5>MacBook Pro</h5></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block mx-auto" src="/images/hp-spectre.jpg" alt="HP Spectre x360" style={{ maxHeight: '500px', width: 'auto', borderRadius: '12px', objectFit: 'contain' }} />
            <Carousel.Caption><h5>HP Spectre x360</h5></Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img className="d-block mx-auto" src="/images/lenovo-thinkpad.jpg" alt="Lenovo ThinkPad X1" style={{ maxHeight: '500px', width: 'auto', borderRadius: '12px', objectFit: 'contain' }} />
            <Carousel.Caption><h5>Lenovo ThinkPad X1</h5></Carousel.Caption>
          </Carousel.Item>
        </Carousel>

        <Row>
          {filteredLaptops.map(laptop => (
            <Col md={3} key={laptop.id} className="mb-4">
              <Card className="h-100 shadow-sm">
                <Card.Img variant="top" src={laptop.image} style={{ height: '240px', objectFit: 'cover' }} />
                <Card.Body className="d-flex flex-column">
                  <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
                  <Card.Text>
                    <strong>Year:</strong> {laptop.year} <br />
                    <strong>Price:</strong> {laptop.price} <br />
                    <strong>Quantity:</strong> {laptop.quantity}
                  </Card.Text>
                  <Button variant="info" onClick={() => navigate(`/laptops/${laptop.id}`)} className="mb-2">View Details</Button>
                  <Button variant="success" onClick={() => handleAddToCart(laptop)}>Add to Cart</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>

      <footer className="bg-dark text-light text-center py-3 mt-auto">
        © 2025 Laptop Management System - All rights reserved.
      </footer>
    </>
  );
};

export default LaptopList;
