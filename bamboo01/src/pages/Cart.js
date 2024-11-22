import React from 'react';
import { useCart } from '../context/CartContext'; // Import useCart hook

function Cart() {
  const { cardCounts, cardData } = useCart(); // Access card data and counts from context

  return (
    <div style={styles.cart}>
      <h2>Your Cart</h2>
      <div>
        {Object.keys(cardCounts).length === 0 ? (
          <p>Your cart is empty</p>
        ) : (
          cardData.map(card => {
            const count = cardCounts[card.id] || 0;
            if (count > 0) {
              return (
                <div key={card.id}>
                  <h4>{card.title}</h4>
                  <p>{card.description}</p>
                  <img src={card.image} alt={card.title} width="100" />
                  <p>Quantity: {count}</p>
                </div>
              );
            }
            return null;
          })
        )}
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
