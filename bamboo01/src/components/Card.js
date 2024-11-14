// src/components/Card.js
import React from 'react';

function Card({ title, description, image }) {
  return (
    <div className="card" style={styles.card}>
      <img src={image} alt={title} style={styles.image} />
      <div className="card-body" style={styles.body}>
        <h3>{title}</h3>
        {/* Elementos para agegar a carrito  */}
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '150px',
    margin: '15px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    textAlign: 'center',
    transition: 'transform 0.3s ease-in-out',
    color: 'black',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  body: {
    padding: '10px',
  }
};

export default Card;
