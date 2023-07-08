import { configureStore } from "@reduxjs/toolkit";
import ProductsSlice from "./Products";

export const store = configureStore({
  reducer: {
    chooseProducts: ProductsSlice,
  },
});
