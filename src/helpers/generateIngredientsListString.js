export const generateIngredientsListString = (IngList) => {
  let string = "";
  const listLength = IngList.length;
  console.log(IngList, listLength);
  IngList.forEach((ing, i) => {
    const { ingredient, amount, amountType } = ing;
    string += ` ${amount}${amountType} ${ingredient}${
      listLength === i + 1 ? "." : ","
    }`;
  });
  return string;
};
