import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold text-blue-800 mb-4">Recipe Sharing Platform</h1>
      <Link
        to="/add-recipe"
        className="inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
      >
        Add a Recipe
      </Link>
      {/* existing recipe grid here */}
    </div>
  );
}

export default HomePage;
