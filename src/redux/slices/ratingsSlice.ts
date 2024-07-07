// src/redux/slices/ratingsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';
import localforage from 'localforage';

interface Rating {
  movieId: string;
  rating: number;
}

interface RatingsState {
  ratings: Rating[];
}

const initialState: RatingsState = {
  ratings: []
};

const ratingsSlice = createSlice({
  name: 'ratings',
  initialState,
  reducers: {
    addRating(state, action: PayloadAction<Rating>) {
      const existingRating = state.ratings.find(
        rating => rating.movieId === action.payload.movieId
      );
      if (existingRating) {
        existingRating.rating = action.payload.rating;
      } else {
        state.ratings.push(action.payload);
      }
      localforage.setItem('ratings', state.ratings);
    },
    setRatings(state, action: PayloadAction<Rating[]>) {
      state.ratings = action.payload;
    }
  }
});

export const { addRating, setRatings } = ratingsSlice.actions;

export const selectRatings = (state: RootState) => state.ratings.ratings;

export default ratingsSlice.reducer;
