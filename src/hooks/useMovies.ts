import { useEffect, useState } from 'react';
import { Movie } from '../types';
import movieData from '../assets/movies.json';

const useMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  useEffect(() => {
    setMovies(movieData);
  }, []);
  return movies;
};

export default useMovies;
