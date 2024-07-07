// src/redux/store.ts
import { configureStore } from '@reduxjs/toolkit';
import moviesReducer from './slices/moviesSlice';
import favoritesReducer from './slices/favoritesSlice';
import commentsReducer from './slices/commentsSlice';
import ratingsReducer from './slices/ratingsSlice';

const store = configureStore({
  reducer: {
    movies: moviesReducer,
    favorites: favoritesReducer,
    comments: commentsReducer,
    ratings: ratingsReducer
  }
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
