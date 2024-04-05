import React from 'react';
import '../Styles/ProductCard.css';
import Products from '../Data/Products.json';


export default function ProductCard() {
  return (
    <div className='d-flex flex-wrap justify-content-around'>
      {Products.map((product, i) => (
        <a href={`/product/${product.id}`} key={i} className='border m-3 card' style={{ width: '18rem', textDecoration: 'none' }}>
          <div className='card-body'>
            <img src={product.image_url} className='card-img-top' alt={product.name} />
            <h5 className='card-title'>{product.name}</h5>
          </div>
        </a>
      ))}
    </div>
  );
}
