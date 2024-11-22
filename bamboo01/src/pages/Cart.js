import React from 'react';
import { useCart } from '../context/CartContext'; // Import useCart hook
import CartCard from '../components/CartCard';

function Cart() {
  const { cardCounts, cardData, handleCardCountRestChange } = useCart(); // Access card data and counts from context
  
  
  return (
    <div style={styles.cart}>
      <h2>Your Cart</h2>
      <div>
      {cardData.map(card => (
          <CartCard
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            onRestCountChange={handleCardCountRestChange}
            cardCounts={cardCounts}
          />
        ))}
        {/* {Object.keys(cardCounts).length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cardData.map(card => {
            const count = cardCounts[card.id] || 0;
            if (count > 0) {
              return (
                <div key={card.id}>
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                  <p>Cantida: {count}</p>
                  <Button title={`x`} onPress={handleRemove} color="white" />
                </div>
                // <div key={card.id}>
                //   <h4>{card.title}</h4>
                //   <p>{card.description}</p>
                //   <img src={card.image} alt={card.title} width="100" />
                //   <p>Quantity: {count}</p>
                // </div>
              );
            }
            return null;
          })
        )} */}
      </div>
    </div>
  );
}

const styles = {
  cart: {
    padding: '20px',
  },
};

export default Cart;
