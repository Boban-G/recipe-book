import { Route, Routes } from "react-router-dom";
import RecipeDetailsPage from "../pages/RecipeDetailsPage/RecipeDetailsPage";
import RecipeEntryPage from "../pages/RecipeEntryPage/RecipeEntryPage";
import RecipeListPage from "../pages/RecipeListPage/RecipeListPage";

const NavRoutes = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<RecipeListPage />} />
        <Route path="/recipe-entry" element={<RecipeEntryPage />} />
        <Route path="/recipe/:id" element={<RecipeDetailsPage />} />
        {/* ERROR ROUTE */}
        <Route path="/*" element={<RecipeListPage />} />
      </Routes>
    </>
  );
};

export default NavRoutes;
