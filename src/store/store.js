import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cart-slice";
import dataSlice from "./data-slice";

const store = configureStore({
  reducer: { cart: cartSlice.reducer, data: dataSlice.reducer },
});

export default store;
