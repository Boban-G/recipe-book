import React, { useRef, useState } from "react";
import { useSelector } from "react-redux";
import IngredientsForm from "../../components/IngredientsForm/IngredientsForm";
import styled from "./recipeEntryPage.module.css";

const RecipeEntryPage = () => {

  

  return (
    <>
      <h1 className="title">ADD RECIPE</h1>
      <IngredientsForm />
    </>
  );
};

export default RecipeEntryPage;
