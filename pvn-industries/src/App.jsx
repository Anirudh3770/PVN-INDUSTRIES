import React, { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './App.css';
import Menu from 'lucide-react/dist/esm/icons/menu';
import X from 'lucide-react/dist/esm/icons/x';

import Hero from './components/Hero';
import Journey from './components/Journey';
import Specs from './components/Specs';
import Products from './components/Products';
import Trust from './components/Trust';
import Industries from './components/Industries';
import PrintingServices from './components/PrintingServices';
import Branding from './components/Branding';
import Technology from './components/Technology';
import Clients from './components/Clients';
import About from './components/About';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Infrastructure from './components/Infrastructure';
import CTA from './components/CTA';
import Footer from './components/Footer';


const App = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [customLogos, setCustomLogos] = useState({});
  const [pvnAssetVisible, setPvnAssetVisible] = useState(true);
  const PVN_ASSET = `${import.meta.env.BASE_URL}logos/pvn-logo.png`;

  const makePlaceholder = (text) => {
    const svg = `<svg xmlns='http://www.w3.org/2000/svg' width='240' height='100'>
<rect width='100%' height='100%' fill='#f2f4f7'/>
<rect x='0' y='0' width='240' height='100' fill='none' stroke='#d0d5dd'/>
<text x='50%' y='50%' dominant-baseline='middle' text-anchor='middle' font-family='Inter, Arial, sans-serif' font-size='14' fill='#667085'>${text}</text>
</svg>`;
    return `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`;
  };

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  // This function is passed to child components for their internal scroll buttons
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    try {
      const stored = localStorage.getItem('clientLogos');
      if (stored) {
        setCustomLogos(JSON.parse(stored));
      }
    } catch {}
  }, []);

  const saveCustomLogo = (name, dataUrl) => {
    const next = { ...customLogos, [name]: dataUrl };
    setCustomLogos(next);
    try {
      localStorage.setItem('clientLogos', JSON.stringify(next));
    } catch {}
  };

  const handleFileSelect = (name, e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      if (typeof dataUrl === 'string') {
        saveCustomLogo(name, dataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  const onDropImage = (name, e) => {
    e.preventDefault();
    const file = e.dataTransfer.files && e.dataTransfer.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      const dataUrl = reader.result;
      if (typeof dataUrl === 'string') {
        saveCustomLogo(name, dataUrl);
      }
    };
    reader.readAsDataURL(file);
  };

  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="container nav-container">
          <div className="logo">
            {pvnAssetVisible ? (
              <img
                src={PVN_ASSET}
                alt="PVN Industries logo"
                className="pvn-logo-img"
                
                
                onError={(e) => {
                  setPvnAssetVisible(false);
                  e.currentTarget.style.display = 'none';
                }}
              />
            ) : (
              <Package className="logo-icon" />
            )}
          </div>
          
          <div className="desktop-menu">
            <Link to="home" smooth={true} duration={500} role="button">Home</Link>
            <Link to="products" smooth={true} duration={500} role="button">Products</Link>
            <Link to="journey" smooth={true} duration={500} role="button">Our Journey</Link>
            <Link to="specs" smooth={true} duration={500} role="button">Specs</Link>
            <Link to="technology" smooth={true} duration={500} role="button">Technology</Link>
            <Link to="about" smooth={true} duration={500} role="button">About</Link>
            <Link to="infrastructure" smooth={true} duration={500} role="button">Gallery</Link>
            <Link to="faq" smooth={true} duration={500} role="button">FAQ</Link>
            <Link to="clients" smooth={true} duration={500} role="button">Clients</Link>
            <Link to="contact" smooth={true} duration={500} role="button">Contact</Link>
          </div>

          <div className="mobile-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <Link to="home" smooth={true} duration={500} onClick={handleLinkClick} role="button">Home</Link>
            <Link to="products" smooth={true} duration={500} onClick={handleLinkClick} role="button">Products</Link>
            <Link to="journey" smooth={true} duration={500} onClick={handleLinkClick} role="button">Our Journey</Link>
            <Link to="about" smooth={true} duration={500} onClick={handleLinkClick} role="button">About</Link>
            <Link to="specs" smooth={true} duration={500} onClick={handleLinkClick} role="button">Specs</Link>
            <Link to="technology" smooth={true} duration={500} onClick={handleLinkClick} role="button">Technology</Link>
            <Link to="infrastructure" smooth={true} duration={500} onClick={handleLinkClick} role="button">Gallery</Link>
            <Link to="faq" smooth={true} duration={500} onClick={handleLinkClick} role="button">FAQ</Link>
            <Link to="clients" smooth={true} duration={500} onClick={handleLinkClick} role="button">Clients</Link>
            <Link to="contact" smooth={true} duration={500} onClick={handleLinkClick} role="button">Contact</Link>
          </div>
        )}
      </nav>

      <Hero scrollToSection={scrollToSection} />

      <Journey />

      <Specs />

      <div id="products">
        <Products />
      </div>

      <Trust />
        <Industries />

      <Branding />

      <Technology />

      <PrintingServices />

      <Infrastructure />

      <CTA scrollToSection={scrollToSection} />

      <About />

      <Clients
        customLogos={customLogos}
        onDropImage={onDropImage}
        handleFileSelect={handleFileSelect}
        makePlaceholder={makePlaceholder}
      />
      
      <FAQ />

      <Contact />

      <Footer scrollToSection={scrollToSection} />
    </div>
  );
};

export default App;