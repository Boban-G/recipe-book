import { useState } from "react";
import { objectToTimeString } from "../../../helpers/convertNumberToTime";
import { generateIngredientsListString } from "../../../helpers/generateIngredientsListString";
import { limitStringSize } from "../../../helpers/limitStringSize";
import styled from "./tableRow.module.css";
import { useDispatch } from "react-redux";
import { deleteRecipe } from "../../../store/recipes";
import { Link } from "react-router-dom";

const TableRow = ({
  recipe: {
    uniqueID,
    name,
    source,
    ingredients,
    preparationTime,
    preparationInstructions,
  },
  index,
}) => {
  const dispatch = useDispatch();
  const [ingredientList, setIngredientList] = useState(
    generateIngredientsListString(ingredients)
  );

  return (
    <tr className={styled.TableRow}>
      <td>{uniqueID}</td>
      <td>{name}</td>
      <td>{source}</td>
      <td>{ingredients.length}</td>
      <td>{limitStringSize(ingredientList, "list", 3)}</td>
      <td>{limitStringSize(preparationInstructions, "string", 50)}</td>
      <td>{objectToTimeString(preparationTime)}</td>
      <td className={styled.CtaBox}>
        <Link className={styled.CtaBtn} to={"/recipe/" + index}>
          View
        </Link>
      </td>
      <td className={styled.CtaBox}>
        <div
          className={`${styled.CtaBtn} ${styled.DeleteBtn}`}
          onClick={() => {
            dispatch(deleteRecipe({ id: uniqueID }));
          }}
        >
          Delete
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
