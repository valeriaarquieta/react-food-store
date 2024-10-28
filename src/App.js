// App.js
import React, { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import PaymentForm from './components/PaymentForm';
import Signup from './components/Signup';
import Login from './components/Login';
import { addUser, getUsers } from './Users'; // Importamos addUser y getUsers

const App = () => {
  const [cartItems, setCartItems] = useState([]);
  const [isPaymentFormVisible, setIsPaymentFormVisible] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [user, setUser] = useState(null);
  const [view, setView] = useState('login'); // Alterna entre 'login', 'signup', y 'products'

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

  const handleSignup = (userData) => {
    console.log('Usuario registrado:', userData);
    addUser(userData); // Agrega el usuario a la lista en JSON simulado
    setUser(userData);
    setView('login'); // Redirige a la ventana de inicio de sesión después del registro
  };

  const handleLogin = (userData) => {
    const users = getUsers();
    const existingUser = users.find(
      (user) => user.email === userData.email && user.password === userData.password
    );
    
    if (existingUser) {
      setIsAuthenticated(true);
      setView('products');
    } else {
      alert('Correo o contraseña incorrectos');
    }
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    setUser(null);
    setView('login');
  };

  return (
    <div style={styles.app}>
      <Header />
      <main style={styles.main}>
        {isAuthenticated ? (
          <div>
            {view === 'products' && (
              <>
                <h1>Bienvenido a FoodStore</h1>
                <ProductList addToCart={addToCart} />
                <Cart
                  cartItems={cartItems}
                  updateQuantity={updateQuantity}
                  removeFromCart={removeFromCart}
                  onPaymentClick={handlePaymentClick}
                />
                {isPaymentFormVisible && <PaymentForm onClose={handleClosePaymentForm} />}
              </>
            )}
            <button onClick={handleLogout} style={styles.logoutButton}>
              Cerrar Sesión
            </button>
          </div>
        ) : view === 'signup' ? (
          <Signup onSignup={handleSignup} />
        ) : (
          <Login onLogin={handleLogin} />
        )}
        {!isAuthenticated && (
          <button onClick={() => setView(view === 'login' ? 'signup' : 'login')} style={styles.switchButton}>
            {view === 'login' ? 'Crear una cuenta' : 'Iniciar Sesión'}
          </button>
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
  logoutButton: {
    marginTop: '10px',
    padding: '10px 15px',
    backgroundColor: '#FF6347',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  switchButton: {
    marginTop: '10px',
    padding: '10px 15px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default App;
