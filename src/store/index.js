import { configureStore } from "@reduxjs/toolkit";
import { ingredientsSlice } from "./ingredients";
import { recipesSlice } from "./recipes";
import { messageSlice } from "./message";

const store = configureStore({
  reducer: {
    recipes: recipesSlice.reducer,
    ingredients: ingredientsSlice.reducer,
    message: messageSlice.reducer,
  },
});

export default store;
