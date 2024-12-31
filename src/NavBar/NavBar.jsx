import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        F O R T I C A
      </div>
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <ul className={`menu ${isMenuOpen ? 'menu-open' : ''}`}>
        <li><a href="/">Inicio</a></li>
        <li><a href="#sobrenosotros">Sobre nosotros</a></li>
        <li><a href="#servicios">Servicios</a></li>
        <li><a href="#proyectos">Proyectos</a></li>
        <li><a href="/unirse-al-equipo">Unirse al equipo</a></li>
        <li><a href="#contacto">Contacto</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
