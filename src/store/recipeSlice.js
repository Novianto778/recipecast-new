import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getRandomRecipes = createAsyncThunk(
  "recipes/getRandom",
  async () => {
    const response = await fetch(
      "https://api.spoonacular.com/recipes/random?number=3&apiKey=" +
        process.env.REACT_APP_API_KEY
    );
    const { recipes } = await response.json();
    return recipes;
  }
);

export const getRecipeById = createAsyncThunk("recipes/getById", async (id) => {
  const response = await fetch(
    `https://api.spoonacular.com/recipes/${id}/information?apiKey=` +
      process.env.REACT_APP_API_KEY
  );
  const recipe = await response.json();
  return recipe;
});

export const recipeSlice = createSlice({
  name: "recipes",
  initialState: {
    recipes: [],
    recipe: {},
    pending: true,
    error: false,
  },
  reducers: {},
  extraReducers: {
    [getRandomRecipes.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
    [getRandomRecipes.fulfilled]: (state, action) => {
      state.recipes = action.payload;
      state.pending = false;
    },
    [getRandomRecipes.rejected]: (state) => {
      state.pending = false;
      state.error = true;
    },
    [getRecipeById.fulfilled]: (state, action) => {
      state.recipe = action.payload;
      state.pending = false;
    },
    [getRecipeById.pending]: (state) => {
      state.pending = true;
      state.error = false;
    },
  },
});

export default recipeSlice.reducer;
