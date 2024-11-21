import React, { useState } from 'react';

function Header({totalcount}) {
  return (
    <header style={styles.header}>
      <nav style={styles.navbar}>
        <div style={styles.navLeft}>
          <a href="/">
            <img src="http://localhost:8080/logo.jpg" alt="Logo" style={styles.logo} />
          </a>
        </div>
        <div style={styles.navRight}>
          <a href="/" style={styles.menuLink}>Menú</a>
          <a href="/" style={styles.menuLink}>
            <img src='http://localhost:8080/carrito.png' alt="carrito" style={styles.carrito}/>
          </a>
          <div style={styles.carrritoCounterContainer}>
            <h5 style={styles.carrritoCounter}>{totalcount}</h5>
          </div> 
        </div>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    width: '100%',
    backgroundColor: '#FFF',
    padding: '0',
    margin: '0',
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
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.3)',
  },
  navLeft: {
    alignItems: 'left',
  },
  carrritoCounterContainer: {
    position: 'absolute',
    backgroundColor: '#FF0000',
    top: 15,
    right: 13,
    zIndex: 1,
    width: 20,  // Increase width to accommodate the text
    height: 20, // Increase height to accommodate the text
    borderRadius: 10, // Half of the width and height to make it circular
    display: 'flex',
    justifyContent: 'center', // Centers text horizontally
    alignItems: 'center', // Centers text vertically
  },
  carrritoCounter: {
    color: 'white', // Make the text white so it stands out against the red background
    margin: 0, // Remove default margin on h5 element
    fontSize: '12px', // Adjust font size as needed
  },
  logo: {
    width: '40px',
    height: 'auto',
    paddingTop: '10px',
    paddingBottom: '10px',
    paddingLeft: '30px',
  },
  carrito: {
    width: 40,
    height: 'auto',
    paddingTop: '10px',
    paddingBottom: '10px',
  },
  navRight: {
    display: 'flex',
    justifyContent: 'flex-end',
    alignItems: 'center', // Fix this to 'center' to vertically align the menu items
  },
  menuLink: {
    color: '#000',
    textDecoration: 'none',
    alignItems: 'center',
    marginLeft: '20px',
    fontSize: '16px',
    fontWeight: 'bold',
    transition: 'color 0.3s ease',
    paddingRight: '20px',
  },
};

export default Header;
