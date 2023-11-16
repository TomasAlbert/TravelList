import SidebarHeading from "./SidebarHeading";
import TravelCardList from "./TravelCardList";

const SideBar = ({ pins, isLoading, onItemdPinDelete, onCardClick }) => {
	return (
		<aside className="sidebar">
			<SidebarHeading heading={"Tvoj travel list."} />
			<TravelCardList pins={pins} isLoading={isLoading} onItemdPinDelete={onItemdPinDelete} onCardClick={onCardClick} />
		</aside>
	);
};

export default SideBar;
