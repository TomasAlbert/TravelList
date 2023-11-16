import SideBar from "../components/SideBar";
import Map from "../components/Map";
import { useState } from "react";
import { useEffect } from "react";

const HomePage = () => {
	const [cardCors, setCardCors] = useState([]);
	const [pins, setPins] = useState([]);

	const handleFirstMarker = (element) => {
		element.current.openPopup();
	};
	const onCardClick = (lat, long) => {
		setCardCors([lat, long]);
	};

	useEffect(() => {
		const pins = JSON.parse(localStorage.getItem("countries"));
		if (pins) {
			setPins(pins);
		}
	}, []);

	return (
		<main>
			<SideBar onItemdPinDelete={setPins} onCardClick={onCardClick} pins={pins} onAddLocation={setPins} />
			<Map onFirstMark={handleFirstMarker} pins={pins} onAddLocation={setPins} cardCors={cardCors} />
		</main>
	);
};

export default HomePage;
