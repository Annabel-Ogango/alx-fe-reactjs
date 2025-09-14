import { useRecipeStore } from './recipeStore';
import { useNavigate } from 'react-router-dom';

const DeleteRecipeButton = ({ recipeId }) => {
  const deleteRecipe = useRecipeStore(state => state.deleteRecipe);
  const navigate = useNavigate();

  const handleDelete = () => {
    deleteRecipe(recipeId);
    navigate('/'); // ✅ Navigate back to home (or recipe list) after deletion
  };

  return (
    <button onClick={handleDelete} style={{ backgroundColor: 'red', color: 'white', marginTop: '10px' }}>
      Delete Recipe
    </button>
  );
};

export default DeleteRecipeButton;
