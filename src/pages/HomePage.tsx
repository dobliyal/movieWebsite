import React, { useState, useEffect } from 'react';
import useMovies from '../hooks/useMovies';
import MovieCard from '../components/MovieCard';
import { Container,Box } from '@mui/material';
import SearchBar from '../components/SearchBar';
import { Movie } from '../types';
import Navbar from '../components/Navbar';

const HomePage: React.FC = () => {
  const movies = useMovies();
  const [filteredMovies, setFilteredMovies] = useState<Movie[]>([]);

  useEffect(() => {
    setFilteredMovies(movies);
  }, [movies]);


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
    <Box>
    <Navbar />
    <Container>
      <SearchBar onSearch={handleSearch} />
      {filteredMovies.map((movie) => (
        <MovieCard key={movie.imdbID} movie={movie} />
      ))}
    </Container>
    </Box>
  );
};

export default HomePage;
