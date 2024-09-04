import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div style={styles.card}>
      <img src={product.image} alt={product.name} style={styles.image} />
      <h3>{product.name}</h3>
      <p>{product.description}</p>
      <p style={styles.price}>${product.price}</p>
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
};

export default ProductCard;
