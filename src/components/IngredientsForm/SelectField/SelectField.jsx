import React, { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import styled from "./selectField.module.css";

const SelectField = ({ ingredientsList, setIngredientsList }) => {
  const ingredients = useSelector((state) => state.ingredients.ingredients);
  const [selectedIngredient, setSelectedIngredient] = useState({
    ingredient: "",
    amount: 0,
    amountType: "",
  });

  const choseIngredientRef = useRef(null);
  const choseIngredientAmountRef = useRef(null);

  const addIngredientToListHandler = (e) => {
    e.preventDefault();
    if (
      selectedIngredient.ingredient === "" ||
      selectedIngredient.amount === 0
    ) {
      return;
    }
    setIngredientsList((prevState) => [...prevState, selectedIngredient]);

    setSelectedIngredient({
      ingredient: "",
      amount: 0,
      amountType: "",
    });
  };

  const selectIngredientHandler = (e) => {
    const targetVal = choseIngredientRef.current.value;
    const ingAmountVal = choseIngredientAmountRef.current.value;
    console.log(e.target.tagName);
    if (targetVal != "choose") {
      const [ingredient, amountType] = targetVal.split(",");
      if (e.target.tagName === "SELECT") {
        setSelectedIngredient({ ingredient, amount: 0, amountType });
        return;
      }
      console.log(ingredient, ":", amountType);
      setSelectedIngredient({ ingredient, amount: ingAmountVal, amountType });
    }
    if (targetVal === "choose") {
      setSelectedIngredient({
        ingredient: "",
        amount: ingAmountVal,
        amountType: "",
      });
    }
  };

  useEffect(() => {
    console.log(ingredientsList);
  }, [ingredientsList]);
  return (
    <div className={styled.IngredientsBox}>
      <div className={styled.IngredientsList}>
        <h3>Ingredient List:</h3>
        <ul>
          {ingredientsList.map((ing, i) => (
            <li key={i}>
              {ing.amount}
              {ing.amountType} x {ing.ingredient}
            </li>
          ))}
        </ul>
      </div>
      <div className={styled.RecipeIngredientsSelect}>
        <label htmlFor="recipeIngredients">Choose a Ingredient:</label>
        <div>
          <div>
            <select
              ref={choseIngredientRef}
              name="recipeIngredients"
              id="recipeIngredients"
              onChange={selectIngredientHandler}
            >
              <option value="choose">Select Ingredient</option>
              {ingredients.map(({ ingredient, amountType }, i) => (
                // console.log(ingredient, amountType)
                <option key={i} value={`${ingredient}, ${amountType}`}>
                  {ingredient}
                </option>
              ))}
            </select>
          </div>

          <div className={styled.MultiplierSign}>x</div>
          <input
            onChange={selectIngredientHandler}
            value={selectedIngredient.amount}
            ref={choseIngredientAmountRef}
            type="number"
            name="ingredientAmount"
            step="0.100"
            min="0"
          />
          <div className={styled.amountTypeBox}>
            {selectedIngredient.amountType}
          </div>
          <button onClick={addIngredientToListHandler}>add Ingredient</button>
        </div>
      </div>
      {/* <div className={styled.AddIngredientBtn}>
        <span>+</span>
      </div> */}
    </div>
  );
};

export default SelectField;
