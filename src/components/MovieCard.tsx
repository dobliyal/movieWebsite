import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
    <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
      <CardMedia
        component="img"
        alt={movie.Title}
        height="140"
        image={movie.Poster}
        title={movie.Title}
      />
      <CardContent sx={{ flexGrow: 1 }}>
        <Typography gutterBottom variant="h5" component="div">
          {movie.Title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {movie.Plot}
        </Typography>
      </CardContent>
      <Button
        component={Link}
        to={`/movie/${movie.imdbID}`}
        sx={{ alignSelf: 'flex-end', marginBottom: '1rem' }}
      >
        View Details
      </Button>
    </Card>
  );
};

export default MovieCard;
