import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';

function SimpleCard({ item }) {
  return (
    <Card className="shadow p-3 mb-5 bg-white rounded">
      <Row className="align-items-center">
        {/* Logo FPT */}
        <Col md={6}>
          <Image src={item.imageUrl} alt="FPT Logo" fluid />
        </Col>

        {/* Thông tin cá nhân */}
        <Col md={6} className="text-center">
          <h5 className="fw-bold">Le Phuoc Phu Lam - FPT DaNang</h5>
          <p className="mb-0">Mobile: 0123456789</p>
        </Col>
      </Row>
    </Card>
  );
}

export default SimpleCard;
