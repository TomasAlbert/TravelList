import SidebarHeading from "./SidebarHeading";
import TravelCardList from "./TravelCardList";
import { useContext } from "react";
import NavbarContext from "../context/NavbarContext.js";

const SideBar = ({ pins, isLoading, onItemdPinDelete, onCardClick }) => {
	const { isOpen } = useContext(NavbarContext);

	return (
		<aside className={!isOpen ? "sidebar" : "sidebar active"}>
			<SidebarHeading heading={"Tvoj travel list."} />
			<TravelCardList pins={pins} isLoading={isLoading} onItemdPinDelete={onItemdPinDelete} onCardClick={onCardClick} />
		</aside>
	);
};

export default SideBar;
