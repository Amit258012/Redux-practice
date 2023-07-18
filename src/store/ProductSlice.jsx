import { createSlice } from "@reduxjs/toolkit";

export const STATUSES = Object.freeze({
	IDLE: "idle",
	ERROR: "error",
	LOADING: "loading",
});

const initialState = {
	data: [],
	status: STATUSES.IDLE,
};

const productSlice = createSlice({
	name: "product",
	initialState,
	reducers: {
		setProducts(state, action) {
			//! Never call fetch here
			state.data = action.payload;
		},
		setStatus(state, action) {
			state.status = action.payload;
		},
	},
});

export const { setProducts, setStatus } = productSlice.actions;
export default productSlice.reducer;

// Thunks (MiddleWare)

export function fetchProducts() {
	return async function fetchProductThunk(dispatch, getState) {
		dispatch(setStatus(STATUSES.LOADING));
		try {
			const res = await fetch("https://fakestoreapi.com/products");
			const data = await res.json();
			dispatch(setProducts(data));
			dispatch(setStatus(STATUSES.IDLE));
		} catch (error) {
			console.log(error);
			dispatch(setStatus(STATUSES.ERROR));
		}
	};
}
