import React from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './Header.css';

const Header = () => {
  return (
    <div className='headerContainer'>
      <h1>Tech-Shop</h1>
      
      <nav>
        <i className="fa-solid fa-magnifying-glass"></i> {/* Search icon */}
        <i className="fa-solid fa-cart-shopping"></i> {/* Cart icon */}
        <i className="fa-regular fa-user"></i> {/* User icon */}
      </nav>
    </div>
  );
};

export default Header;