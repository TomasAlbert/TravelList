import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Spinner from "./Spinner";
import { getLocationData, getCountryInfo, toastOptions } from "../utils/utils.js";

const LocationPreview = ({ location, onAddLocation }) => {
	const [clickedLocationData, setClickedLocationData] = useState({});
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				if (location) {
					setError(null);
					const data = await getLocationData(location[0], location[1]);
					setClickedLocationData(data);
					setIsLoading(false);
				}
			} catch (error) {
				setError(error);
				setIsLoading(false);
			}
		};

		fetchData();
	}, [location]);

	const submitLocationHandler = async () => {
		try {
			setIsLoading(true);

			if (location) {
				const isoName = clickedLocationData.localityInfo.administrative[0].isoName === "Russian Federation (the)" ? "russia" : clickedLocationData.localityInfo.administrative[0].isoName;

				const countryInfo = await getCountryInfo(isoName);
				const svg = countryInfo.flags.svg || "";
				const existingEntries = JSON.parse(localStorage.getItem("countries")) || [];
				const entry = {
					_id: Date.now(),
					city: clickedLocationData.city,
					continent: clickedLocationData.continent,
					country: clickedLocationData.countryName,
					lat: location[0],
					long: location[1],
					isoName: clickedLocationData.localityInfo.administrative[0].isoName,
					svg: svg,
				};
				existingEntries.push(entry);
				localStorage.setItem("countries", JSON.stringify(existingEntries));

				onAddLocation((prev) => [...prev, entry]);

				setIsLoading(false);

				toast.success("Miesto úspešné pridané !", toastOptions);
			}
		} catch (error) {
			setIsLoading(false);

			if (error.response && error.response.status === 404 && clickedLocationData.city && clickedLocationData.continent && clickedLocationData.countryName) {
				const existingEntries = JSON.parse(localStorage.getItem("countries")) || [];
				const entry = {
					_id: Date.now(),
					city: clickedLocationData.city,
					continent: clickedLocationData.continent,
					country: clickedLocationData.countryName,
					lat: location[0],
					long: location[1],
					isoName: clickedLocationData.localityInfo.administrative[0].isoName,
					svg: "",
				};
				existingEntries.push(entry);
				localStorage.setItem("countries", JSON.stringify(existingEntries));

				onAddLocation((prev) => [...prev, entry]);
				toast.success("Miesto úspešné pridané !", toastOptions);
			}
		}
	};

	if (clickedLocationData.city === "" || clickedLocationData.continent === "" || clickedLocationData.countryName === "") {
		return (
			<>
				<h3 className="pick-title">Skús to niekde inde 😥</h3>
			</>
		);
	} else {
		return (
			<>
				{!error ? (
					<div className="big-pin">
						{!isLoading ? (
							<>
								<h3 className="pick-title">🌏 Chcem navštíviť ?</h3>
								<div className="pick-item">
									<h6>mesto</h6>
									<span>{clickedLocationData.city}</span>
								</div>
								<div className="pick-item">
									<h6>kontinent</h6>
									<span>{clickedLocationData.continent}</span>
								</div>
								<div className="pick-item">
									<h6>krajina</h6>
									<span>{clickedLocationData.countryName}</span>
								</div>
							</>
						) : (
							<Spinner />
						)}

						<button disabled={isLoading} onClick={submitLocationHandler} className="pick-btn">
							{isLoading ? "Načítavam" : "Pridať na travel list"}
						</button>
					</div>
				) : (
					<h3 className="pick-title">Chyba pri načítaní dát</h3>
				)}
			</>
		);
	}
};

export default LocationPreview;
