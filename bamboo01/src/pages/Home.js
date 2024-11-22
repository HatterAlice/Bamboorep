import React from 'react';
import Card from '../components/Card';
import { useCart } from '../context/CartContext'; // Import useCart hook

function Home() {
  const { cardData, handleCardCountAddChange, handleCardCountRestChange, cardCounts } = useCart(); // Access context state

  return (
    <div style={styles.home}>
      <h1>Milk Tea Series</h1>
      <div className="card-list" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {cardData.map(card => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            description={card.description}
            image={card.image}
            onAddCountChange={handleCardCountAddChange}
            onRestCountChange={handleCardCountRestChange}
            cardCounts={cardCounts}
          />
        ))}
      </div>
    </div>
  );
}

const styles = {
  home: {},
};

export default Home;
