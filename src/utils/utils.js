import axios from "axios";

const getLocationData = async (latitude, longitude) => {
	const response = await axios.get(`https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${latitude}&longitude=${longitude}&localityLanguage=sk`);
	return response.data;
};

const getCountryInfo = async (isoName) => {
	const response = await axios.get(`https://restcountries.com/v3.1/name/${isoName}`);
	return response.data[0];
};

const toastOptions = {
	position: "bottom-right",
	autoClose: 2000,
	hideProgressBar: false,
	closeOnClick: true,
	pauseOnHover: true,
	draggable: true,
	progress: undefined,
	theme: "light",
};

export { getLocationData, getCountryInfo, toastOptions };
