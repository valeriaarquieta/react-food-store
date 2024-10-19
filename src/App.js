// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import PaymentForm from './components/PaymentForm';

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isPaymentFormVisible, setIsPaymentFormVisible] = useState(false);

  const addToCart = (product) => {
    const existingProduct = cartItems.find((item) => item.id === product.id);
    if (existingProduct) {
      setCartItems(cartItems.map((item) =>
        item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
      ));
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const updateQuantity = (id, quantity) => {
    setCartItems(cartItems.map((item) =>
      item.id === id ? { ...item, quantity: quantity } : item
    ));
  };

  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  const handlePaymentClick = () => {
    setIsPaymentFormVisible(true);
  };

  const handleClosePaymentForm = () => {
    setIsPaymentFormVisible(false);
  };

  return (
    <div style={styles.app}>
      <Header />
      <main style={styles.main}>
        <h1>Bienvenido a FoodStore</h1>
        <ProductList addToCart={addToCart} />
        <Cart
          cartItems={cartItems}
          updateQuantity={updateQuantity}
          removeFromCart={removeFromCart}
          onPaymentClick={handlePaymentClick} 
        />
        {/* Mostrar el formulario de pago si está visible */}
        {isPaymentFormVisible && (
          <PaymentForm onClose={handleClosePaymentForm} />
        )}
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
