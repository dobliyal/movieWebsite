import React, { useState } from 'react';
import { TextField, Button, Container, Typography } from '@mui/material';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const { login } = useAuth();
  const navigate = useNavigate();

  const handleLogin = async () => {
    const success = await login(username, password);
    if (success) {
        navigate('/');
    } else {
      setError('User is not registered');
    }
  };

  return (
    <Container maxWidth="sm" sx={{ mt: 4, backgroundColor: 'black', p: 4, borderRadius: 1, boxShadow: 3 }}>
    <Typography variant="h4" align="center" sx={{ color: 'white', mb: 3 }}>
      Login
    </Typography>
    {error && (
      <Typography color="error" align="center" sx={{ mb: 2 }}>
        {error}
      </Typography>
    )}
    <TextField
      label="Username"
      value={username}
      onChange={(e) => setUsername(e.target.value)}
      fullWidth
      sx={{
        input: { color: 'white' },
        label: { color: 'white' },
        '& .MuiOutlinedInput-root': {
          '& fieldset': { borderColor: 'white' },
          '&:hover fieldset': { borderColor: 'gray' },
          '&.Mui-focused fieldset': { borderColor: 'gray' },
        },
        mb: 2,
      }}
    />
    <TextField
      label="Password"
      type="password"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
      fullWidth
      sx={{
        input: { color: 'white' },
        label: { color: 'white' },
        '& .MuiOutlinedInput-root': {
          '& fieldset': { borderColor: 'white' },
          '&:hover fieldset': { borderColor: 'gray' },
          '&.Mui-focused fieldset': { borderColor: 'gray' },
        },
        mb: 3,
        mt: 2,
      }}
    />
    <Button
      variant="contained"
      color="primary"
      fullWidth
      sx={{
        backgroundColor: 'gray',
        color: 'white',
        '&:hover': {
          backgroundColor: 'darkgray',
          color: 'black',
        },
        mt: 3,
      }}
      onClick={handleLogin}
    >
      Login
    </Button>
  </Container>
  );
};

export default LoginPage;
