// src/components/Home.js
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const bannerImage = 'images/anh2.jpg';
const circularImages = [
  'images/event-1.jpg',
  'images/event-2.jpg',
  'images/event-3.jpg',
  'images/event-4.jpg',
  'images/event-5.jpg',
  'images/event-6.jpg'
];

const Home = () => {
  return (
    <>
      {/* Banner full-width */}
      <div className="w-100">
        <img
  src={bannerImage}
  alt="Main Banner"
  className="img-fluid rounded shadow mx-auto d-block"
  style={{ width: "50%", maxHeight: "900px", objectFit: "cover" }}
/>
      </div>

      {/* Nội dung ảnh tròn */}
      <Container className="my-5 text-center">
        <h2 className="text-danger mb-4">This is Home Page</h2>
        <Row className="justify-content-center g-4">
          {circularImages.map((src, idx) => (
            <Col key={idx} xs={6} sm={4} md={2}>
              <div
                // className="rounded-circle overflow-hidden mx-auto" tròn
                className="border overflow-hidden mx-auto"
                style={{
                  width: '100px',
                  height: '100px',
                }}
              >
                <img
                  src={src}
                  // alt={`circle-${idx}`} tròn
                   alt={`square-${idx}`}
                  className="w-100 h-100 object-fit-cover"
                />
              </div>
            </Col>
          ))}
        </Row>
          <Container className="text-center">
          <Link to="/quiz" className="btn btn-primary m-2">Take a Quiz</Link>
          <Link to="/news" className="btn btn-outline-danger m-2">See News</Link>
          
        </Container>
      </Container>
    </>
  );
};

export default Home;