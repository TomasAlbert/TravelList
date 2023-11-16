import { useMapEvents } from "react-leaflet";
import { useEffect } from "react";

const LocationMarker = ({ onMapClick, cardCors }) => {
	const map = useMapEvents({
		click: (e) => {
			onMapClick(e.latlng);
		},
	});

	useEffect(() => {
		if (cardCors && Object.keys(cardCors).length > 0) {
			map.flyTo(cardCors, map.getZoom(0));
		}
	}, [cardCors, map]);

	return null;
};

export default LocationMarker;
