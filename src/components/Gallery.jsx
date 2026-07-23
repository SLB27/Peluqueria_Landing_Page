import { useState } from 'react';
import './Gallery.css';

const GALLERY_ITEMS = [
  {
    id: 1,
    title: 'Mechas naturales con acabado premium',
    category: 'color',
    image: '/foto_mechas.jpeg',
    description: 'Consigue una melena más luminosa sin renunciar a la naturalidad.',
    url: 'https://www.instagram.com/lapepapeluqueria/'
  },
  {
    id: 2,
    title: 'Peinado con ondas Glam estilo Hollywood',
    category: 'peinado',
    image: '/ondas_hollywood.jpeg',
    description: 'Un look clásico, elegante y sofisticado, ideal para bodas o eventos.',
    url: 'https://www.instagram.com/lapepapeluqueria/'
  },
  {
    id: 3,
    title: 'Peinado muy favorecedor, fresco y con un toque romántico',
    category: 'peinado',
    image: '/peinado_boda.jpeg', 
    description: 'Look ideal para invitadas de boda, graduaciones o eventos de noche. ',
    url: 'https://www.instagram.com/lapepapeluqueria/'
  },
  {
    id: 4,
    title: 'Experta en cambios de look dramáticos y personalizados.',
    category: 'color',
    image: '/cambio_look.jpeg', 
    description: 'Transformamos tu estilo con diseños únicos y personalizados para cada cliente.',
    url: 'https://www.instagram.com/lapepapeluqueria/'
  },
  {
    id: 5,
    title: 'Extensiones adhesivas Premium',
    category: 'color',
    image: '/extensiones_premium.jpeg', 
    description: 'Extensiones de alta calidad con acabado natural y duradero.',
    url: 'https://www.instagram.com/p/DQ1jbbHCOG1/'
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
          <span className="subtitle">Galería</span>
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
                      {item.category === 'color' ? 'Coloración' : 'Peinado' }
                    </span>
                    <h4 className="item-title">{item.title}</h4>
                    <p className="item-description">{item.description}</p>
                    <div className="links-container">
                      <a href="#reservar" className="item-link">
                        Quiero este estilo <span>→</span>
                      </a>
                      <a href={item.url} className="item-link">
                        Ver más...
                      </a>
                    </div>
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
