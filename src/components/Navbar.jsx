import { useState, useEffect } from 'react';
import './Navbar.css';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <nav className={`navbar glass ${scrolled ? 'navbar-scrolled' : ''}`}>
      <div className="navbar-container container">
        <a href="#hero" className="navbar-logo" onClick={closeMenu}>
          <span className="logo-pepa">Pepa</span>
          <span className="logo-pelukera">Peluquería</span>
        </a>

        {/* Hamburger Menu Icon */}
        <button 
          className={`navbar-hamburger ${isOpen ? 'is-active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
          id="nav-toggle-btn"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* Navigation Links */}
        <div className={`navbar-menu ${isOpen ? 'is-open' : ''}`}>
          <ul className="navbar-links">
            <li>
              <a href="#servicios" onClick={closeMenu}>Servicios</a>
            </li>
            <li>
              <a href="#galeria" onClick={closeMenu}>Galería</a>
            </li>
            <li>
              <a href="#testimonios" onClick={closeMenu}>Opiniones</a>
            </li>
            <li>
              <a href="#map" onClick={closeMenu}>Donde Estamos</a>
            </li>
          </ul>
          <div className="navbar-cta-mobile">
            <a href="#reservar" className="btn btn-gold" onClick={closeMenu}>
              Reservar Cita
            </a>
          </div>
        </div>

        {/* Desktop Call to Action */}
        <div className="navbar-cta-desktop">
          <a href="#reservar" className="btn btn-gold">
            Reservar Cita
          </a>
        </div>
      </div>
    </nav>
  );
}
