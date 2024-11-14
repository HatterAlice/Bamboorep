import React from 'react';

function Header() {
  return (
    <header style={styles.header}>
      <nav style={styles.navbarStyle}>
        <div style={styles.navItem}>
          <a href='.'>
                {/*Necesito un logo sin texto*/}
                <img src='http://localhost:8080/logo.jpg' width={"75pc"}></img> 
          </a>
          <a href='.' style={styles.menulink}>
            <h2>Menu</h2> 
          </a>
          {/*Generacion de carritos de comropas interactivo*/}
        </div>
      </nav>
    </header>
  );
}

const styles = {
  header: {
    backgroundColor: '#FFFFF',
    padding: '10px 20px',
  },
  navList: {
    listStyle: 'none',
    padding: 0,
  },
  navItem: {
    display: 'flex',
    margin: '0 15px',
    //paddingLeft: '20px',
    alignItems: 'center'
  },
  navbarStyle: {
    display: 'flex',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    padding: '1em',
    backgroundColor: '#fff',
  },
  menulink: {
    paddingLeft: '50px',        // Space between the logo and the menu
    textDecoration: 'none',    // Remove underline from the link
    color: 'black', 
  }
};

export default Header;
