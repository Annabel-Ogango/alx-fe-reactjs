import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useRecipeStore } from './recipeStore';

const RecipeList = () => {
  const recipes = useRecipeStore((state) => state.recipes);
  const filteredRecipes = useRecipeStore((state) => state.filteredRecipes);
  const searchTerm = useRecipeStore((state) => state.searchTerm);
  const filterRecipes = useRecipeStore((state) => state.filterRecipes);

  useEffect(() => {
    // keep filteredRecipes in sync whenever searchTerm changes
    filterRecipes();
  }, [searchTerm, filterRecipes]);

  const listToRender = (searchTerm && searchTerm.trim() !== '') ? filteredRecipes : recipes;

  return (
    <div>
      <h2>Recipe List</h2>
      {listToRender.length === 0 ? (
        <p>No recipes found.</p>
      ) : (
        listToRender.map((recipe) => (
          <div key={recipe.id}>
            <h3>
              <Link to={`/recipes/${recipe.id}`}>{recipe.title}</Link>
            </h3>
            <p>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
