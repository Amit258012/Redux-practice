import { useState, useEffect } from "react";
function Products() {
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
	return (
		<div className="productsWrapper">
			{products.map((product) => (
				<div className="card" key={product.id}>
					<img src={product.image} alt="product image" />
					<h4>{product.title}</h4>
					<h5>${product.price}</h5>
					<button className="btn">Add to cart</button>
				</div>
			))}
		</div>
	);
}

export default Products;