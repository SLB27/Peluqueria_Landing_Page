import './Hero.css';

export default function Hero() {
  return (
    <section id="hero" className="hero-section section">
      {/* Decorative Blur Orbs */}
      <div className="hero-orb orb-1"></div>
      <div className="hero-orb orb-2"></div>

      <div className="hero-container container">
        <div className="hero-content animate-fade-in-up">
          <span className="hero-tagline">Estilo • Cuidado • Bienestar</span>
          <h1 className="hero-title">
            Mima tu cabello en <span className="text-highlight">Pepa Peluquería</span>
          </h1>
          <p className="hero-description">
            Peluquería solo de señora, con un gran abanico de tratamientos para el cabello, perfeccionada en coloración y recogidos.
          </p>
          <div className="hero-actions">
            <a href="#reservar" className="btn btn-primary btn-large">
              Reservar Cita
            </a>
            <a href="#servicios" className="btn btn-outline btn-large">
              Ver Servicios
            </a>
          </div>
          
          {/* Quick highlights */}
          <div className="hero-stats">
            <div className="stat-item">
              <span className="stat-number">10+</span>
              <span className="stat-label">Años de Exp.</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">100%</span>
              <span className="stat-label">Productos Premium</span>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <span className="stat-number">5.0★</span>
              <span className="stat-label">Valoración Clientes</span>
            </div>
          </div>
        </div>

        <div className="hero-image-wrapper">
          <div className="hero-image-backdrop animate-pulse-soft"></div>
          <div className="hero-image-frame animate-float">
            <img 
              src="/hero_salon.png" 
              alt="Pepa Pelukera Salón Interior" 
              className="hero-image"
            />
          </div>
          {/* Accent decoration */}
          <div className="hero-image-badge glass animate-float">
            <span className="badge-icon">✨</span>
            <div className="badge-text">
              <h4>Atención VIP</h4>
              {/* <p>Diagnóstico gratis</p> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
