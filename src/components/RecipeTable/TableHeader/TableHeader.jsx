import React from "react";

const TableHeader = () => {
  return (
    <thead>
      <tr>
        <th>ID</th>
        <th>Recipe Name</th>
        <th>Recipe Source</th>
        <th>No. Of Ingredients </th>
        <th>List Of Ingredients </th>
        <th>Preparation Instructions</th>
        <th>Preparation Time</th>
        <th>View Recipe</th>
        <th>Delete Recipe</th>
      </tr>
    </thead>
  );
};

export default TableHeader;
