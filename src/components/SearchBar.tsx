import React, { useState, useCallback } from 'react';
import TextField from '@mui/material/TextField';
import IconButton from '@mui/material/IconButton';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import SearchIcon from '@mui/icons-material/Search';

interface SearchBarProps {
  onSearch: (query: string) => void;
}

const debounce = (func: (...args: any[]) => void, wait: number) => {
  let timeout: NodeJS.Timeout;
  return (...args: any[]) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
};

const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [query, setQuery] = useState('');

  const debouncedSearch = useCallback(debounce(onSearch, 300), [onSearch]);

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setQuery(value);
    debouncedSearch(value);
  };

  return (
    <Container>
      <Box display="flex" justifyContent="center" alignItems="center" my={2} sx={{ mt:8,backgroundColor: 'black', p: 2, borderRadius: 1 }}>
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
