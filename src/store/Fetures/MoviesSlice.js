import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../common/config";

const initialState = {
  isLoading: false,
  isMovieLoading: false,
  isMovieCreditLoading: false,
  moviesByYear: {}, // Store movies categorized by year
  groupedMovies: {}, // Store grouped movies
  movieDetails: {},
  year: "2012",
  movieCredit: {},
  error: null,
  isMovieError: null,
  isMovieCreditError: null,
};

export const fetchMovies = createAsyncThunk(
  "fetchMovies",
  async (params, thunkApi) => {
    try {
      const { year, genre } = params;
      const genreQuery = genre ? `&with_genres=${genre}` : "";
      const url = config.API_URL.discover.replace("{{year}}", year);
      const response = await axios.get(`${url}${genreQuery}`);
      return { year, movies: response.data.results };
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const fetchMovieDetails = createAsyncThunk(
  "fetchMovieDetails",
  async (id, thunkApi) => {
    try {
      const url = config.API_URL.movieDetails.replace("{{movie_id}}", id);
      const response = await axios.get(`${url}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const fetchMovieCredits = createAsyncThunk(
  "fetchMovieCredits",
  async (id, thunkApi) => {
    try {
      const url = config.API_URL.movieCredits.replace("{{movie_id}}", id);
      const response = await axios.get(`${url}`);
      return response.data;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

export const MoviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    setMovieLoading(state, action) {
      state.isLoading = action.payload;
    },
    setYear(state, action) {
      state.year = action.payload;
    },
    resetMovies(state) {
      state.moviesByYear = {};
      state.groupedMovies = {};
      state.year = "2012";
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchMovies.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchMovies.fulfilled, (state, action) => {
        const { year, movies } = action.payload;
        state.isLoading = false;
        state.moviesByYear[year] = movies;

        // Update groupedMovies
        const allMovies = Object.values(state.moviesByYear).flat();
        state.groupedMovies = allMovies.reduce((acc, movie) => {
          const releaseYear = movie.release_date.split("-")[0];
          if (!acc[releaseYear]) acc[releaseYear] = [];
          acc[releaseYear].push(movie);
          return acc;
        }, {});
      })
      .addCase(fetchMovies.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchMovieDetails.pending, (state) => {
        state.isMovieLoading = true;
        state.isMovieError = null;
      })
      .addCase(fetchMovieDetails.fulfilled, (state, action) => {
        state.isMovieLoading = false;
        state.movieDetails = action.payload;
      })
      .addCase(fetchMovieDetails.rejected, (state, action) => {
        state.isMovieLoading = false;
        state.isMovieError = action.payload;
      })
      .addCase(fetchMovieCredits.pending, (state) => {
        state.isMovieCreditLoading = true;
        state.isMovieCreditError = null;
      })
      .addCase(fetchMovieCredits.fulfilled, (state, action) => {
        state.isMovieCreditLoading = false;
        state.movieCredit = action.payload;
      })
      .addCase(fetchMovieCredits.rejected, (state, action) => {
        state.isMovieCreditLoading = false;
        state.isMovieCreditError = action.payload;
      });
  },
});

export const { setYear, setMovieLoading, resetMovies } = MoviesSlice.actions;

export default MoviesSlice.reducer;
