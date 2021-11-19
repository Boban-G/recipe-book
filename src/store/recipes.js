import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  recipes: [
    {
      uniqueID: 1,
      name: "eggs",
      source: "#",
      ingredients: [
        { ingredient: "egg", amount: 4, amountType: "" },
        { ingredient: "milk", amount: 1, amountType: "l" },
      ],
      preparationTime: { h: 2, m: 22 },
      preparationInstructions: "Inscription goes here",
    },
    {
      uniqueID: 2,
      name: "pizza",
      source: "#",
      ingredients: [
        { ingredient: "flour", amount: 1, amountType: "kg" },
        { ingredient: "bacon", amount: 0.3, amountType: "kg" },
        { ingredient: "water", amount: 2, amountType: "l" },
        { ingredient: "mushroom", amount: 0.2, amountType: "kg" },
      ],
      preparationTime: { h: 0, m: 11 },
      preparationInstructions: "Inscription goes here",
    },
    {
      uniqueID: 3,
      name: "pizza",
      source: "#",
      ingredients: [
        { ingredient: "flour", amount: 1, amountType: "kg" },
        { ingredient: "bacon", amount: 1, amountType: "kg" },
        { ingredient: "water", amount: 2, amountType: "l" },
      ],
      preparationTime: { h: 2, m: 41 },
      preparationInstructions:
        "Inscription goes here lorem, Inscription goes here lorem Inscription goes here lorem,Inscription goes here lorem Inscription goes here lorem Inscription goes here lorem, Inscription goes here lorem",
    },
    {
      uniqueID: 4,
      name: "pizza",
      source: "#",
      ingredients: [
        { ingredient: "flour", amount: 1, amountType: "kg" },
        { ingredient: "bacon", amount: 1, amountType: "kg" },
        { ingredient: "water", amount: 2, amountType: "l" },
      ],
      preparationTime: { h: 1, m: 15 },
      preparationInstructions: "Inscription goes here",
    },
  ],
};

export const recipesSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
    addRecipe(state, action) {
      state.recipes = [...state.recipes, action.payload.recipe];
    },
    editRecipe(state, action) {
      const indexOfRecipe = state.recipes.indexOf(
        (el) => el.id === action.payload.id
      );
      state.recipes[indexOfRecipe] = action.payload.recipe;
    },
    deleteRecipe(state, action) {
      state.recipes = state.recipes.filter(
        (recipe) => recipe.uniqueID !== action.payload.id
      );
    },
    viewRecipe(state, action) {
      state.recipe = state.recipes.filter(
        (recipe) => recipe.uniqueID === action.payload.id
      );
      console.log(state.recipe);
    },
    clearRecipe(state, action) {
      state.recipe = {};
    },
  },
});

export const { addRecipe, editRecipe, deleteRecipe, viewRecipe, clearRecipe } =
  recipesSlice.actions;
