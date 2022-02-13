import { MapElement } from "./MapComponent.styled";
import { MapContainer, TileLayer, Marker } from "react-leaflet";
import "./react-leaflet.css"
import L from 'leaflet';
import IconLocation from "../../assets/icon-location.svg"

const MapComponent = ({lat, long}) => {
  
  const MarkerIcon = new L.Icon({
    iconUrl: IconLocation,
    iconSize: new L.Point(46, 56),
    className: 'awesome-marker-icon-transparent'
  }); 

  return (
    <MapElement>
      <MapContainer center={[lat, long]} zoom={20}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, long]} icon={MarkerIcon}>
        </Marker>
      </MapContainer> 
    </MapElement>
  );
}
 
export default MapComponent;
