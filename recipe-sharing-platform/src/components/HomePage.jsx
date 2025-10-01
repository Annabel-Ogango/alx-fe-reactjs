import { Link } from 'react-router-dom';

// Inside your map loop
<Link to={`/recipe/${recipe.id}`} key={recipe.id}>
  <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg hover:scale-105 transition">
    <img src={recipe.image} alt={recipe.title} className="w-full h-40 object-cover rounded-md" />
    <h2 className="text-lg font-bold text-blue-800 mt-2">{recipe.title}</h2>
    <p className="text-gray-600 text-sm">{recipe.summary}</p>
  </div>
</Link>
