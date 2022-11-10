import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Cart = () => {

  const state = useSelector(state => state.addItem);
  const dispatch = useDispatch();

  const cartItems = cartItem => {
    return (
      <div className='col'>
        <div className='topCol'>
          <button>X</button>
        </div>

        <div className='middleCol'>
          <div className='left'>
          </div>
          <div className='right'>
          </div>
        </div>
      </div>
    );
  };

  return (
    <>
      <div className='cart'>
        {state.length !== 0 && state.map(cartItems)}
      </div>
    </>
  );
};

export default Cart;