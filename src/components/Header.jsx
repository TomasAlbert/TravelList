import { useContext } from "react";
import NavbarContext from "../context/NavbarContext.js";

const Header = () => {
	const { isOpen, setIsOpen } = useContext(NavbarContext);
	const handleClick = () => {
		setIsOpen(!isOpen);
	};

	return (
		<header>
			<nav>
				<h1>🌏 Travel list.</h1>
				<button onClick={handleClick} className={`${!isOpen ? "hamburger" : "hamburger active"}`}>
					<div className="line"></div>
					<div className="line"></div>
					<div className="line"></div>
				</button>
			</nav>
		</header>
	);
};

export default Header;
