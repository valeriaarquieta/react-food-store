import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logo}>FoodStore</div>
      <nav>
        <ul style={styles.navList}>
          <li style={styles.navItem}>Home</li>
          <li style={styles.navItem}>Productos</li>
          <li style={styles.navItem}>Contacto</li>
        </ul>
      </nav>
    </header>
  );
};

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '10px 20px',
    backgroundColor: '#FF6347',
    color: '#fff',
  },
  logo: {
    fontSize: '24px',
    fontWeight: 'bold',
  },
  navList: {
    listStyleType: 'none',
    display: 'flex',
    margin: 0,
    padding: 0,
  },
  navItem: {
    marginLeft: '20px',
    cursor: 'pointer',
  },
};

export default Header;
