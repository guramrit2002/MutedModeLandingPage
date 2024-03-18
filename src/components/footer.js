import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <div className='footer'>
        <div className='links'>
            <Link to=''>Home</Link>
            <Link to=''>Products</Link>
            <Link to=''>Join us</Link>
            <Link to=''>Blog</Link>
        </div>
        <p>@mutedmode</p>
    </div>
    );
  }
  
export default Footer