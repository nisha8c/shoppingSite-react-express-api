import React from 'react';
import Products from './Products';
const Home = () => {
  return (
    <div className='home'>
      <img src="./images/depositphotos_11663757-stock-photo-man-in-suit.jpeg" alt='HomeImage' />
      New Arrivals
      Checkout All the Trends...
      <Products />
    </div>
  );
};

export default Home;