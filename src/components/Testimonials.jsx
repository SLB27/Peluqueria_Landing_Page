import './Testimonials.css';

const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Laura Martín',
    role: 'Cliente Habitual (Balayage)',
    quote: '¡El mejor balayage que me he hecho jamás! Pepa entendió perfectamente lo que quería y cuidó mi cabello con un mimo increíble. El salón es precioso y los detalles en rosa te hacen sentir en un palacio de relajación.',
    rating: 5,
    avatar: '👩'
  },
  {
    id: 2,
    name: 'Sofía Gómez',
    role: 'Cliente Fiel (Tratamiento Queratina)',
    quote: 'Un trato de diez. Fui por un tratamiento de queratina y mi pelo ha recuperado toda su suavidad y brillo. Se nota la calidad de los productos orgánicos que utilizan. 100% recomendado.',
    rating: 5,
    avatar: '👱‍♀️'
  },
  {
    id: 3,
    name: 'Marta Ruiz',
    role: 'Invitada de Boda (Peinado & Uñas)',
    quote: 'Excelente servicio de manicura y peinado para un evento especial. Me sentí súper mimada. El ambiente rosa es súper chic y relajante. ¡Sin duda mi nueva peluquería de referencia!',
    rating: 5,
    avatar: '👩‍🦰'
  }
];

export default function Testimonials() {
  return (
    <section id="testimonios" className="testimonials-section section">
      {/* Background shape */}
      <div className="testimonials-bg-shape"></div>

      <div className="container">
        <div className="section-header">
          <span className="subtitle">Opiniones</span>
          <h2>Lo Que Dicen Nuestras Clientes</h2>
          <p>
            La satisfacción y la sonrisa de nuestras clientas al salir por la puerta es 
            nuestra mayor recompensa. Descubre sus experiencias.
          </p>
        </div>

        <div className="testimonials-grid">
          {TESTIMONIALS_DATA.map((t, index) => (
            <div key={t.id} className="testimonial-card glass" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="testimonial-header">
                <div className="stars-rating">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <span key={i} className="star">★</span>
                  ))}
                </div>
                {/* SVG Quote Icon */}
                <span className="quote-icon">
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2H4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2h4c0 4-4 6-4 6M13 21c3 0 7-1 7-8V5c0-1.25-.75-2-2-2h-4c-1.25 0-2 .75-2 2v4c0 1.25.75 2 2 2h4c0 4-4 6-4 6" />
                  </svg>
                </span>
              </div>
              
              <p className="testimonial-quote">“{t.quote}”</p>
              
              <div className="testimonial-author">
                <div className="author-avatar">{t.avatar}</div>
                <div className="author-info">
                  <h4>{t.name}</h4>
                  <p>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
