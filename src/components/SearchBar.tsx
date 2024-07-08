import React, { useState } from 'react';
import { TextField, IconButton, Container, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = (e:React.ChangeEvent<HTMLInputElement>) => {
    const value=e.target.value;
    setQuery(value);
    onSearch(value);
  };

  return (
    <Container>
      <Box display="flex" justifyContent="center" my={2}>
        <TextField onChange={handleSearch} 
          label="Search Movies"
          value={query}
          // onChange={(e) => setQuery(e.target.value)}
          variant="outlined"
          fullWidth
        />
        <IconButton aria-label="search">
          <SearchIcon />
        </IconButton>
      </Box>
    </Container>
  );
};

export default SearchBar;
