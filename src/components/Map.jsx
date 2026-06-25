import { APIProvider, Map, AdvancedMarker, Pin } from "@vis.gl/react-google-maps";
import "./Map.css";

const UBICACION = {
    lat: 36.66406093743267,
    lng: -4.501924947195249
};

export default function MapaPeluqueria() {
    return (
    <section id="map" className="section">
        <div className="container">
            <div className="section-header">
                <span className="subtitle">Donde Estamos</span>
                <h2>Nuestro Local</h2>
                <p>
                    Nuestra Peluquería se encuentra en el corazón de la localidad de Churriana, en la provincia de Málaga. Ven a visitarnos y disfruta de un ambiente acogedor y profesional, donde tu cabello recibirá el cuidado que merece.
                </p>
            </div>
            <div className="map-container">
                <APIProvider apiKey={import.meta.env.VITE_GOOGLE_MAPS_KEY}>
                    <div className="map-container">
                        <Map defaultCenter={UBICACION} defaultZoom={16} mapId={"peluqueria-map"}>
                            <AdvancedMarker position={UBICACION}>
                            <Pin background={"var(--color-pink-brand)"} borderColor={"var(--color-pink-dark)"} glyphColor={"#fff"} />
                            </AdvancedMarker>
                        </Map>
                    </div>
                </APIProvider>
            </div>
        </div>
    </section>
    );
}
