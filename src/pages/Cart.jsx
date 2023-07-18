import { useSelector, useDispatch } from "react-redux";
import { remove } from "../store/CartSlice";

function Cart() {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.cart);
	const handleRemove = (id) => {
		dispatch(remove(id));
	};

	return (
		<div>
			<h3>Cart</h3>
			<div className="cartWrapper">
				{products.map((product) => (
					<div key={product.id} className="cartCard">
						<img src={product.image} alt="" />
						<h5>{product.title}</h5>
						<h4>{product.price}</h4>
						<button
							onClick={() => handleRemove(product.id)}
							className="btn">
							Remove
						</button>
					</div>
				))}
			</div>
		</div>
	);
}

export default Cart;
