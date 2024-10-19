// src/components/PaymentForm.js
import React, { useState } from 'react';

const PaymentForm = ({ onClose }) => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [cvv, setCvv] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Datos de la tarjeta:', { cardNumber, expiryDate, cvv });
    onClose();
  };

  return (
    <div style={styles.formContainer}>
      <h2>Formulario de Pago</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Número de tarjeta:</label>
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            required
            style={styles.input} 
          />
        </div>
        <div>
          <label>Fecha de vencimiento:</label>
          <input
            type="text"
            value={expiryDate}
            onChange={(e) => setExpiryDate(e.target.value)}
            placeholder="MM/AA"
            required
            style={styles.input} 
          />
        </div>
        <div>
          <label>CVV:</label>
          <input
            type="text"
            value={cvv}
            onChange={(e) => setCvv(e.target.value)}
            required
            style={styles.input} 
          />
        </div>
        <button type="submit" style={styles.submitButton}>
          Pagar
        </button>
        <button type="button" onClick={onClose} style={styles.cancelButton}>
          Cancelar
        </button>
      </form>
    </div>
  );
};

const styles = {
  formContainer: {
    padding: '20px',
    border: '1px solid #ddd',
    borderRadius: '5px',
    backgroundColor: '#f8f8f8', 
    boxShadow: '0 2px 10px rgba(0, 0, 0, 0.1)', 
  },
  input: {
    width: '90%', 
    padding: '10px',
    margin: '10px 0', 
    border: '1px solid #ccc',
    borderRadius: '5px',
  },
  submitButton: {
    padding: '10px 15px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    marginRight: '10px', 
  },
  cancelButton: {
    padding: '10px 15px',
    backgroundColor: '#FF6347',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default PaymentForm;
