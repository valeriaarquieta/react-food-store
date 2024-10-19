// src/components/Cart.js
import React from 'react';

const Cart = ({ cartItems, updateQuantity, removeFromCart, onPaymentClick }) => {
  const handleQuantityChange = (id, event) => {
    const newQuantity = parseInt(event.target.value);
    updateQuantity(id, newQuantity);
  };

  return (
    <div style={styles.cart}>
      <h2>Carrito de Compras</h2>
      {cartItems.length === 0 ? (
        <p>Tu carrito está vacío</p>
      ) : (
        <>
          {cartItems.map((item) => (
            <div key={item.id} style={styles.cartItem}>
              <img src={item.image} alt={item.name} style={styles.image} />
              <div style={styles.details}>
                <h4>{item.name}</h4>
                <p>${item.price}</p>
                <input
                  type="number"
                  value={item.quantity}
                  min="1"
                  onChange={(event) => handleQuantityChange(item.id, event)}
                  style={styles.input}
                />
                <button style={styles.button} onClick={() => removeFromCart(item.id)}>Eliminar</button>
              </div>
            </div>
          ))}
          <button onClick={onPaymentClick} style={styles.payButton}>
            Pagar
          </button>
        </>
      )}
    </div>
  );
};

const styles = {
  cart: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    marginTop: '20px',
  },
  cartItem: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '20px',
  },
  image: {
    width: '80px',
    height: '80px',
    objectFit: 'cover',
    marginRight: '10px',
  },
  details: {
    flexGrow: 1,
  },
  input: {
    width: '40px',
    marginRight: '10px',
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#FF6347',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
  payButton: {
    padding: '10px 15px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginTop: '20px',
  },
};

export default Cart;
