import React from "react";
import RecipeTable from "../../components/RecipeTable/RecipeTable";
import styled from "./recipeListPage.module.css";
import { useSelector } from "react-redux";

const RecipeListPage = () => {
  const recipes = useSelector((state) => state.recipes.recipes);
  return (
    <div>
      <h1 className="title">RECIPE LIST PAGE</h1>
      <div className={styled.TableWrapper}>
        <RecipeTable recipes={recipes} />
      </div>
    </div>
  );
};

export default RecipeListPage;
