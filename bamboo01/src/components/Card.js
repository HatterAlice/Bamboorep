// src/components/Card.js
import React, { useEffect, useState } from 'react';
import { Button, ScrollView } from 'react-native';

function Card({ id, title, image, description, onAddCountChange, onRestCountChange, cardCounts }) {
  
  const [count, setCount] = useState(cardCounts[id] || 0); 

  useEffect(() => {
    setCount(cardCounts[id] || 0);
  }, [cardCounts, id]);

  const handleAdd = () => {
    onAddCountChange(id, 1);
  };

  const handleRemove = () => {
    if (count > 0) {
      onRestCountChange(id, 1);
    } else {
      console.log('No item to remove');
    }
  };

  return (
    <div className="card" style={styles.card}>
      <div style={styles.counterContainer}>
        <h1 style={styles.counterText}>{count}</h1>
      </div>
      <img src={image} alt={title} style={styles.image} />
      <div className="card-body" style={styles.body}>
        <div style={styles.scrollcontainer}>
          <ScrollView>
            <h5 style={styles.cardTitle}>{title}</h5>
            <p style={styles.cardDescription}>{description}</p>
          </ScrollView>
        </div>
        <ScrollView style={styles.buttonContainer}>
          
          {/* Add Button */}
          <Button title={`Add item`} onPress={handleAdd} color="green" />

          {/* Remove Button */}
          <Button
            title={`Remove item`}
            onPress={handleRemove}
            color="red"
            disabled={count === 0}
          />
        </ScrollView>
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
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  body: {
    // padding: '10px',
  },
  counterContainer: {
    position: 'absolute',
    top: -10,
    right: -10,
    backgroundColor: 'rgba(0, 128, 0, 0.7)', // Semi-transparent green background
    padding: 5,
    borderRadius: 30,
    minWidth: 30,
    height: 30,
    justifyContent: 'top',
    alignItems: 'top',
    zIndex: 1,
  },
  counterText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
  cardDescription:{
    fontSize: 10
  },
  cardTitle: {
    fontSize: 20
  },
  buttonContainer: {
    // position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    // padding: 10,
  },
  scrollcontainer: {
    justifyContent: 'flex-start',
  },
};

export default Card;
