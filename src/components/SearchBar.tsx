import React, { useState } from 'react';
import { TextField, IconButton, Container, Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const handleSearch = () => {
    onSearch(query);
  };

  return (
    <Container>
      <Box display="flex" justifyContent="center" my={2}>
        <TextField
          label="Search Movies"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          variant="outlined"
          fullWidth
        />
        <IconButton onClick={handleSearch} aria-label="search">
          <SearchIcon />
        </IconButton>
      </Box>
    </Container>
  );
};

export default SearchBar;
