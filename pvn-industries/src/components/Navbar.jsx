
import React from 'react';

import { Menu, X } from 'lucide-react';

const Navbar = ({ isMenuOpen, toggleMenu, scrollToSection, pvnAssetVisible, PVN_ASSET, setPvnAssetVisible }) => {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="logo">
            {pvnAssetVisible && <img src={PVN_ASSET} alt="PVN Industries Logo" width="120" height="32" onClick={() => setPvnAssetVisible(false)} />}
          </div>
          <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollToSection('about'); }}>About</a></li>
              <li><a href="#products" onClick={(e) => { e.preventDefault(); scrollToSection('products'); }}>Products</a></li>
              <li><a href="#technology" onClick={(e) => { e.preventDefault(); scrollToSection('technology'); }}>Technology</a></li>
              <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</a></li>
            </ul>
          </nav>
          <div className="header-actions">
            <button className="btn btn-primary" onClick={() => scrollToSection('contact')}>Get a Quote</button>
            <button className="menu-toggle" onClick={toggleMenu}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;