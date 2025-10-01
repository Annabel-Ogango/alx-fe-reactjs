import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import data from '../data.json';

function RecipeDetail() {
  const { id } = useParams();
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    // Find the recipe by ID from mock data
    const foundRecipe = data.find((r) => r.id === parseInt(id));
    setRecipe(foundRecipe);
  }, [id]);

  if (!recipe) {
    return <p className="text-center mt-10 text-gray-500">Recipe not found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto my-10 bg-white shadow-lg rounded-lg p-6">
      <img
        src={recipe.image}
        alt={recipe.title}
        className="w-full h-64 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold text-blue-800 mb-4">{recipe.title}</h1>
      <p className="text-gray-600 mb-6">{recipe.summary}</p>

      {/* Ingredients */}
      <div className="mb-6">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Ingredients</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          {recipe.ingredients?.map((ingredient, index) => (
            <li key={index}>{ingredient}</li>
          ))}
        </ul>
      </div>

      {/* Instructions */}
      <div>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Instructions</h2>
        <ol className="list-decimal pl-6 text-gray-700 space-y-2">
          {recipe.instructions?.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    </div>
  );
}

export default RecipeDetail;
