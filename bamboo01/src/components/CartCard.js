import React, { useEffect, useState } from 'react';
import { Button } from 'react-native';

function CartCard({ id, title, description, onRestCountChange, cardCounts }) {
  
  const [count, setCount] = useState(cardCounts[id] || 0); 

  useEffect(() => {
    setCount(cardCounts[id] || 0);
  }, [cardCounts, id]);

  if(count === 0){
    return null;
  }

  const handleRemove = () => {
    if (count > 0) {
      onRestCountChange(id, 1);
    } else {
      console.log('No item to remove');
    }
  };

  return (
    <div>
        <h5 style={styles.counterText}>{title}</h5>
        <div className="card" style={styles.card}>  
            <h5 style={styles.counterText}>{description}</h5>
            <Button
                title={`x`}
                onPress={handleRemove}
            />
        </div>
        <Button title={`Seguir a metodo de pago`}/>
    </div>
  );
}

const styles = {
  card: {
    display: 'flex', 
    flexDirection: 'row', // Make card horizontal
    border: '1px solid #ddd',
    borderRadius: '8px',
    width: '100%',
    maxWidth: '400px', // Limit the card width
    margin: '15px',
    boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    transition: 'transform 0.3s ease-in-out',
    color: 'black',
    position: 'relative',
  },
  imageContainer: {
    width: '120px', // Set a fixed width for the image container
    height: '120px',
    flexShrink: 0, // Prevent the image from shrinking
    marginRight: '15px', // Space between image and text
  },
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  },
  body: {
    display: 'flex',
    flexDirection: 'row', 
    alignItems: 'center', // Center content vertically
  },
  infoContainer: {
    flex: 1, // Take remaining space
    display: 'flex',
    flexDirection: 'column', // Stack text and button vertically
    justifyContent: 'space-between',
  },
  buttonContainer: {
    marginTop: '10px', // Space between text and button
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
};

export default CartCard;
