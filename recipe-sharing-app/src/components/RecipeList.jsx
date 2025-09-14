// src/components/RecipeList.jsx
import { Link } from 'react-router-dom';
import useRecipeStore from './recipeStore';

const RecipeList = () => {
  // we always read filteredRecipes — store keeps it in sync with searchTerm
  const recipes = useRecipeStore((s) => s.filteredRecipes);
  const all = useRecipeStore((s) => s.recipes);

  const display = recipes.length || all.length ? recipes : all;

  return (
    <div>
      <h2>Recipe List</h2>
      {display.length === 0 ? (
        <p>No recipes yet. Add one!</p>
      ) : (
        display.map((recipe) => (
          <div key={recipe.id} style={{ marginBottom: '12px', borderBottom: '1px solid #eee', paddingBottom: '8px' }}>
            <h3>
              <Link to={`/recipe/${recipe.id}`} style={{ textDecoration: 'none' }}>
                {recipe.title}
              </Link>
            </h3>
            <p style={{ margin: 0 }}>{recipe.description}</p>
          </div>
        ))
      )}
    </div>
  );
};

export default RecipeList;
