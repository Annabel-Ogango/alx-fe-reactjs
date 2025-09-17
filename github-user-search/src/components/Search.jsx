// src/components/Search.jsx
import { useState } from "react";
import { fetchUserData, searchUsers } from "../services/githubService";

const Search = () => {
  const [username, setUsername] = useState("");
  const [location, setLocation] = useState("");
  const [minRepos, setMinRepos] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!username.trim() && !location.trim() && !minRepos.trim()) return;

    setLoading(true);
    setError("");
    setResults([]);

    try {
      // Use searchUsers for advanced search
      const data = await searchUsers(username, location, minRepos);
      if (data.length === 0) {
        setError("Looks like we cant find the user");
      } else {
        setResults(data);
      }
    } catch (err) {
      setError("Looks like we cant find the user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-lg w-full p-4 bg-white rounded-xl shadow-md">
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="GitHub username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="text"
          placeholder="Location (optional)"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <input
          type="number"
          placeholder="Min repositories (optional)"
          value={minRepos}
          onChange={(e) => setMinRepos(e.target.value)}
          className="border p-2 rounded w-full"
        />
        <button
          type="submit"
          className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded w-full"
        >
          Search
        </button>
      </form>

      {loading && <p className="mt-4 text-gray-600">Loading...</p>}
      {error && <p className="mt-4 text-red-500">{error}</p>}

      {results.length > 0 && (
        <div className="mt-6 space-y-4">
          {results.map((user) => (
            <div
              key={user.id}
              className="flex items-center space-x-4 p-3 border rounded-lg shadow-sm hover:shadow-md"
            >
              <img
                src={user.avatar_url}
                alt={user.login}
                className="w-16 h-16 rounded-full"
              />
              <div>
                <h2 className="text-lg font-semibold">{user.login}</h2>
                <a
                  href={user.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-500 underline text-sm"
                >
                  View Profile
                </a>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Search;
