import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import ProductCard from './components/ProductCard';

const App = () => {
  return (
    <div style={styles.app}>
      <Header />
      <main style={styles.main}>
        <h1>Bienvenido a FoodStore</h1>
        <ProductList />
      </main>
      <Footer />
    </div>
  );
};

const styles = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  },
  main: {
    flex: '1',
    padding: '20px',
    backgroundColor: '#f8f8f8',
  },
};

export default App;
