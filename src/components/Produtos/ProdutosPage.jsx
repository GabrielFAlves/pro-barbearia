// produtos/ProdutosPage.js
import React from 'react';
import ProductCarousel from './ProductCarousel';
import './ProductCarousel.css';

import Pomada from './pomada.png';
import Shampoo from './shampoo.png';
import Creme from './creme.png';
import Pos from './pos-barba.png';

const ProdutosPage = () => {
  const products = [
    {
      id: 1,
      name: 'Pomada Black',
      price: 29.99,
      image: Pomada,
    },
    {
      id: 2,
      name: 'Shampoo',
      price: 59.99,
      image: Shampoo,
    },
    {
      id: 3,
      name: 'Creme',
      price: 24.99,
      image: Creme,
    },
    {
      id: 4,
      name: 'Pós Barba',
      price: 19.99,
      image: Pos,
    },
  ];

  return (
    <div>
      <h2 className='nossos'>Nossos Produtos</h2>
      <ProductCarousel products={products} />
    </div>
  );
};

export default ProdutosPage;
