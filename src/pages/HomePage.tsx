import React, { useState, useEffect } from 'react';
import useMovies from '../hooks/useMovies';
import MovieCard from '../components/MovieCard';
import { Container } from '@mui/material';
import SearchBar from '../components/SearchBar';
import { Movie } from '../types';
import { useLocation } from 'react-router-dom';

const HomePage: React.FC = () => {
  const movies = useMovies();
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);
  const location = useLocation();

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);

  useEffect(() => {
    if (location.pathname === '/') {
      setFilteredMovies(movies);
    }
  }, [location.pathname, movies]);

  const handleSearch = (query: string) => {
    if (query) {
      const filtered = movies.filter((movie) =>
        movie.Title.toLowerCase().includes(query.toLowerCase())
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(movies);
    }
  };

  return (
    <Container>
      <SearchBar onSearch={handleSearch} />
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </Container>
  );
};

export default HomePage;
