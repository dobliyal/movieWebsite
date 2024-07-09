import React from 'react';
import useFavorites from '../hooks/useFavorites';
import MovieCard from '../components/MovieCard';
import { Grid, Typography, Box } from '@mui/material';
import { Movie } from '../types';

const FavoritesPage: React.FC = () => {
  const { favorites } = useFavorites();

  return (
    <Box>
      <Grid container spacing={2}>
        {favorites.length ? (
          favorites.map((movie: Movie) => (
            <Grid item xs={12} key={movie.imdbID}>
              <MovieCard movie={movie} />
            </Grid>
          ))
        ) : (
          <Box
            sx={{
              width: '100%',
              textAlign: 'center',
              mt: 4,
              p: 2,
              border: '1px solid #ccc',
              borderRadius: '4px',
              backgroundColor: '#f9f9f9',
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: 'grey',
                fontSize: '1.2rem',
              }}
            >
              No favorite movies found
            </Typography>
          </Box>
        )}
      </Grid>
    </Box>
  );
};

export default FavoritesPage;
