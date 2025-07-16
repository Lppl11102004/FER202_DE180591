import React, { useState, useEffect } from "react";
import { Container, Form, Button, Card, Row, Col } from "react-bootstrap";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LaptopList = () => {
  const [laptops, setLaptops] = useState([]);
  const [search, setSearch] = useState("");
  const navigate = useNavigate();

  const fetchLaptops = async () => {
    const res = await axios.get("http://localhost:3000/Laptops"); // chỉnh cổng cho khớp JSON Server của bạn 
    setLaptops(res.data);
  };

  useEffect(() => {
    fetchLaptops();
  }, []);

  const handleSearch = () => {
    const filtered = laptops.filter(
      (lap) =>
        lap.brand.toLowerCase().includes(search.toLowerCase()) ||
        lap.model.toLowerCase().includes(search.toLowerCase())
    );
    setLaptops(filtered);
  };

  return (
    <Container className="mt-5">
      <h2>Laptop List</h2>
      <Form className="d-flex mb-3">
        <Form.Control
          type="text"
          placeholder="Search by name..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <Button onClick={handleSearch} className="ms-2">
          Search
        </Button>
      </Form>
      <Row>
        {laptops.map((lap) => (
          <Col key={lap.id} xs={12} sm={6} md={4} lg={3} className="mb-4">
            <Card className="h-100 shadow-sm">
              <Card.Img
                variant="top"
                src={lap.image}
                style={{
                  height: "200px",
                  objectFit: "cover"
                }}
              />
              <Card.Body className="d-flex flex-column">
                <Card.Title>{lap.brand} {lap.model}</Card.Title>
                <Card.Text>Year: {lap.year} | Price: {lap.price}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => navigate(`/laptops/${lap.id}`)}
                  className="mt-auto"
                >
                  View Details
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default LaptopList;
