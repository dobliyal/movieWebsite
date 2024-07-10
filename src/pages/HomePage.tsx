import React, { useState, useEffect } from 'react';
import useMovies from '../hooks/useMovies';
import MovieCard from '../components/MovieCard';
import { Container } from '@mui/material';
import SearchBar from '../components/SearchBar';
import { Movie } from '../types';
import { useLocation } from 'react-router-dom';
import Navbar from '../components/Navbar';

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
  // TODO I believe this is redundant "location.pathname"

  const handleSearch = (query: string) => {
    if (query) {
      const filtered = movies.filter((movie) =>
        movie.Title.toLowerCase().includes(query.toLowerCase())
      // TODO we could implement a sorting algorithm after this that sorts based on relevency
      );
      setFilteredMovies(filtered);
    } else {
      setFilteredMovies(movies);
    }
  };

  return (
    <Container>
    <Navbar />
      <SearchBar onSearch={handleSearch} />
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </Container>
  );
};

export default HomePage;
