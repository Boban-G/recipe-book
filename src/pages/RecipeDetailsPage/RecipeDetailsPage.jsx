import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import styled from "./recipeDetailsPage.module.css";
import { deleteRecipe } from "../../store/recipes";
import DetailsBox from "../../components/DetailsBox/DetailsBox";
import { generateIngredientsListString } from "../../helpers/generateIngredientsListString";
import { objectToTimeString } from "../../helpers/convertNumberToTime";
const RecipeDetailsPage = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    uniqueID,
    name,
    source,
    ingredients,
    preparationTime,
    preparationInstructions,
  } = useSelector((state) => state.recipes.recipes[id]);

  const deleteRecipeHandler = () => {
    const answer = window.confirm(
      "Are you sure you want to delete this recipe?"
    );
    if (answer) {
      dispatch(deleteRecipe({ id: uniqueID }));
      navigate("/");
    }
  };
  console.log(ingredients);

  return (
    <>
      <h1 className="title">RECIPE DETAILS PAGE</h1>
      <div className={styled.RecipeDetailsWrapper}>
        <div className={styled.DetailsBox}>
          <DetailsBox name="Name" value={name} />
          <DetailsBox name="Source" value={source} />
          <DetailsBox
            name="Ingredients"
            value={generateIngredientsListString(ingredients)}
          />
          <DetailsBox
            name="Preparation Time"
            value={objectToTimeString(preparationTime)}
          />
          <button
            className={styled.DetailsDeleteBtn}
            onClick={deleteRecipeHandler}
          >
            DELETE RECIPE
          </button>
        </div>
        <div className={styled.DetailsBox}>
          <DetailsBox name="Instructions" value={preparationInstructions} />
        </div>
      </div>
    </>
  );
};
export default RecipeDetailsPage;
