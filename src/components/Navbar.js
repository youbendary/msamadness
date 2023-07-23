import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
  }, []);

  window.addEventListener('resize', showButton);

  return (
    <>
      <nav className='navbar'>
        <div className='navbar-container'>
          <a href='/#nav-bar' className='navbar-logo' onClick={closeMobileMenu}>
            <img className='logo-img' src={require('../assets/images/logo.png')} />
            MSA MADNESS
          </a>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <a href="/#events" className='nav-links' onClick={closeMobileMenu}>Events</a>
            </li>
            <li className='nav-item'>
              {/* replace href with the Google form */}
              <a
                href='/#volunteer'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Volunteer
              </a>
            </li>
            <li className='nav-item'>
              <a
                href='/#about-us'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                About Us
              </a>
            </li>

            <li>
              {/* replace href with the Google form */}
              <a
                href='/#sign-up'
                className='nav-links-boxed'
                onClick={closeMobileMenu}
              >
                Sign Up
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;