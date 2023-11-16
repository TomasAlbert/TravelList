import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import NavbarContext from "./context/NavbarContext";
import { useState } from "react";

const App = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<>
			<NavbarContext.Provider value={{ isOpen, setIsOpen }}>
				<Header />
				<HomePage />
				<ToastContainer position="top-right" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
			</NavbarContext.Provider>
		</>
	);
};

export default App;
