import { createSlice } from "@reduxjs/toolkit";
import { restaurantsData } from "../RestaurantData";
export const cuisineData = [
  { id: 1, name: "Italian", reviews: [], averageRating: 4 },
  { id: 2, name: "Mexican", reviews: [], averageRating: 4 },
  { id: 3, name: "Chinese", reviews: [], averageRating: 4 },
  { id: 4, name: "Indian", reviews: [], averageRating: 4 },
];

const ProductsSlice = createSlice({
  name: "All-products",
  initialState: {
    data: [],
  },
  reducers: {
    chooseProduct: (state, { payload }) => {
      state.data = restaurantsData.find((ele) => ele.id === payload);
    },
    addRating: (state, { payload }) => {
      state.data.ratings.push(payload);
    },
  },
});

export const { chooseProduct, addRating } = ProductsSlice.actions;
export default ProductsSlice.reducer;
