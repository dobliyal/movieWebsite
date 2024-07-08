import React from 'react';
import { useParams } from 'react-router-dom';
import useMovies from '../hooks/useMovies';
import { Container, Typography, Box, Button } from '@mui/material';
// import CommentSection from '../components/CommentSection';
// import RatingComponent from '../components/RatingComponent';
import useFavorites from '../hooks/useFavorites';
import CommentSection from '../components/CommentSection';

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const movies = useMovies();
  const { addToFavorites,removeFromFavorites } = useFavorites();
  const movie = movies.find(m => m.imdbID === id);

  if (!movie) return <Typography variant="h5">Movie not found</Typography>;

  return (
    <Container sx={{ mt: 4 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
          bgcolor: 'background.paper',
          p: 4,
          borderRadius: 2,
          boxShadow: 3,
          width: '100%'
        }}
      >
        <Typography variant="h4" gutterBottom>
          {movie.Title}
        </Typography>
        <Typography variant="subtitle1" gutterBottom>
          {movie.Plot}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => addToFavorites(movie)}
        >
          Add to Favorites
        </Button>
        <Button
          variant="contained"
          color="primary"
          sx={{ mt: 2 }}
          onClick={() => removeFromFavorites(movie)}
        >
          Remove From Favorites
        </Button>
      </Box>
      <CommentSection movieId={movie.imdbID} />
      {/* <RatingComponent movieId={movie.imdbID} /> */}
      {/* <CommentSection movieId={movie.imdbID} /> */}
    </Container>
  );
};

export default MovieDetailPage;
