import React from 'react';
import useFavorites from '../hooks/useFavorites';
import MovieCard from '../components/MovieCard';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import  Box  from '@mui/material/Box';

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
              backgroundColor:'grey'
            }}
          >
            <Typography
              variant="h6"
              sx={{
                color: 'white',
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
