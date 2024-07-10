import React, { useEffect, useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Box from '@mui/material/Box';
import useMediaQuery from '@mui/material/useMediaQuery';
import ListItemButton from '@mui/material/ListItemButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import useAuth from '../hooks/useAuth';

const Navbar: React.FC = () => {
  const { user, logout } = useAuth();
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery('(max-width:600px)');

  const handleLogout = async () => {
    await logout();
  };

  useEffect(() => {
    console.log('nav', user)
  }, [user]);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (event.type === 'keydown' && ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  const drawerContent = (
    <Box
      sx={{ width: 250, backgroundColor: 'rgb(54, 53, 53)', height: '100%', color: 'white' }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List key={user?.toString()}>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/" sx={{ color: 'white' }}>
            <ListItemText primary="Home" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/favorites" sx={{ color: 'white' }}>
            <ListItemText primary="Favorites" />
          </ListItemButton>
        </ListItem>
        {user ? (
          <ListItem disablePadding>
            <ListItemButton onClick={handleLogout} sx={{ color: 'white' }}>
              <ListItemText primary="Logout" />
            </ListItemButton>
          </ListItem>
        ) : (
          <ListItem disablePadding>
            <ListItemButton component={Link} to="/register" sx={{ color: 'white' }}>
              <ListItemText primary="Register" />
            </ListItemButton>
          </ListItem>
        )}
      </List>
    </Box>
  );

  return (
    <AppBar key={user?.toString()} position="static" sx={{ backgroundColor: 'black' }}>
      <Toolbar>
        <Typography
          component={Link}
          to="/"
          variant="h6"
          sx={{
            flexGrow: 1,
            fontSize: '1.5rem',
            textDecoration: 'none',
            color: 'inherit',
          }}
        >
          Movie Explorer
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={toggleDrawer(true)}
            >
              <MenuIcon />
            </IconButton>
            <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
              {drawerContent}
            </Drawer>
          </>
        ) : (
          <>
          
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
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
