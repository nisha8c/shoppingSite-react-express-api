import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className='header'>
      <div className='topDiv'>

        <i className='fa fa-phone'></i>
        <span>+46-75 926 48 56</span>
        <i className='fa fa-envelope'></i>
        <span>ecommerce@nrc.com</span>  
        
        <div className='buttons'>
          <Link to='/login'><i className='fa fa-sign-in'></i> Login</Link>
          <Link to='/register'><i className='fa fa-user-plus'></i> Register</Link>
          <Link to='/cart'><i className='fa fa-shopping-cart'></i> Cart (0)</Link>
        </div>
      </div>
      
      <nav className='nav'>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/products'>Products</Link>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
            <li>
              <Link to='/contact'>Contact</Link>
            </li>
          </ul>
        </nav>

    </div>
  );
};

export default Header;