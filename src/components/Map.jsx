import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import LocationMarker from "./LocationMarker";
import LocationPreview from "./LocationPreview.jsx";
import PinsList from "./PinsList.jsx";
import { useRef, useState, useEffect } from "react";

const Map = ({ onAddLocation, pins, onFirstMark, cardCors }) => {
	const [location, setLocation] = useState(null);

	const addLocation = (LatLng) => {
		setLocation(() => [LatLng.lat, LatLng.lng]);
	};

	const markerElement = useRef();
	const handleFirstMarker = () => {
		onFirstMark(markerElement);
	};

	useEffect(() => {
		if (markerElement.current) {
			markerElement.current.openPopup();
		}
	}, [location]);

	return (
		<MapContainer center={[41.505, -0.09]} zoom={5}>
			<LocationMarker cardCors={cardCors} onMapClick={addLocation} />
			<TileLayer minZoom={3} noWrap={true} attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors' url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
			{location ? (
				<Marker
					ref={markerElement}
					position={location}
					eventHandlers={{
						add: handleFirstMarker,
					}}
				>
					<Popup>
						<LocationPreview onAddLocation={onAddLocation} location={location} />
					</Popup>
				</Marker>
			) : (
				""
			)}
			<PinsList pins={pins} />
		</MapContainer>
	);
};

export default Map;
