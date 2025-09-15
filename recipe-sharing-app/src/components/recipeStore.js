import create from 'zustand';

export const useRecipeStore = create((set) => ({
  // core data
  recipes: [],
  // search/filter
  searchTerm: '',
  filteredRecipes: [],

  // Task 1 required: setRecipes
  setRecipes: (recipes) => set({ recipes, filteredRecipes: recipes }),

  // add / update / delete
  addRecipe: (newRecipe) =>
    set((state) => {
      const updated = [...state.recipes, newRecipe];
      return { recipes: updated, filteredRecipes: updated };
    }),

  updateRecipe: (updatedRecipe) =>
    set((state) => {
      const updated = state.recipes.map((r) =>
        r.id === updatedRecipe.id ? updatedRecipe : r
      );
      return { recipes: updated, filteredRecipes: updated };
    }),

  deleteRecipe: (id) =>
    set((state) => {
      const updated = state.recipes.filter((r) => r.id !== id);
      return { recipes: updated, filteredRecipes: updated };
    }),

  // search actions (Task 3)
  setSearchTerm: (term) => set({ searchTerm: term }),
  filterRecipes: () =>
    set((state) => ({
      filteredRecipes: state.recipes.filter((recipe) =>
        recipe.title.toLowerCase().includes(state.searchTerm.toLowerCase())
      ),
    })),
}));
