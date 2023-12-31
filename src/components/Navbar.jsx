import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
	const items = useSelector((state) => state.cart);
	return (
		<div
			style={{
				display: "flex",
				alignItems: "center",
				justifyContent: "space-between",
				backgroundColor: "#cdb0fd",
				padding: "20px",
				width: "98%",
				position: "fixed",
				top: "0",
			}}>
			<span className="logo">Redux Store</span>
			<div>
				<Link className="navLink" to="/">
					Home
				</Link>
				<Link className="navLink" to="/cart">
					Cart
				</Link>
			</div>
			<span className="cartCount">Cart items: {items.length}</span>
		</div>
	);
};

export default Navbar;
