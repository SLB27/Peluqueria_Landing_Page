import './Services.css';

const SERVICES_DATA = [
  {
    id: 'corte',
    title: 'Corte & Peinado',
    subtitle: 'Estilo y Definición',
    description: 'Cortes personalizados que se adaptan a tus facciones y estilo de vida, finalizados con peinados espectaculares.',
    price: 'desde 25€',
    duration: '45-60 min',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="6" cy="6" r="3" />
        <circle cx="6" cy="18" r="3" />
        <line x1="20" y1="4" x2="8.12" y2="15.88" />
        <line x1="14.47" y1="14.48" x2="20" y2="20" />
        <line x1="8.12" y1="8.12" x2="12" y2="12" />
      </svg>
    ),
    features: ['Diagnóstico facial gratuito', 'Lavado con masaje capilar', 'Productos hidratantes incluidos']
  },
  {
    id: 'color',
    title: 'Coloración Premium',
    subtitle: 'Brillo y Dimensión',
    description: 'Expertos en técnicas de tendencia como Balayage, Babylights y aclarados naturales que protegen la salud de tu fibra capilar.',
    price: 'desde 65€',
    duration: '120-180 min',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 14.7255 3.09032 17.1962 4.85857 19" />
        <path d="M16 10.5C16 11.8807 14.8807 13 13.5 13C12.1193 13 11 11.8807 11 10.5C11 9.11929 12.1193 8 13.5 8C14.8807 8 16 9.11929 16 10.5Z" />
        <path d="M9 15.5C9 16.8807 7.88071 18 6.5 18C5.11929 18 4 16.8807 4 15.5C4 14.1193 5.11929 13 6.5 13C7.88071 13 9 14.1193 9 15.5Z" />
        <path d="M18.5 15.5C18.5 16.8807 17.3807 18 16 18C14.6193 18 13.5 16.8807 13.5 15.5C13.5 14.1193 14.6193 13 16 13C17.3807 13 18.5 14.1193 18.5 15.5Z" />
      </svg>
    ),
    features: ['Tintes sin amoníaco', 'Terapia Olaplex protectora', 'Brillo espejo de larga duración']
  },
  {
    id: 'tratamiento',
    title: 'Tratamientos de Cuidado',
    subtitle: 'Salud y Nutrición',
    description: 'Tratamientos reconstructores, alisados orgánicos de queratina e hidrataciones intensivas con ácido hialurónico.',
    price: 'desde 35€',
    duration: '45-90 min',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
      </svg>
    ),
    features: ['Hidratación profunda molecular', 'Reconstrucción celular de queratina', 'Diagnóstico con microcámara']
  },
  {
    id: 'estetica',
    title: 'Manicura & Estética',
    subtitle: 'Detalles que Destacan',
    description: 'Manicura semipermanente de diseño, reconstrucción de uñas de gel y servicios de maquillaje profesional para tus ocasiones más especiales.',
    price: 'desde 20€',
    duration: '30-75 min',
    icon: (
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 10 21 8 19.5 6.5C18 5 16 4 14 3.5L12 2Z" />
        <path d="M12 6V12L16 14" />
      </svg>
    ),
    features: ['Nail Art a mano alzada', 'Productos veganos y no tóxicos', 'Tratamiento spa para manos']
  }
];

export default function Services() {
  return (
    <section id="servicios" className="services-section section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Nuestras Especialidades</span>
          <h2>Servicios Exclusivos</h2>
          <p>
            Trabajamos con marcas líderes internacionales para asegurar el brillo, 
            cuidado y salud de tu cabello en cada visita.
          </p>
        </div>

        <div className="services-grid">
          {SERVICES_DATA.map((service, index) => (
            <div key={service.id} className="service-card glass animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <div className="service-icon-wrapper">
                {service.icon}
              </div>
              <span className="service-card-subtitle">{service.subtitle}</span>
              <h3 className="service-card-title">{service.title}</h3>
              <p className="service-card-desc">{service.description}</p>
              
              <ul className="service-features-list">
                {service.features.map((feature, i) => (
                  <li key={i}>
                    <span className="check-icon">✓</span> {feature}
                  </li>
                ))}
              </ul>

              <div className="service-card-footer">
                <div className="service-meta">
                  <span className="price-tag">{service.price}</span>
                  <span className="duration-tag">{service.duration}</span>
                </div>
                <a href="#reservar" className="btn btn-outline service-btn">
                  Reservar
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="services-footer-banner glass">
          <div className="banner-content">
            <h3>¿No sabes qué tratamiento elegir?</h3>
            <p>Agenda un diagnóstico capilar 100% gratuito el día de tu cita. Analizaremos tu tipo de cabello y cuero cabelludo.</p>
          </div>
          <a href="#reservar" className="btn btn-gold">
            Diagnóstico Gratis
          </a>
        </div> */}
      </div>
    </section>
  );
}
