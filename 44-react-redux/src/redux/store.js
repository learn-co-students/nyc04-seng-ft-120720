import { configureStore } from "@reduxjs/toolkit";
import positionReducer from "./positionSlice";
import pokemonReducer from "./pokemonSlice";
import weatherReducer from "./weatherSlice";

// export default configureStore({
//   reducer: {},
// });

const store = configureStore({
  reducer: {
    position: positionReducer,
    pokemons: pokemonReducer,
    weather: weatherReducer,
  },
});

export default store;

// store
// reducer() => initialState
// {
//   position: {
//     lat: null,
//     lng: null
//   }
// }
