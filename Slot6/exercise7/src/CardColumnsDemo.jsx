import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import xeImage from './xe.png';

const CardColumnsDemo = () => {
  const cardData = [
    {
      img: xeImage,
      text: 'Some text inside the first card',
      borderColor: 'primary',
    },
    {
      img: xeImage,
      text: 'Some text inside the first card',
      borderColor: 'warning',
    },
    {
      img: xeImage,
      text: 'Some text inside the first card',
      borderColor: 'danger',
    },
  ];

  return (
    <div className="container my-4">
      <h4 className="fw-bold">Cards Columns</h4>
      <div className="d-flex justify-content-center flex-wrap">
        {cardData.map((card, index) => (
          <div
            key={index}
            className={`card border-${card.borderColor} bg-${card.borderColor} m-2`}
            style={{
              width: '18rem',
              borderWidth: '10px',
              borderStyle: 'solid',
            }}
          >
            <img src={card.img} className="card-img-top" alt="Car" />
            <div className="card-body text-center">
              <p className={`card-text text-white`}>
                {card.text}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CardColumnsDemo;
