import { useParams, Link } from 'react-router-dom';
import { useRecipeStore } from './recipeStore';
import DeleteRecipeButton from './DeleteRecipeButton';
import EditRecipeForm from './EditRecipeForm';

const RecipeDetails = () => {
  const { recipeId } = useParams();
  const recipe = useRecipeStore((state) =>
    state.recipes.find((r) => r.id === Number(recipeId))
  );

  if (!recipe) return <p>Recipe not found.</p>;

  return (
    <div>
      <h1>{recipe.title}</h1>
      <p>{recipe.description}</p>

      <Link to={`/recipes/${recipe.id}/edit`}>Edit Recipe</Link>
      <DeleteRecipeButton recipeId={recipe.id} />
      {/* Show small edit form inline if you prefer, but routes exist */}
      <hr />
      <h3>Quick Edit</h3>
      <EditRecipeForm recipe={recipe} />
    </div>
  );
};

export default RecipeDetails;
