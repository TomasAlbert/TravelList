import { useEffect, useState } from "react";

const usePins = () => {
	const [pins, setPins] = useState([]);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchPins = async () => {
			try {
				setIsLoading(true);
				const response = await fetch("http://localhost:8080/api/pins");

				if (!response.ok) {
					throw new Error(`HTTP error! Status: ${response.status}`);
				}

				const data = await response.json();
				setPins(data);
			} catch (error) {
				console.error("Error fetching pins:", error);
			} finally {
				setIsLoading(false);
			}
		};

		fetchPins();
	}, []);

	return { pins, setPins, isLoading };
};

export default usePins;
