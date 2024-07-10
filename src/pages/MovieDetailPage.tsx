import React from 'react';
import { useParams } from 'react-router-dom';
import useMovies from '../hooks/useMovies';
import { Container, Typography, Box, Button, Card, CardMedia } from '@mui/material';
import useFavorites from '../hooks/useFavorites';
import CommentSection from '../components/CommentSection';
import Navbar from '../components/Navbar';
const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const movies = useMovies();
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const movie = movies.find(m => m.imdbID === id);

  if (!movie) return <Typography variant="h5">Movie not found</Typography>;

  return (
    <Box>
    <Navbar />
    <Container maxWidth="md" sx={{ mt: 8, mb: 4 }}>
      <Card
        sx={{
          display: 'flex',
          width: '100%',
          marginBottom: '1rem',
          border: '1px solid #ddd',
          backgroundColor: 'black',
          color: 'white',
          '&:hover': {
            borderColor: '#aaa',
            boxShadow: 4,
          },
        }}
      >
        <Box sx={{ flex: 1, p: 4 }}>
          <Typography variant="h4" gutterBottom sx={{ mb: 2 }}>
            {movie.Title}
          </Typography>
          <Typography variant="subtitle1" gutterBottom sx={{ mb: 3, fontStyle: 'italic' }}>
            {movie.Plot}
          </Typography>
          {!isFavorite(movie) ? (
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
                },
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
                },
              }}
              onClick={() => removeFromFavorites(movie)}
            >
              Remove From Favorites
            </Button>
          )}
        </Box>
        <CardMedia
          component="img"
          alt={movie.Title}
          image={movie.Poster}
          title={movie.Title}
          sx={{ width: 300, height: 'auto', borderRadius: '0 4px 4px 0' }}
        />
      </Card>
      <Box
        sx={{
          mt: 4,
          p: 4,
          backgroundColor: 'black',
          color: 'white',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <CommentSection movieId={movie.imdbID} />
      </Box>
    </Container>
    </Box>
  );
};

export default MovieDetailPage;
