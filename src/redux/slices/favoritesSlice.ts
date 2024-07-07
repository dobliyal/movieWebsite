// src/redux/slices/favoritesSlice.ts
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
      localforage.setItem('favorites', state.favorites);
    },
    removeFavorite(state, action: PayloadAction<Movie>) {
      state.favorites = state.favorites.filter(movie => movie.imdbID !== action.payload.imdbID);
      localforage.setItem('favorites', state.favorites);
    },
    setFavorites(state, action: PayloadAction<Movie[]>) {
      state.favorites = action.payload;
    }
  }
});

export const { addFavorite, removeFavorite, setFavorites } = favoritesSlice.actions;

export default favoritesSlice.reducer;
