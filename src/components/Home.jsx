import React from 'react';
import Products from './Products';
import manInSuit from './images/depositphotos_11663757-stock-photo-man-in-suit.jpeg';

const Home = () => {
  return (
    <div className='home'>
      <img src={manInSuit} alt="manInSuit" className='hero'/>
      <div>
        Welcome to Home Page..................
      </div>
      <hr />
      <p>
        New Arrivals
        Checkout All the Trends...
      </p>
      <Products />
    </div>
  );
};

export default Home;