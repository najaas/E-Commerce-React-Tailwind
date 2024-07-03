import React from 'react';
import './Header.css';
import { FaShoppingCart } from 'react-icons/fa';


function Header() {
  return (
    <header>
      <div className='container'>
        <h1>Kiyado</h1>
        <nav className='nav'>
        <h2>Home</h2>
        <h2>Product</h2>
        </nav>
        <FaShoppingCart className='icon'/>
      </div>
    </header>
  );
}

export default Header;
