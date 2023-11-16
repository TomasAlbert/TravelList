import { Marker, Popup } from "react-leaflet";

const Pin = ({ pin }) => {
	return (
		<Marker position={[pin.lat, pin.long]}>
			<Popup>
				<div className="small-pin">
					<h2>{pin.city}</h2>
					<img src={pin.svg} alt={`vlajka štátu ${pin.country}`} />
				</div>
			</Popup>
		</Marker>
	);
};

export default Pin;
