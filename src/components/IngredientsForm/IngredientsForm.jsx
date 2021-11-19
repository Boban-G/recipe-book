import { useState } from "react";
import InputField from "./InputField/InputField";
import TextArea from "./TextArea/TextArea";
import styled from "./ingredientsForm.module.css";
import SelectField from "./SelectField/SelectField";
import { useNavigate } from "react-router";
import { addRecipe } from "../../store/recipes";
import { useDispatch } from "react-redux";
import { addMessage } from "../../store/message";
const IngredientsForm = () => {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [recipeName, setRecipeName] = useState("");
  const [recipeSource, setRecipeSource] = useState("");
  const [recipeInstructions, setRecipeInstructions] = useState("");
  const [recipeHour, setRecipeHour] = useState(0);
  const [recipeMinutes, setRecipeMinutes] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const saveRecipeHandler = (e) => {
    e.preventDefault();

    if (!recipeName) {
      return dispatch(
        addMessage({ message: "You must enter recipe name", status: "danger" })
      );
    }
    if (!recipeSource) {
      return dispatch(
        addMessage({
          message: "You must enter recipe source",
          status: "danger",
        })
      );
    }
    if (ingredientsList.length === 0) {
      return dispatch(
        addMessage({
          message: "You must enter at least 1 ingredient!",
          status: "danger",
        })
      );
    }
    if (!recipeInstructions) {
      return dispatch(
        addMessage({
          message: "You must enter instructions!",
          status: "danger",
        })
      );
    }
    if (!recipeHour && !recipeMinutes) {
      return dispatch(
        addMessage({
          message: "You must enter preparation time!",
          status: "danger",
        })
      );
    }

    if (
      ingredientsList.length >= 1 &&
      recipeName &&
      recipeSource &&
      recipeInstructions &&
      (recipeMinutes || recipeHour)
    ) {
      const recipe = {
        uniqueID: Date.now(),
        name: recipeName,
        source: recipeSource,
        ingredients: ingredientsList,
        preparationTime: { h: recipeHour, m: recipeMinutes },
        preparationInstructions: recipeInstructions,
      };
      console.log(recipe);
      dispatch(addRecipe({ recipe: recipe }));
      dispatch(addMessage({ message: "Successfully added new recipe" }));

      navigate("/");
    }
  };

  return (
    <form className={styled.IngredientForm}>
      <div className={styled.InfoBox}>
        <div className={styled.Info}>
          <InputField
            fieldType="text"
            fieldFor="recipeName"
            labelValue="Name"
            placeholder="add recipe name"
            onChangeHandler={setRecipeName}
          />
          <InputField
            fieldType="text"
            fieldFor="RecipeSource"
            labelValue="Source"
            placeholder="add recipe source"
            onChangeHandler={setRecipeSource}
          />

          <SelectField
            ingredientsList={ingredientsList}
            setIngredientsList={setIngredientsList}
          />
          <div className={styled.preparationTime}>
            <h3>Preparation Time</h3>
            <div className={styled.inputFieldBox}>
              <InputField
                fieldType="number"
                fieldFor="PrepHours"
                labelValue="Hours"
                minVal={1}
                onChangeHandler={setRecipeHour}
              />
              <InputField
                fieldType="number"
                fieldFor="prepMinutes"
                labelValue="Minutes"
                maxVal={59}
                onChangeHandler={setRecipeMinutes}
              />
            </div>
          </div>
        </div>
        <div className={styled.Info}>
          <TextArea onChangeHandler={setRecipeInstructions} />
        </div>
      </div>
      <button onClick={saveRecipeHandler} className={styled.SubmitBtn}>
        Save Recipe
      </button>
    </form>
  );
};

export default IngredientsForm;
