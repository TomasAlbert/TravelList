import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";

const App = () => {
	return (
		<>
			<Header />
			<HomePage />
			<ToastContainer position="top-rigth" autoClose={2000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover theme="light" />
		</>
	);
};

export default App;
