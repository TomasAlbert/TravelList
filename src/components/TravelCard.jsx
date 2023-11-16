/* eslint-disable react/prop-types */
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "react-toastify";

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

const TravelCard = ({ pin, onItemdPinDelete, onCardClick }) => {
	const handleDelete = async (id) => {
		try {
			if (!id) {
				console.error("Invalid pin ID");
				return;
			}

			const response = await fetch(`http://localhost:8080/api/pins/${id}`, {
				method: "DELETE",
			});

			if (response.ok) {
				onItemdPinDelete((prev) => prev.filter((pin) => pin._id !== id));
				toast.success("Miesto úspešné vymazané !", toastOptions);
			} else {
				console.error("Failed to delete pin");
			}
		} catch (error) {
			console.error("Error fetching pins:", error);
		}
	};
	return (
		<AnimatePresence key={pin._id}>
			<motion.div layout initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 20 }} transition={{ type: "spring", stiffness: 100 }} onClick={() => onCardClick(pin.lat, pin.long)} className="travel-card">
				{pin.svg ? <img src={pin.svg} alt={`vlajka štátu ${pin.country}`} /> : ""}
				<div className="travel-card-info">
					<h6>Kontinent</h6>
					<span>{pin.continent} </span>
				</div>
				<div className="travel-card-info">
					<h6>Krajina</h6>
					<span>{pin.country} </span>
				</div>
				<div className="travel-card-info">
					<h6>Mesto</h6>
					<span>{pin.city} </span>
				</div>
				<svg onClick={() => handleDelete(pin._id)} className="delete-item" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
					<path d="M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z" />
				</svg>
			</motion.div>
		</AnimatePresence>
	);
};

export default TravelCard;
