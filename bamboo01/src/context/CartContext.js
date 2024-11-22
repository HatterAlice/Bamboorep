import React, { createContext, useContext, useState } from 'react';

// Create a Context for Cart
const CartContext = createContext();

// Custom hook to use CartContext
export const useCart = () => {
  return useContext(CartContext);
};

// CartProvider component to wrap the app and provide cart state
export const CartProvider = ({ children }) => {
  // Initialize the cardCounts state with an empty object
  const [cardCounts, setCardCounts] = useState({});
  
  // Card data (could be passed from App.js but hardcoded here)
  const cardData = [
    { id: 1, title: "Café", description: "Cafe americano clásico", image: "http://localhost:8080/cafe.jpg" },
    { id: 2, title: "Latte", description: "Cafe latte", image: "http://localhost:8080/latte.jpg" },
    { id: 3, title: "Bubble Tea", description: "Té verde con tapioca", image: "http://localhost:8080/bubble_tea.jpg" }
  ];

  const handleCardCountAddChange = (id, delta) => {
    setCardCounts(prevState => {
      const newCounts = { ...prevState };
      newCounts[id] = (newCounts[id] || 0) + delta;
      return newCounts;
    });
  };

  const handleCardCountRestChange = (id, delta) => {
    setCardCounts(prevState => {
      const newCounts = { ...prevState };
      newCounts[id] = (newCounts[id] || 0) - delta;
      if (newCounts[id] < 0) newCounts[id] = 0;
      return newCounts;
    });
  };

  const totalCount = Object.values(cardCounts).reduce((acc, count) => acc + count, 0);

  return (
    <CartContext.Provider
      value={{
        cardCounts,
        cardData,
        handleCardCountAddChange,
        handleCardCountRestChange,
        totalCount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
