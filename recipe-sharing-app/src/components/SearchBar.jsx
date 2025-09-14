// src/components/SearchBar.jsx
import useRecipeStore from './recipeStore';

const SearchBar = () => {
  const searchTerm = useRecipeStore((s) => s.searchTerm);
  const setSearchTerm = useRecipeStore((s) => s.setSearchTerm);

  return (
    <div style={{ margin: '12px 0' }}>
      <input
        type="text"
        placeholder="Search recipes..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{
          padding: '8px',
          width: '100%',
          maxWidth: '480px',
          boxSizing: 'border-box',
        }}
      />
    </div>
  );
};

export default SearchBar;
