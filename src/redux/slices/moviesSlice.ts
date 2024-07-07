import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../types';

interface MoviesState {
  movies: Movie[];
}

const initialState: MoviesState = {
  movies: []
};

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setMovies(state, action: PayloadAction<Movie[]>) {
      state.movies = action.payload;
    }
  }
});

export const { setMovies } = moviesSlice.actions;
export default moviesSlice.reducer;

