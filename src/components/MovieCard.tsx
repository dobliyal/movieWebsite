import React from 'react';
import { Card, CardMedia, CardContent, Typography, Button, Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { Movie } from '../types';

interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  return (
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
      <CardContent sx={{ flex: 1 }}>
        <Typography gutterBottom variant="h5" component="div" sx={{ color: 'white' }}>
          <strong>{movie.Title}</strong>
        </Typography>
        <Typography sx={{ marginTop: '1rem', color: 'white' }}>
          <strong>Ratings:</strong> {movie.Ratings[0].Value}
        </Typography>
        <Typography sx={{ color: 'white' }}>
          <strong>Released:</strong> {movie.Released}
        </Typography>
        <Typography sx={{ color: 'white' }}>
          <strong>Director:</strong> {movie.Director}
        </Typography>
        <Button
          component={Link}
          to={`/movie/${movie.imdbID}`}
          variant="contained"
          color="primary"
          sx={{
            marginTop: '1rem',
            backgroundColor: 'gray',
            color: 'white',
            '&:hover': {
              backgroundColor: 'darkgray',
              color: 'black',
            },
          }}
        >
          View Details
        </Button>
      </CardContent>
      <CardMedia
        component="img"
        alt={movie.Title}
        image={movie.Poster}
        title={movie.Title}
        sx={{ width: 200, height: 'auto' }}
      />
    </Card>
  );
};



export default MovieCard;
