import React from 'react';
import { AppBar, Toolbar, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    await logout();
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Typography variant="h6" sx={{ flexGrow: 1, fontSize: '1.5rem' }}>
          Movie Explorer
        </Typography>
        <Button
          color="inherit"
          component={Link}
          to="/"
          sx={{
            fontSize: '1.2rem',
            '&:hover': {
              backgroundColor: 'gray',
              color: 'white',
              fontWeight: 'bold',
            },
          }}
        >
          Home
        </Button>
        <Button
          color="inherit"
          component={Link}
          to="/favorites"
          sx={{
            fontSize: '1.2rem',
            '&:hover': {
              backgroundColor: 'gray',
              color: 'white',
              fontWeight: 'bold',
            },
          }}
        >
          Favorites
        </Button>
        {user ? (
          <Button
            color="inherit"
            onClick={handleLogout}
            sx={{
              fontSize: '1.2rem',
              '&:hover': {
                backgroundColor: 'gray',
                color: 'white',
                fontWeight: 'bold',
              },
            }}
          >
            Logout
          </Button>
        ) : (
          <Button
            color="inherit"
            component={Link}
            to="/register"
            sx={{
              fontSize: '1.2rem',
              '&:hover': {
                backgroundColor: 'gray',
                color: 'white',
                fontWeight: 'bold',
              },
            }}
          >
            Register
          </Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
