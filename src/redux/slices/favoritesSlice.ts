import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Movie } from '../../types';
import localforage from 'localforage';

interface FavoritesState {
  favorites: Movie[];
}

const initialState: FavoritesState = {
  favorites: []
};

const favoritesSlice = createSlice({
  name: 'favorites',
  initialState,
  reducers: {
    addFavorite(state, action: PayloadAction<Movie>) {
      state.favorites.push(action.payload);
      localforage.setItem('favorites', state.favorites).catch(err => {
        console.error("Error saving favorites", err);
      });
    },
    removeFavorite(state, action: PayloadAction<Movie>) {
      state.favorites = state.favorites.filter(movie => movie.imdbID !== action.payload.imdbID);
      localforage.setItem('favorites', state.favorites).catch(err => {
        console.error("Error saving favorites", err);
      });
    },
    setFavorites(state, action: PayloadAction<Movie[]>) {
      state.favorites = action.payload;
    }
  }
});

export const { addFavorite, removeFavorite, setFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
//state.favorites.filter(movie=>movie.)