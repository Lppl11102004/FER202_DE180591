import React, { useEffect, useState } from "react";
import { Container, Button } from "react-bootstrap";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";

const LaptopDetail = () => {
  const { id } = useParams();
  const [laptop, setLaptop] = useState(null);
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`http://localhost:3000/Laptops/${id}`)
      .then((res) => {
        if (res.data) {
          setLaptop(res.data);
          setNotFound(false);
        } else {
          setNotFound(true);
        }
      })
      .catch(() => setNotFound(true));
  }, [id]);

  if (notFound) {
    return (
      <Container className="mt-5">
        <h3>404 Not Found</h3>
        <p>The laptop you are looking for does not exist.</p>
        <Button variant="secondary" onClick={() => navigate("/laptops")}>
          Back to Laptop List
        </Button>
      </Container>
    );
  }

  if (!laptop) {
    return (
      <Container className="mt-5">
        <p>Loading...</p>
      </Container>
    );
  }

  return (
    <Container className="mt-5">
      <h2>{laptop.brand} {laptop.model}</h2>
      <img src={laptop.image} alt={laptop.model} style={{ maxWidth: "300px" }} />
      <p><strong>Year:</strong> {laptop.year}</p>
      <p><strong>Price:</strong> {laptop.price}</p>
      <p><strong>Description:</strong> {laptop.description}</p>
      <Button variant="secondary" onClick={() => navigate("/laptops")}>
        Back to Laptop List
      </Button>
    </Container>
  );
};

export default LaptopDetail;
