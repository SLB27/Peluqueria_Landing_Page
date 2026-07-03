import './Footer.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contacto" className="footer-section">
      <div className="container footer-container">
        
        {/* Logo & Description */}
        <div className="footer-col footer-brand">
          <a href="#hero" className="footer-logo">
            <span className="logo-pepa">Pepa</span>
            <span className="logo-pelukera">Peluquería</span>
          </a>
          <p className="brand-desc">
            Estilismo capilar de alta gama en un espacio exclusivo. 
            Cuidamos tu cabello y potenciamos tu esencia con tratamientos personalizados y las mejores firmas del mercado.
          </p>
          <div className="social-links">
            <a href="https://www.instagram.com/lapepapeluqueria/" target="_blank" rel="noreferrer" className="social-btn" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>

        {/* Business Hours */}
        <div className="footer-col footer-hours">
          <h3>Horario</h3>
          <ul className="hours-list">
            <li>
              <span className="day">Lunes</span>
              <span className="time">10:00 - 13:00</span>
            </li>
            <li>
              <span className="day">Martes - Viernes</span>
              <span className="time">10:00 - 13:30, 16:30 - 19:00</span>
            </li>
            <li>
              <span className="day">Sábado</span>
              <span className="time">09:00 - 14:00</span>
            </li>
            <li>
              <span className="day">Domingos & Festivos</span>
              <span className="time-closed">Cerrado</span>
            </li>
          </ul>
        </div>

        {/* Location & Map */}
        <div className="footer-col footer-contact">
          <h3>Contacto</h3>
          <address className="contact-details">
            <p className="address-line">
              <span className="contact-icon">📍</span>
              Calle Calamón, 29140 Churriana, Málaga
            </p>
            <p className="phone-line">
              <span className="contact-icon">📞</span>
              <a href="tel:+34646688589">+34 646 68 85 89</a>
            </p>
            <p className="email-line">
              <span className="contact-icon">✉</span>
              <a href="mailto:pelukera82maria@gmail.com">pelukera82maria@gmail.com</a>
            </p>
          </address>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="footer-bottom">
        <div className="container bottom-container">
          <p>&copy; {currentYear} Pepa Peluquería. Todos los derechos reservados.</p>
          {/* <div className="legal-links">
            <a href="#privacidad">Política de Privacidad</a>
            <a href="#terminos">Términos de Uso</a>
          </div> */}
        </div>
      </div>
    </footer>
  );
}
