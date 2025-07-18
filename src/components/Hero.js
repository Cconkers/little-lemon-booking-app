import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <section id="home" className="hero" role="banner">
      <div className="hero-content">
        <div className="hero-text">
          <h2 className="hero-title">Little Lemon</h2>
          <h3 className="hero-subtitle">Madrid</h3>
          <p className="hero-description">
            Somos un restaurante familiar mediterráneo, enfocado en recetas tradicionales 
            servidas con un toque moderno. Reserva tu mesa hoy y disfruta de una experiencia 
            culinaria única.
          </p>
          <a 
            href="#booking" 
            className="hero-button"
            role="button"
            aria-label="Ir a la sección de reservas"
          >
            Reservar Mesa
          </a>
        </div>
        <div className="hero-image">
          <img 
            src="https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80"
            alt="Plato de comida mediterránea del restaurante Little Lemon"
            className="hero-img"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero; 