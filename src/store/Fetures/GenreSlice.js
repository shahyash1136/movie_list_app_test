import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import config from "../../common/config";

const initialState = {
  isLoading: false,
  genre: [],
  selectedGenre: null,
  error: null,
};

export const fetchGenre = createAsyncThunk(
  "fetchGenre",
  async (_, thunkApi) => {
    try {
      const response = await axios.get(config.API_URL.genre).then((res) => {
        return res.data.genres;
      });
      return response;
    } catch (error) {
      return thunkApi.rejectWithValue(error.response.data);
    }
  }
);

const GenreSlice = createSlice({
  name: "genre",
  initialState,
  reducers: {
    setSelectedGenre(state, action) {
      state.selectedGenre = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchGenre.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchGenre.fulfilled, (state, action) => {
        state.isLoading = false;
        state.genre = action.payload;
      })
      .addCase(fetchGenre.rejected, (state, action) => {
        state.isLoading = false;
        state.genre = [];
        state.error = action.payload;
      });
  },
});

export const { setSelectedGenre } = GenreSlice.actions;

export default GenreSlice.reducer;
