import React, { useState, useEffect } from 'react';
import './App.css';
import { Menu, X, Instagram, Youtube } from 'lucide-react';
import Hero from './components/Hero';
import Journey from './components/Journey';
import Specs from './components/Specs';
import Products from './components/Products';
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

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
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
            <button onClick={() => scrollToSection('home')}>Home</button>
            <button onClick={() => scrollToSection('products')}>Products</button>
            <button onClick={() => scrollToSection('journey')}>Our Journey</button>
            <button onClick={() => scrollToSection('specs')}>Specs</button>
            <button onClick={() => scrollToSection('technology')}>Technology</button>
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('infrastructure')}>Gallery</button>
            <button onClick={() => scrollToSection('faq')}>FAQ</button>
            <button onClick={() => scrollToSection('clients')}>Clients</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </div>

          <div className="mobile-toggle" onClick={toggleMenu}>
            {isMenuOpen ? <X /> : <Menu />}
          </div>
        </div>

        {isMenuOpen && (
          <div className="mobile-menu">
            <button onClick={() => scrollToSection('home')}>Home</button>
            <button onClick={() => scrollToSection('about')}>About</button>
            <button onClick={() => scrollToSection('journey')}>Our Journey</button>
            <button onClick={() => scrollToSection('specs')}>Specs</button>
            <button onClick={() => scrollToSection('technology')}>Technology</button>
            <button onClick={() => scrollToSection('products')}>Products</button>
            <button onClick={() => scrollToSection('infrastructure')}>Gallery</button>
            <button onClick={() => scrollToSection('faq')}>FAQ</button>
            <button onClick={() => scrollToSection('clients')}>Clients</button>
            <button onClick={() => scrollToSection('contact')}>Contact</button>
          </div>
        )}
      </nav>

      <Hero scrollToSection={scrollToSection} />

      <Journey />

      <Specs />

      <div id="products">
        <Products />
      </div>

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