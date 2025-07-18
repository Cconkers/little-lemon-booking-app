import React from 'react';
import './Header.css';

const Header = () => {
  return (
    <header className="header" role="banner">
      <nav
        className="navbar"
        role="navigation"
        aria-label="Navegación principal"
      >
        <div className="nav-container">
          <div className="logo">
            <img
              src="https://png.pngtree.com/png-vector/20220212/ourmid/pngtree-lemon-clipart-vector-logo-png-image_4386676.png"
              alt="Little Lemon Restaurant Logo"
              className="logo-img"
            />
            <h1 className="logo-text">Little Lemon</h1>
          </div>
          <ul className="nav-menu" role="menubar">
            <li role="none">
              <a href="#home" className="nav-link" role="menuitem">
                Inicio
              </a>
            </li>
            <li role="none">
              <a href="#menu" className="nav-link" role="menuitem">
                Menú
              </a>
            </li>
            <li role="none">
              <a href="#booking" className="nav-link" role="menuitem">
                Reservar
              </a>
            </li>
            <li role="none">
              <a href="#contact" className="nav-link" role="menuitem">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header; 