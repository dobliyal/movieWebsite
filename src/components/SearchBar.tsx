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
    <Box display="flex" justifyContent="center" alignItems="center" my={2} sx={{ backgroundColor: 'black', p: 2, borderRadius: 1 }}>
      <TextField
        onChange={handleSearch}
        label="Search Movies"
        value={query}
        variant="outlined"
        fullWidth
        sx={{
          input: { color: 'white' },
          label: { color: 'white' },
          '& .MuiOutlinedInput-root': {
            '& fieldset': { borderColor: 'white' },
            '&:hover fieldset': { borderColor: 'gray' },
            '&.Mui-focused fieldset': { borderColor: 'gray' },
          },
        }}
      />
      <IconButton
        aria-label="search"
        sx={{
          color: 'white',
          ml: 1,
          '&:hover': {
            backgroundColor: 'gray',
            color: 'white',
          },
        }}
      >
        <SearchIcon />
      </IconButton>
    </Box>
  </Container>
  );
};

export default SearchBar;
