import { configureStore } from "@reduxjs/toolkit";
import cartreducer from "./CartSlice";
import productreducer from "./ProductSlice";

const store = configureStore({
	reducer: {
		cart: cartreducer,
		product: productreducer,
	},
});

export default store;
