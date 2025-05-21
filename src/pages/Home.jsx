
import useGlobalReducer from "../hooks/useGlobalReducer.jsx";

export const Home = () => {

  const {store, dispatch} =useGlobalReducer()

	return (
		<div className="text-center mt-5 bg-dark text-light">
			<h3>Keep your contacts here!</h3>
			<p>
				<img className="w-25" src="https://cdn.pixabay.com/photo/2017/02/23/03/25/yarn-phone-2091195_1280.png" />
			</p>
		</div>
	);
}; 