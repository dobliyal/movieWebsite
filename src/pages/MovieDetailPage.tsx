// src/pages/MovieDetailPage.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import useMovies from '../hooks/useMovies';
import { Container, Typography, Box, Button } from '@mui/material';
// import CommentSection from '../components/CommentSection';
// import RatingComponent from '../components/RatingComponent';
import useFavorites from '../hooks/useFavorites';

const MovieDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const movies = useMovies();
  const { addToFavorites } = useFavorites();
  const movie = movies.find(m => m.imdbID === id);

  if (!movie) return <Typography>Movie not found</Typography>;

  return (
    <Container>
      <Box>
        <Typography variant="h4">{movie.Title}</Typography>
        <Typography variant="subtitle1">{movie.Plot}</Typography>
        <Button onClick={() => addToFavorites(movie)}>Add to Favorites</Button>
      </Box>
      {/* <RatingComponent movieId={movie.imdbID} /> */}
      {/* <CommentSection movieId={movie.imdbID} /> */}
    </Container>
  );
};

export default MovieDetailPage;

