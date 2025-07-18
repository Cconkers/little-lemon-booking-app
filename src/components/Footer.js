import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer id="contact" className="footer" role="contentinfo">
      <div className="footer-content">
        <div className="footer-section">
          <h4>Little Lemon</h4>
          <p>Cocina mediterránea auténtica</p>
        </div>
        <div className="footer-section">
          <h4>Contacto</h4>
          <p>📍 Calle Mayor 123, Madrid</p>
          <p>📞 +34 91 123 45 67</p>
          <p>✉️ <a href="mailto:info@littlelemon.es" className="footer-email">info@littlelemon.es</a></p>
        </div>
        <div className="footer-section">
          <h4>Horarios</h4>
          <p>Lunes - Jueves: 12:00 - 22:00</p>
          <p>Viernes - Sábado: 12:00 - 23:00</p>
          <p>Domingo: 12:00 - 21:00</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Little Lemon. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
};

export default Footer; 