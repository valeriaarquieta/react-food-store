import React from 'react';
import ProductCard from './ProductCard';  

const products = [
  {
    id: 1,
    name: 'Pizza Margherita',
    description: 'Deliciosa pizza con tomate, mozzarella y albahaca.',
    price: 8.99,
    image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTY7RbPLpeQGEKr-JMLB6L9kRdCTMtUbFJfJw&s',
  },
  {
    id: 2,
    name: 'Hamburguesa Clásica',
    description: 'Jugosa hamburguesa con queso, lechuga y tomate.',
    price: 6.99,
    image: 'https://www.cocinadelirante.com/800x600/filters:format(webp):quality(75)/sites/default/files/images/2024/06/hamburguesa-con-tocino.jpg',
  },
  {
    id: 3,
    name: 'Ensalada César',
    description: 'Fresca ensalada con pollo, queso parmesano y crutones.',
    price: 5.99,
    image: 'https://imag.bonviveur.com/ensalada-cesar-casera.jpg',
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
