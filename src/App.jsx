import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import Footer from './components/Footer';
import Map from './components/Map';

function App() {
  const [selectedService, setSelectedService] = useState('');

  return (
    <div>
      <Navbar />
      <Hero />
      <Services onSelectService={setSelectedService} />
      <Gallery />
      <Testimonials />
      <Map />
      <Booking selectedService={selectedService} />
      <Footer />
    </div>
  );
}

export default App;
