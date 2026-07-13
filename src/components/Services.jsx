import './Services.css';
import { Drops, Scissor12, ScissorsCoupon2, Water, Colorfilter2, ColorSwatch2, Bucket2, SideProfile, Tornado } from 'reicon-react';


const SERVICES_DATA = [
  {
    id: 'Solo cortar',
    title: 'Solo Corte',
    subtitle: 'Corte Personalizado',
    description: 'Cortes personalizados que se adaptan a tus facciones y estilo de vida.',
    price: 'desde 15€',
    duration: '15-30 min',
    icon: (
      <Scissor12 size={24} weight="Filled" />
    )
  },
  {
    id: 'Lavar + Peinar',
    title: 'Lavado y Peinado',
    subtitle: 'Cuidado y Estilo',
    description: 'Lavados profesionales con masaje capilar y peinados que resaltan tu estilo personal.',
    price: 'desde 20€',
    duration: '30-45 min',
    icon: (
      <Water size={24} />
    )
  },
  {
    id: 'Lavar + Cortar + Peinar',
    title: 'Lavado, Corte y Peinado',
    subtitle: 'Cuidado y Estilo',
    description: 'Lavados profesionales con masaje capilar, cortes personalizados y peinados.',
    price: 'desde 35€',
    duration: '45-60 min',
    icon: (
      <Drops size={24} weight="Filled" />
    )
  },
  {
    id: 'Color + Cortar',
    title: 'Coloración y Corte',
    subtitle: 'Brillo y Dimensión',
    description: 'Coloración profesional con productos de alta calidad, combinada con cortes que realzan tu estilo.',
    price: 'desde 40€',
    duration: '60-80 min',
    icon: (
      <ScissorsCoupon2 size={24} weight="Filled" />
    )
  },
  {
    id: 'Color + Cortar + Peinar',
    title: 'Coloración, Corte y Peinado',
    subtitle: 'Brillo y Estilo',
    description: 'Coloración profesional con productos de alta calidad, combinada con cortes y peinados que embellecen tu estilo.',
    price: 'desde 55€',
    duration: '80-100 min',
    icon: (
      <Colorfilter2 size={24} weight="Filled" />
    )
  },
  {
    id: 'Color + 1/2 Mechas + Peinar',
    title: 'Coloración, 1/2 Mechas y Peinado',
    subtitle: 'Brillo y Estilo',
    description: 'Coloración profesional con productos de alta calidad, combinada con mechas parciales y peinado.',
    price: 'desde 65€',
    duration: '80-100 min',
    icon: (
      <Bucket2 size={24} weight="Filled" />
    )
  },
  {
    id: '1/2 Cabeza Mechas',
    title: '1/2 Cabeza de Mechas',
    subtitle: 'Brillo y Dimensión',
    description: 'Mechas parciales para añadir brillo y dimensión a tu cabello, con productos de alta calidad.',
    price: 'desde 65€',
    duration: '80-100 min',
    icon: (
      <ColorSwatch2 size={24} weight="Filled" />
    )
  },
  {
    id: 'Mechas Cabeza Completa',
    title: 'Cabeza Completa de Mechas',
    subtitle: 'Brillo y Dimensión',
    description: 'Mechas completas para añadir brillo y dimensión a tu cabello, con productos de alta calidad.',
    price: 'desde 85€',
    duration: '100-120 min',
    icon: (
      <SideProfile size={24} weight="Filled" />
    )
  },
  {
    id: 'Permanente',
    title: 'Tratamiento Permanente',
    subtitle: 'Cuidado y Estilo',
    description: 'Tratamiento permanente para mejorar la salud y apariencia de tu cabello.',
    price: 'desde 70€',
    duration: '60-80 min',
    icon: (
      <Tornado size={24} />
    )
  }
];

export default function Services({ onSelectService }) {
  const handleReserve = (serviceId) => {
    onSelectService(serviceId);
    document.getElementById('reservar').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="servicios" className="services-section section">
      <div className="container">
        <div className="section-header">
          <span className="subtitle">Nuestros Servicios</span>
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

              <div className="service-card-footer">
                <div className="service-meta">
                  <span className="price-tag">{service.price}</span>
                  <span className="duration-tag">{service.duration}</span>
                </div>
                <button
                  type="button"
                  className="btn btn-outline service-btn"
                  onClick={() => handleReserve(service.id)}
                >
                  Reservar
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="services-footer-banner glass">
          <div className="banner-content">
            <h3>¡¡¡Mis precios dependerán del largo y cantidad de tu cabello Mari Pepa!!!</h3>
          </div>
        </div>
      </div>
    </section>
  );
}
