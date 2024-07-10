import React from 'react';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { Movie } from '../types';
import useFavorites from '../hooks/useFavorites';
import useAuth from '../hooks/useAuth';
interface MovieCardProps {
  movie: Movie;
}

const MovieCard: React.FC<MovieCardProps> = ({ movie }) => {
  const { addToFavorites, removeFromFavorites, isFavorite } = useFavorites();
  const {user}=useAuth();

  // const HandleaddToFavorite=()=>{
  //   if(user){
  //     addToFavorites(movie);
  //   }
  //   else{
  //     alert("Please login to add movie to favorites")
  //   }
  // }
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
        {!isFavorite(movie) ? (
            <Button
              variant="contained"
              color="primary"
              sx={{
                mt: 2,
                ml:0.2,
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
                ml:0.2,
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
