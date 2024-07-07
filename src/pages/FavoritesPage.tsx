// src/pages/FavoritesPage.tsx
import React from 'react';
import useFavorites from '../hooks/useFavorites';
import MovieCard from '../components/MovieCard';
import { Grid, Typography } from '@mui/material';
import { Movie } from '../types';

const FavoritesPage: React.FC = () => {
  const { favorites } = useFavorites();

  return (
    <Grid container spacing={2}>
      {favorites.length ? (
        favorites.map((movie: Movie) => (
          <Grid item xs={12} sm={6} md={4} key={movie.imdbID}>
            <MovieCard movie={movie} />
          </Grid>
        ))
      ) : (
        <Typography>No favorite movies found</Typography>
      )}
    </Grid>
  );
};

export default FavoritesPage;
