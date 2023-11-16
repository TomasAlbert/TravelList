import Pin from "./Pin";

const PinsList = ({ pins }) => {
	return (
		<>
			{pins?.map((pin) => {
				return <Pin key={pin._id} pin={pin} />;
			})}
		</>
	);
};

export default PinsList;
