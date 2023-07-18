import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "../store/CartSlice";

function Products() {
	const disPatch = useDispatch();
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const fetchProducts = async () => {
			const res = await fetch("https://fakestoreapi.com/products");
			const data = await res.json();
			console.log(data);
			setProducts(data);
		};
		fetchProducts();
	}, []);

	const handleAdd = (product) => {
		// store this product in redux store
		disPatch(add(product));
	};
	return (
		<div className="productsWrapper">
			{products.map((product) => (
				<div className="card" key={product.id}>
					<img src={product.image} alt={"product image"} />
					<h4>{product.title}</h4>
					<h5>${product.price}</h5>
					<button onClick={() => handleAdd(product)} className="btn">
						Add to cart
					</button>
				</div>
			))}
		</div>
	);
}

export default Products;
