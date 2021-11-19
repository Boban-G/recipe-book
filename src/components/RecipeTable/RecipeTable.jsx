import styled from "./recipeTable.module.css";
import TableHeader from "./TableHeader/TableHeader";
import TableRow from "./TableRow/TableRow";
const RecipeTable = ({ recipes }) => {
  console.log(recipes);
  return (
    <table className={styled.RecipeTable}>
      <TableHeader />
      <tbody>
        {recipes.map((recipe, i) => (
          <TableRow key={recipe.uniqueID} recipe={recipe} index={i} />
        ))}
      </tbody>
    </table>
  );
};

export default RecipeTable;
