// src/App.jsx
import Search from "./components/Search";

function App() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">
        GitHub User Search
      </h1>
      <Search />
    </div>
  );
}

export default App;
