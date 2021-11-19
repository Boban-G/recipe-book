import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  ingredients: [
    {
      ingredient: "Flour",
      amountType: "kg",
    },
    {
      ingredient: "Milk",
      amountType: "l",
    },
    {
      ingredient: "Oil",
      amountType: "l",
    },
    {
      ingredient: "Salt",
      amountType: "tbsp",
    },
    {
      ingredient: "Sugar",
      amountType: "tbsp",
    },
    {
      ingredient: "Eggs",
      amountType: "",
    },
    {
      ingredient: "Tomatoes",
      amountType: "",
    },
    {
      ingredient: "Peppers",
      amountType: "",
    },
    {
      ingredient: "Cheese",
      amountType: "kg",
    },
    {
      ingredient: "Potatoes",
      amountType: "kg",
    },
    {
      ingredient: "Meat",
      amountType: "kg",
    },
  ],
};

export const ingredientsSlice = createSlice({
  name: "ingredients",
  initialState,
  reducers: {
    addIngredient(state, action) {
      state.ingredients = [...state.ingredients, action.payload.ingredient];
    },
    editIngredient(state, action) {
      const indexOfIngredient = state.ingredients.indexOf(
        (el) => el.id === action.payload.id
      );
      state.ingredients[indexOfIngredient] = action.payload.ingredient;
    },
    deleteIngredient(state, action) {
      state.ingredients = state.ingredients.filter(
        (ingredient) => ingredient.uniqueID !== action.payload.id
      );
    },
  },
});

export const { addIngredient, editIngredient, deleteIngredient } =
  ingredientsSlice.actions;
