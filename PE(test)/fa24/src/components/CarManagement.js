import React, { useContext, useEffect } from 'react';
import { CarContext } from '../context/CarContext';
import { Form, Button, Container, Table } from 'react-bootstrap';
import axios from 'axios';

const CarManagement = () => {
  const { state, dispatch } = useContext(CarContext);
  const [priceFilter, setPriceFilter] = React.useState('');

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get('http://localhost:3001/Cars'); // Thay 3001 bằng 3801 nếu cần
        console.log('Fetched cars:', response.data); // Debug log
        dispatch({ type: 'SET_CARS', payload: response.data });
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    };
    fetchCars();
  }, [dispatch]);

  useEffect(() => {
    dispatch({ type: 'FILTER_CARS', payload: Number(priceFilter) || 0 });
  }, [priceFilter, dispatch]);

  return (
    <Container className="mt-5">
      <h2>Car Management</h2>
      <Form className="mb-3">
        <Form.Group className="mb-3" controlId="price">
          <Form.Label>Filter by Price</Form.Label>
          <Form.Control
            type="number"
            value={priceFilter}
            onChange={(e) => setPriceFilter(e.target.value)}
            placeholder="Enter price"
          />
        </Form.Group>
        <Button variant="primary" onClick={() => dispatch({ type: 'FILTER_CARS', payload: Number(priceFilter) || 0 })}>
          Search
        </Button>
      </Form>
      <Table striped bordered hover responsive>
        <thead>
          <tr>
            <th>Image</th>
            <th>Make</th>
            <th>Model</th>
            <th>Year</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {state.filteredCars.length === 0 ? (
            <tr><td colSpan="5">No cars found</td></tr>
          ) : (
            state.filteredCars.map((car) => (
              <tr key={car.id}>
                <td><img src={car.image} alt={`${car.make} ${car.model}`} style={{ width: '100px' }} /></td>
                <td>{car.make}</td>
                <td>{car.model}</td>
                <td>{car.year}</td>
                <td>${car.price}</td>
              </tr>
            ))
          )}
        </tbody>
      </Table>
    </Container>
  );
};

export default CarManagement;