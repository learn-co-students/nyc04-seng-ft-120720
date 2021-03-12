import { createSlice } from "@reduxjs/toolkit";

const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: [],
  reducers: {
    addPokemon(state, action) {
      state.push(action.payload);
    },
  },
});

export const { addPokemon } = pokemonSlice.actions;
export default pokemonSlice.reducer;
