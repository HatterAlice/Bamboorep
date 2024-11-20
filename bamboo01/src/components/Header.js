import React, { useState } from 'react';

function Header() {
  const [count] = useState(0);
  return (
    <header style={styles.header}>
      <nav style={styles.navbar}>
        <div style={styles.carrritoCounterContainer}>
          <h1 style={styles.carrritoCounter}>{count}</h1>
        </div>
        <div style={styles.navLeft}>
          <a href="/">
            <img src="http://localhost:8080/logo.jpg" alt="Logo" style={styles.logo} />
          </a>
        </div>
        <div style={styles.navRight}>
          <a href="/" style={styles.menuLink}>Menu</a>
          <a href="/about" style={styles.menuLink}>Carrito</a>
        </div>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    width: '100%',        // Ensures the header takes up full width
    backgroundColor: '#FFF',
    padding: '0',         // Remove any default padding
    margin: '0',          // Remove any default margin
    boxSizing: 'border-box',
    position: 'fixed',
    top: 0,
    left: 0,
    zIndex: 1000,
  },
  navbar: {
    display: 'flex',
    backgroundColor: '#FFF',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '100%',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)'

  },
  navLeft: {
    alignItems: 'left',
  },
  carrritoCounterContainer:{
    position: 'absolute', 
  },
  carrritoCounter: {
    
  },

  logo: {
    width: '40px', 
    height: 'auto',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '30px'
  },
  navRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'right',
  },
  menuLink: {
    color: '#000',
    textDecoration: 'none',
    marginLeft: '20px',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
    paddingRight: '20px',
  },
};

export default Header;
