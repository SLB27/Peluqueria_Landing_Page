import { useState } from 'react';
import './Gallery.css';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Balayage Oro Rosa',
    category: 'color',
    image: '/balayage.png',
    description: 'Aclarado difuminado con matices oro rosa y pastel.'
  },
  {
    id: 2,
    title: 'Recogido Romántico',
    category: 'peinado',
    image: '/updo.png',
    description: 'Recogido de novia con flores preservadas naturales.'
  },
  {
    id: 3,
    title: 'Manicura Glitter Rose',
    category: 'manicura',
    image: '/manicure.png',
    description: 'Uñas acrílicas con destellos y detalles en foil de oro rosa.'
  },
  {
    id: 4,
    title: 'Corte Bob Desfilado',
    category: 'peinado',
    image: '/updo.png', // Fallback or reused
    description: 'Corte moderno con textura y movimiento natural.'
  },
  {
    id: 5,
    title: 'Balayage Vainilla & Caramelo',
    category: 'color',
    image: '/balayage.png', // Fallback or reused
    description: 'Contraste cálido y luminoso para bases oscuras.'
  },
  {
    id: 6,
    title: 'Diseño Minimalista Pastel',
    category: 'manicura',
    image: '/manicure.png', // Fallback or reused
    description: 'Esmaltado semipermanente con motivos geométricos.'
  }
];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('todos');

  const filteredItems = activeFilter === 'todos' 
    ? GALLERY_ITEMS 
    : GALLERY_ITEMS.filter(item => item.category === activeFilter);

  return (
    <section id="galeria" className="gallery-section section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Portafolio</span>
          <h2>Nuestras Creaciones</h2>
          <p>
            Mira el resultado de nuestro trabajo. Diseños únicos creados con pasión y
            atención al detalle para cada cliente.
          </p>
        </div>

        {/* Filter Navigation */}
        <div className="gallery-filters">
          <button 
            className={`filter-btn ${activeFilter === 'todos' ? 'active' : ''}`}
            onClick={() => setActiveFilter('todos')}
          >
            Todos
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'color' ? 'active' : ''}`}
            onClick={() => setActiveFilter('color')}
          >
            Coloración
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'peinado' ? 'active' : ''}`}
            onClick={() => setActiveFilter('peinado')}
          >
            Cortes & Peinados
          </button>
          <button 
            className={`filter-btn ${activeFilter === 'manicura' ? 'active' : ''}`}
            onClick={() => setActiveFilter('manicura')}
          >
            Manicura
          </button>
        </div>

        {/* Image Grid */}
        <div className="gallery-grid">
          {filteredItems.map(item => (
            <div key={item.id} className="gallery-item animate-fade-in">
              <div className="gallery-image-wrapper">
                <img src={item.image} alt={item.title} className="gallery-image" />
                <div className="gallery-overlay">
                  <div className="overlay-content">
                    <span className="item-category-label">
                      {item.category === 'color' ? 'Coloración' : item.category === 'peinado' ? 'Peinado' : 'Manicura'}
                    </span>
                    <h4 className="item-title">{item.title}</h4>
                    <p className="item-description">{item.description}</p>
                    <a href="#reservar" className="item-link">
                      Quiero este estilo <span>→</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
