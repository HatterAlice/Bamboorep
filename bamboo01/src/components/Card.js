// src/components/Card.js
import React, { useState } from 'react';
import {Button, ScrollView} from 'react-native'

function Card({ title, image }) {
  const [count, setCount] = useState(0);

  const handleAdd = () => {
    setCount(count + 1);
    console.log("Added item. total count");
  }

  const handleRemove = () => {
    if (count > 0) {
      setCount(count - 1); 
      console.log(`Removed item Total count: ${count - 1}`)
    } else {
      console.log(`No item to remove`)
    }
  }


  return (
    <div className="card" style={styles.card}>
      <div style={styles.counterContainer}>
          <h1 style={styles.counterText}>{count}</h1>
      </div>
      <img src={image} alt={title} style={styles.image} />
      <div className="card-body" style={styles.body}>
        <h3>{title}</h3>
        <ScrollView>
          {/*Add Button*/}

          <Button
            title = {`Add item`}
            onPress={handleAdd}
            color="green"
          />

          {/* Remove Button*/}

          <Button 
            title = {`Remove item`}
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
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
  },
  body: {
    padding: '10px',
  },
  counterContainer: {
    position: 'absolute',
    //top: 0,
    //right: 0,
    //backgroundColor: 'rgba(0, 128, 0, 0.7)', // Semi-transparent green background
    padding: 5,
    borderRadius: 12,
    minWidth: 30,
    height: 30,
    justifyContent: 'center',
    alignItems: 'center',
  },
  counterText: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 16,
  },
};

export default Card;
