// src/components/AdminPanel.js
import React, { useState } from 'react';

const AdminPanel = () => {
  const [orders, setOrders] = useState([
    { id: 1, product: 'Pizza', quantity: 2, status: 'pending', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY7RbPLpeQGEKr-JMLB6L9kRdCTMtUbFJfJw&s' },
    { id: 2, product: 'Hamburguesa', quantity: 1, status: 'delivered', image: 'https://www.cocinadelirante.com/800x600/filters:format(webp):quality(75)/sites/default/files/images/2024/06/hamburguesa-con-tocino.jpg' },
    { id: 3, product: 'Ensalada César', quantity: 3, status: 'pending', image: 'https://imag.bonviveur.com/ensalada-cesar-casera.jpg' },
  ]);

  const markAsDelivered = (id) => {
    setOrders(
      orders.map((order) =>
        order.id === id ? { ...order, status: 'delivered' } : order
      )
    );
  };

  const pendingOrders = orders.filter((order) => order.status === 'pending');
  const deliveredOrders = orders.filter((order) => order.status === 'delivered');

  return (
    <div style={styles.adminPanel}>
      <h2>Panel de Administración</h2>

      <section style={styles.section}>
        <h3>Pedidos Pendientes</h3>
        {pendingOrders.length === 0 ? (
          <p>No hay pedidos pendientes.</p>
        ) : (
          pendingOrders.map((order) => (
            <div key={order.id} style={styles.orderItem}>
              <img src={order.image} alt={order.product} style={styles.image} />
              <p>
                {order.product} - Cantidad: {order.quantity}
              </p>
              <button
                onClick={() => markAsDelivered(order.id)}
                style={styles.deliverButton}
              >
                Marcar como Recibido
              </button>
            </div>
          ))
        )}
      </section>

      <section style={styles.section}>
        <h3>Pedidos Entregados</h3>
        {deliveredOrders.length === 0 ? (
          <p>No hay pedidos entregados.</p>
        ) : (
          deliveredOrders.map((order) => (
            <div key={order.id} style={styles.orderItem}>
              <img src={order.image} alt={order.product} style={styles.image} />
              <p>
                {order.product} - Cantidad: {order.quantity}
              </p>
            </div>
          ))
        )}
      </section>
    </div>
  );
};

const styles = {
  adminPanel: {
    padding: '20px',
    backgroundColor: '#f8f8f8',
    borderRadius: '5px',
  },
  section: {
    marginBottom: '20px',
  },
  orderItem: {
    display: 'flex',
    alignItems: 'center',
    padding: '10px',
    backgroundColor: '#fff',
    borderRadius: '5px',
    marginBottom: '10px',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
  },
  image: {
    width: '50px',
    height: '50px',
    borderRadius: '5px',
    marginRight: '15px',
    objectFit: 'cover',
  },
  deliverButton: {
    margin: '1rem',
    padding: '5px 10px',
    backgroundColor: '#4CAF50',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default AdminPanel;
