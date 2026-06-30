import './Testimonials.css';

const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: 'Daniela Imbroda Castillo',
    role: 'Clienta Habitual',
    quote: 'No dejo a otra persona que no sea ella que me toque el pelo es la mejor todo el mundo me dice que quiere mi rubio',
    rating: 5,
    avatar: '👩',
    url: 'https://maps.app.goo.gl/3Aju1DCQtU5EFqhU9'
  },
  {
    id: 2,
    name: 'Lourdes Conejo Gonzalez',
    role: 'Clienta Fiel',
    quote: 'Llevaba mucho tiempo sin peluquera fija, no encontraba ninguna que me encantara al 100% hasta que descubrí a Pepa, siempre sabe lo que quiero y salgo encantada 😍😍, una gran profesional además de un encanto de mujer, la recomiendo muchísimo!!',
    rating: 5,
    avatar: '👱‍♀️',
    url: 'https://maps.app.goo.gl/gsmVy9UCdHQVgnm76'
  },
  {
    id: 3,
    name: 'Carolina J',
    role: 'Clienta Satisfecha',
    quote: 'Estupenda profesional, siempre que voy salgo contenta, sabe asesorar para cada ocasión. Tiene buenos productos, sin duda, muy buena peluquera.',
    rating: 5,
    avatar: '👩‍🦰',
    url: 'https://maps.app.goo.gl/8AjDjQUjinqMNzC67'
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
            <a href={t.url} target="_blank" rel="noopener noreferrer" key={t.id}>
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
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
