import { configureStore } from "@reduxjs/toolkit";
import GenreSlice from "./Fetures/GenreSlice";
import MoviesSlice from "./Fetures/MoviesSlice";

const store = configureStore({
  reducer: {
    genre: GenreSlice,
    movies: MoviesSlice,
  },
});

export default store;
