import Spinner from "../components/Spinner";
import TravelCard from "./TravelCard";

const TravelCardList = ({ pins, isLoading, onItemdPinDelete, onCardClick }) => {
	return <div className="travel-cards">{pins && pins.length > 0 ? <>{!isLoading ? pins.map((pin) => <TravelCard pin={pin} key={pin._id} onItemdPinDelete={onItemdPinDelete} onCardClick={onCardClick} />) : <Spinner />}</> : <p>Tvoj travel list je prázdny.😥</p>}</div>;
};

export default TravelCardList;
