import { Link } from "react-router-dom";

export const Navbar = () => {



	return (
		<nav className="navbar bg-body-tertiary">
			<div className="container-fluid">
				<Link to="/">
					<img src="https://cdn.pixabay.com/photo/2017/02/23/03/25/yarn-phone-2091195_1280.png" alt="Logo" width="30" height="30" className="d-inline-block align-text-top rounded-3"></img>
					<span className="navbar-brand mb-0 h1 p-3 mt-2">Contact List</span>
				</Link>
				<div className="ml-auto ">
					<Link to="/contact">
						<button className="btn btn-outline-success me-2 shadow-lg">Contacts</button>
					</Link>
					<Link to="/addcontact">
						<button className="btn btn-outline-success me-2 shadow-lg">Add contact</button>
					</Link>
				</div>
			</div>
		</nav>
	);
};