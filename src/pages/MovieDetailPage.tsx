import React from 'react';
import { useParams } from 'react-router-dom';
import useMovies from '../hooks/useMovies';
import { Container, Typography, Box, Button } from '@mui/material';
import useFavorites from '../hooks/useFavorites';
import CommentSection from '../components/CommentSection';

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const movies = useMovies();
  const { addToFavorites,removeFromFavorites,isFavorite} = useFavorites();
  const movie = movies.find(m => m.imdbID === id);

  if (!movie) return <Typography variant="h5">Movie not found</Typography>;

  return (
    <Container maxWidth="md" sx={{ mt: 4, mb: 4 }}>
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        backgroundColor: 'black',
        color: 'white',
        p: 4,
        borderRadius: 2,
        boxShadow: 3,
        width: '100%'
      }}
    >
      <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
        {movie.Title}
      </Typography>
      <Typography variant="subtitle1" gutterBottom sx={{ mb: 3, fontStyle: 'italic' }}>
        {movie.Plot}
      </Typography>
      { !isFavorite(movie) ? (
        <Button
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            backgroundColor: 'gray',
            color: 'white',
            '&:hover': {
              backgroundColor: 'darkgray',
              color: 'black',
            }
          }}
          onClick={() => addToFavorites(movie)}
        >
          Add to Favorites
        </Button>
      ) : (
        <Button
          variant="contained"
          color="primary"
          sx={{
            mt: 2,
            backgroundColor: 'gray',
            color: 'white',
            '&:hover': {
              backgroundColor: 'darkgray',
              color: 'black',
            }
          }}
          onClick={() => removeFromFavorites(movie)}
        >
          Remove From Favorites
        </Button>
      )}
    </Box>
    <CommentSection movieId={movie.imdbID} />
  </Container>
  );
};

export default MovieDetailPage;
