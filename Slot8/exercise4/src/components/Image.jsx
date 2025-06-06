import React from 'react';
import { Image } from 'react-bootstrap';

function CardImage({ url }) {
  return (
    <div className="d-flex align-items-center justify-content-center bg-warning" style={{ width: '100px', height: '100px' }}>
      <Image src={url} alt="Card" fluid />
    </div>
  );
}

export default CardImage;
