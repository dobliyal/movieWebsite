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
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          Movie Explorer
        </Typography>
        <Button color="inherit" component={Link} to="/">Home</Button>
        <Button color="inherit" component={Link} to="/favorites">Favorites</Button>
        {user ? (
          <Button color="inherit" onClick={handleLogout}>Logout</Button>
        ) : (
          <Button color="inherit" component={Link} to="/register">Register</Button>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
