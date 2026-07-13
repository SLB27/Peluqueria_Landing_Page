import { useState, useEffect } from 'react';
import './Booking.css';

export default function Booking({ selectedService }) {
  const [formData, setFormData] = useState({
    name: '',
    service: '',
    date: '',
    time: '',
    notes: ''
  });


  const MENSAJE = `Hola, Soy ${formData.name} y me gustaría reservar una cita el dia ${formData.date} a las ${formData.time} para el servicio de ${formData.service}. ${formData.notes ? `Notas: ${formData.notes}` : ''}`;
  
  useEffect(() => {
    if (selectedService) {
      setFormData(prev => ({ ...prev, service: selectedService }));
    }
  }, [selectedService]);

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, service, date, time } = formData;
    
    if (!name || !service || !date || !time) {
      setError('Por favor, rellena todos los campos obligatorios.');
      return;
    }

    setError('');
    setIsSubmitted(true);
    window.open(`https://wa.me/34646688589?text=${MENSAJE}`, '_blank');
  };

  const handleReset = () => {
    setFormData({
      name: '',
      service: '',
      date: '',
      time: '',
      notes: ''
    });
    setIsSubmitted(false);
  };

  return (
    <section id="reservar" className="booking-section section">
      <div className="container">
        <div className="booking-grid">
          {/* Info Side */}
          <div className="booking-info">
            <span className="booking-tagline">Contactanos</span>
            <h2>Reserva tu momento de mimos</h2>
            <p className="booking-desc">
              Selecciona el servicio, el día y la hora que mejor te vengan. Si tienes dudas, 
              déjanos una nota y nos pondremos en contacto contigo.
            </p>

            <div className="info-list">
              <div className="info-item">
                <div className="info-icon">🕒</div>
                <div className="info-text">
                  <h4>Horario de Apertura</h4>
                  <p>Lunes: 10:00 - 13:00</p>
                  <p>Martes a Viernes: 10:30 - 13:30, 16:30 - 19:00</p>
                  <p>Sábados: 09:00 - 14:00</p>
                </div>
              </div>

              <div className="info-item">
                <div className="info-icon">📍</div>
                <div className="info-text">
                  <h4>Dónde Estamos</h4>
                  <p>Calle Calamón, 29140 Churriana, Málaga</p>
                </div>
              </div>
            </div>

            <div className="booking-policy glass">
              <p>
                <strong>Nota de Cancelación:</strong> Si no puedes asistir, por favor infórmanos con un mínimo de 24 horas de antelación para que otra persona pueda aprovechar la cita.
              </p>
            </div>
          </div>

          {/* Form Side */}
          <div className="booking-form-wrapper" id="booking-form-container">
            {!isSubmitted ? (
                <form onSubmit={handleSubmit} className="booking-form glass">
                  <h3 className="form-title">Manda un <span>Whatsapp</span></h3>
                  
                  {error && <div className="form-error-msg">{error}</div>}

                  <div className="form-group">
                    <label htmlFor="name">Nombre Completo *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      placeholder="Tu nombre y apellidos"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="service">Servicio Deseado *</label>
                    <select 
                      id="service" 
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      required
                    >
                      <option value="" disabled>Selecciona un servicio</option>
                      <option value="Solo cortar">Solo Corte</option>
                      <option value="Lavar + Peinar">Lavado & Peinado</option>
                      <option value="Lavar + Cortar + Peinar">Lavado, Corte & Peinado</option>
                      <option value="Color + Cortar">Coloración & Corte</option>
                      <option value="Color + Cortar + Peinar">Coloración, Corte & Peinado</option>
                      <option value="Color + 1/2 Mechas + Peinar">Coloración, 1/2 Mechas & Peinado</option>
                      <option value="1/2 Cabeza Mechas">1/2 Cabeza de Mechas</option>
                      <option value="Mechas Cabeza Completa">Cabeza Completa de Mechas</option>
                      <option value="Permanente">Permanente</option>
                    </select>
                  </div>

                  <div className="form-row">
                    <div className="form-group">
                      <label htmlFor="date">Fecha *</label>
                      <input 
                        type="date" 
                        id="date" 
                        name="date"
                        value={formData.date}
                        onChange={handleChange}
                        required
                      />
                    </div>

                    <div className="form-group">
                      <label htmlFor="time">Hora *</label>
                      <input 
                        type="time" 
                        id="time" 
                        name="time"
                        value={formData.time}
                        onChange={handleChange}
                        required
                      />
                    </div>
                  </div>

                  <div className="form-group">
                    <label htmlFor="notes">Notas o Comentarios (Opcional)</label>
                    <textarea 
                      id="notes" 
                      name="notes" 
                      rows="3"
                      placeholder="Cuéntanos si tienes alguna preferencia o necesidad especial..."
                      value={formData.notes}
                      onChange={handleChange}
                    ></textarea>
                  </div>

                  <button type="submit" className="btn btn-booking form-submit-btn">
                        Reservar Cita
                  </button>
                </form>
            ) : (
              <div className="booking-success-card glass animate-fade-in">
                <div className="success-icon-wrapper">
                  <span className="success-check">✓</span>
                </div>
                <h3>¡Cita Solicitada!</h3>
                <p className="success-intro">
                  Hemos registrado los detalles de tu solicitud. Te enviaremos un WhatsApp de confirmación en unos minutos.
                </p>

                <div className="success-summary">
                  <div className="summary-row">
                    <span className="summary-label">Cliente:</span>
                    <span className="summary-val">{formData.name}</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Servicio:</span>
                    <span className="summary-val">{formData.service}</span>
                  </div>
                  <div className="summary-row">
                    <span className="summary-label">Fecha y Hora:</span>
                    <span className="summary-val">{formData.date} a las {formData.time} hs</span>
                  </div>
                </div>
                <button onClick={handleReset} className="btn btn-secondary success-btn">
                  Hacer Otra Reserva
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
