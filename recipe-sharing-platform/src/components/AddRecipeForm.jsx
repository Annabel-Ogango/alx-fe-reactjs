import { useState } from "react";

const AddRecipeForm = ({ onAddRecipe }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !ingredients || !instructions) {
      alert("Please fill in all fields before submitting.");
      return;
    }

    const newRecipe = {
      id: Date.now(),
      title,
      ingredients,
      instructions,
    };

    onAddRecipe(newRecipe);

    // Clear form after submission
    setTitle("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto p-6 bg-white rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Add New Recipe</h2>

      {/* Title */}
      <input
        type="text"
        placeholder="Recipe Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      />

      {/* Ingredients */}
      <textarea
        placeholder="Ingredients (separate by commas)"
        value={ingredients}
        onChange={(e) => setIngredients(e.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      />

      {/* Instructions */}
      <textarea
        placeholder="Instructions"
        value={instructions}
        onChange={(e) => setInstructions(e.target.value)}
        className="w-full px-4 py-2 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
      />

      {/* Submit button */}
      <button
        type="submit"
        className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors"
      >
        Add Recipe
      </button>
    </form>
  );
};

export default AddRecipeForm;
