import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../redux/store';
import { addFavorite, removeFavorite, setFavorites } from '../redux/slices/favoritesSlice';
import { Movie } from '../types';
import useAuth from './useAuth';
import { useEffect } from 'react';
import localforage from 'localforage';
import movieData from '../assets/movies.json'; 

const useFavorites = () => {
  const { user } = useAuth();
  const favorites: Movie[] = useSelector((state: RootState) => state.favorites.favorites);
  const dispatch = useDispatch();

  useEffect(() => {
    localforage.getItem('favorites').then(storedFavorites => {
      if (storedFavorites) {
        dispatch(setFavorites(storedFavorites as Movie[]));
      }
    }).catch(err => {
      console.error("Error loading favorites", err);
    });
  }, [dispatch]);

  useEffect(() => {
    if (user) {
      const favoriteMovies = user.favorites.map(movieId => {
        return movieData.find((movie: Movie) => movie.imdbID === movieId) as Movie;
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
