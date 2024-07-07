// src/pages/HomePage.tsx
import React from 'react';
import useMovies from '../hooks/useMovies';
import MovieCard from '../components/MovieCard';
import { Grid } from '@mui/material';

const HomePage: React.FC = () => {
  const movies = useMovies();

  return (
    <Grid container spacing={2}>
      {movies.map(movie => (
        <Grid item xs={12} sm={6} md={4} key={movie.imdbID}>
          <MovieCard movie={movie} />
        </Grid>
      ))}
    </Grid>
  );
};

export default HomePage;

