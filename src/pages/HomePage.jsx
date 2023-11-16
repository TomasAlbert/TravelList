import SideBar from "../components/SideBar";
import Map from "../components/Map";
import { useState } from "react";
import usePins from "../hooks/usePins";
import { useEffect } from "react";

const HomePage = () => {
	const [cardCors, setCardCors] = useState([]);
	const { pins, setPins, isLoading } = usePins();

	const handleFirstMarker = (element) => {
		element.current.openPopup();
	};
	const onCardClick = (lat, long) => {
		setCardCors([lat, long]);
	};
	const [items] = useState([]);

	useEffect(() => {
		localStorage.setItem("items", JSON.stringify(items));
	}, [items]);

	return (
		<main>
			<SideBar isLoading={isLoading} onItemdPinDelete={setPins} onCardClick={onCardClick} pins={pins} onAddLocation={setPins} />
			<Map onFirstMark={handleFirstMarker} pins={pins} onAddLocation={setPins} cardCors={cardCors} />
		</main>
	);
};

export default HomePage;
