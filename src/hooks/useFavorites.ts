// src/hooks/useFavorites.ts
import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { addFavorite, removeFavorite, setFavorites } from '../redux/slices/favoritesSlice';
import { Movie } from '../types';
import useAuth from './useAuth';
import { useEffect } from 'react';
import movieData from '../assets/movies.json'; // Assuming you have movie data stored in JSON

const useFavorites = () => {
  const { user } = useAuth();
  const favorites: Movie[] = useSelector((state: RootState) => state.favorites.favorites);
  const dispatch = useDispatch();
  
  useEffect(() => {
    if (user) {
      const favoriteMovies = user.favorites.map(movieId => {
        return movieData.find(movie => movie.imdbID === movieId) as Movie;
      });
      dispatch(setFavorites(favoriteMovies));
    }
  }, [user, dispatch]);

  const addToFavorites = (movie: Movie) => {
    dispatch(addFavorite(movie));
    if (user && user.addFavorite) {
      user.addFavorite(movie.imdbID).then(() => {
        alert('Your movie has been added to favorites!');
      });
    }
  };

  const removeFromFavorites = (movie: Movie) => {
    dispatch(removeFavorite(movie));
    if (user && user.removeFavorite) {
      user.removeFavorite(movie.imdbID).then(() => {
        alert('Your movie has been removed from favorites!');
      });
    }
  };

  return { favorites, addToFavorites, removeFromFavorites };
};

export default useFavorites;
