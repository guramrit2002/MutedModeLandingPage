// Header.js
import React from 'react';
import { VscThreeBars } from "react-icons/vsc";
import { FaSearch, FaShoppingCart } from "react-icons/fa";

function Header() {
  return (
    <header className='navbar'>
      <div className='logo'>
        <button href=''><VscThreeBars /></button>
      </div>
      <div className='tabs'>
        <li className='tab'><button href=''><FaSearch /></button></li>
        <li className='tab'><button href=''><FaShoppingCart /></button></li>
      </div>
    </header>
  );
}

export default Header;
