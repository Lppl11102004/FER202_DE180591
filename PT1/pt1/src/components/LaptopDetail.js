// src/components/LaptopDetail.js
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Card, Button, Alert } from 'react-bootstrap';
import axios from 'axios';

const LaptopDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [laptop, setLaptop] = useState(null);
  const [notFound, setNotFound] = useState(false);

  useEffect(() => {
    axios.get(`http://localhost:3001/Laptops/${id}`)
      .then(res => setLaptop(res.data))
      .catch(() => setNotFound(true));
  }, [id]);

  if (notFound) {
    return <Alert variant="danger">404 - Laptop not found</Alert>;
  }

  if (!laptop) return <p>Loading...</p>;

  return (
    <Card className="mx-auto" style={{ maxWidth: '600px' }}>
      <Card.Img variant="top" src={laptop.image} style={{ maxHeight: '300px', objectFit: 'contain' }} />
      <Card.Body>
        <Card.Title>{laptop.brand} {laptop.model}</Card.Title>
        <Card.Text>
          <strong>Year:</strong> {laptop.year} <br />
          <strong>Price:</strong> {laptop.price} <br />
          <strong>Description:</strong> {laptop.description || 'No description available.'}
        </Card.Text>
        <Button variant="primary" onClick={() => navigate('/laptops')}>
          Back to Laptop List
        </Button>
      </Card.Body>
    </Card>
  );
};

export default LaptopDetail;