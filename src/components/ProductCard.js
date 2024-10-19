import React from 'react';

const ProductCard = ({ product, addToCart }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p style={styles.price}>${product.price}</p>
      {/* Botón para agregar el producto al carrito */}
      <button style={styles.button} onClick={() => addToCart(product)}>
        Agregar al carrito
      </button>
    </div>
  );
};

const styles = {
  card: {
    border: '1px solid #ddd',
    borderRadius: '5px',
    padding: '10px',
    textAlign: 'center',
    marginBottom: '20px',
  },
  image: {
    width: '100%',
    height: '150px',
    objectFit: 'cover',
    borderRadius: '5px',
  },
  price: {
    color: '#FF6347',
    fontWeight: 'bold',
  },
  button: {
    padding: '10px 15px',
    backgroundColor: '#FF6347',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  },
};

export default ProductCard;
