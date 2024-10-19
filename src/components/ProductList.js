import React from 'react';
import ProductCard from './ProductCard';  

const products = [
  {
    id: 1,
    name: 'Pizza Margherita',
    description: 'Deliciosa pizza con tomate, mozzarella y albahaca.',
    price: 8.99,
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 2,
    name: 'Hamburguesa Clásica',
    description: 'Jugosa hamburguesa con queso, lechuga y tomate.',
    price: 6.99,
    image: 'https://via.placeholder.com/300',
  },
  {
    id: 3,
    name: 'Ensalada César',
    description: 'Fresca ensalada con pollo, queso parmesano y crutones.',
    price: 5.99,
    image: 'https://via.placeholder.com/300',
  },
];

const ProductList = ({ addToCart }) => {
  return (
    <div style={styles.grid}>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} addToCart={addToCart} />
      ))}
    </div>
  );
};

const styles = {
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    gap: '20px',
    padding: '20px',
  },
};

export default ProductList;
