import { useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemText,
  Box,
  useTheme,
  useMediaQuery,
  Avatar,
  Container,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const menuItems = [
    { text: 'Home', path: '/' },
    { text: 'About', path: '/about' },
    { text: 'Services', path: '/services' },
    { text: 'Blog', path: '/blog' },
    { text: 'Contact', path: '/contact' },
  ];

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <Box sx={{ 
      width: 250,
      height: '100%', 
      background: 'linear-gradient(135deg, rgba(67, 97, 238, 0.95), rgba(247, 37, 133, 0.95))',
      color: 'white',
    }}>
      <Box sx={{ p: 2, display: 'flex', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.2)' }}>
        <Avatar 
          sx={{ 
            bgcolor: 'white', 
            color: theme.palette.primary.main,
            mr: 2,
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
          }}
        >
          <LocalHospitalIcon />
        </Avatar>
        <Typography variant="h6" sx={{ fontWeight: 700 }}>
          Dr. Harpuneet
        </Typography>
      </Box>
      <List>
        {menuItems.map((item) => (
          <ListItem
            button
            key={item.text}
            component={RouterLink}
            to={item.path}
            onClick={handleDrawerToggle}
            sx={{
              borderRadius: 2,
              m: 1,
              color: 'white',
              '&:hover': {
                bgcolor: 'rgba(255,255,255,0.1)',
              }
            }}
          >
            <ListItemText 
              primary={item.text} 
              primaryTypographyProps={{ 
                fontWeight: 500,
                sx: { letterSpacing: 0.5 }
              }} 
            />
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <AppBar position="sticky" color="default" elevation={1} sx={{ py: 0.5 }}>
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Box 
            sx={{ 
              display: 'flex', 
              alignItems: 'center', 
              mr: 2,
              '&:hover': {
                '& .logo-icon': {
                  transform: 'rotate(10deg) scale(1.1)',
                }
              }
            }}
            component={RouterLink} 
            to="/"
          >
            <Avatar 
              className="logo-icon"
              sx={{ 
                bgcolor: 'primary.main', 
                color: 'white',
                mr: 1.5,
                transition: 'all 0.3s ease',
                background: 'linear-gradient(135deg, #4361ee, #3a0ca3)',
                boxShadow: '0 4px 8px rgba(0,0,0,0.15)',
              }}
            >
              <LocalHospitalIcon />
            </Avatar>
            <Typography
              variant="h6"
              component="span"
              sx={{
                flexGrow: 1,
                textDecoration: 'none',
                fontWeight: 700,
                background: 'linear-gradient(45deg, #4361ee, #f72585)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                letterSpacing: '0.5px',
              }}
            >
              Dr. Harpuneet
            </Typography>
          </Box>

          <Box sx={{ flexGrow: 1 }} />

          {isMobile ? (
            <>
              <IconButton
                color="primary"
                aria-label="open drawer"
                edge="end"
                onClick={handleDrawerToggle}
                sx={{ 
                  ml: 2,
                  background: 'rgba(67, 97, 238, 0.1)',
                  '&:hover': {
                    background: 'rgba(67, 97, 238, 0.15)',
                  }
                }}
              >
                <MenuIcon />
              </IconButton>
              <Drawer
                variant="temporary"
                anchor="right"
                open={mobileOpen}
                onClose={handleDrawerToggle}
                ModalProps={{
                  keepMounted: true,
                }}
                PaperProps={{
                  sx: {
                    boxShadow: '-5px 0 25px rgba(0,0,0,0.1)',
                    borderTopLeftRadius: 16,
                    borderBottomLeftRadius: 16,
                    overflow: 'hidden'
                  }
                }}
              >
                {drawer}
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: 'flex', gap: 0.5 }}>
              {menuItems.map((item) => (
                <Button
                  key={item.text}
                  color="inherit"
                  component={RouterLink}
                  to={item.path}
                  sx={{
                    px: 2,
                    borderRadius: 2,
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      bottom: 0,
                      left: '50%',
                      transform: 'translateX(-50%)',
                      width: 0,
                      height: 2,
                      background: 'linear-gradient(45deg, #4361ee, #f72585)',
                      transition: 'all 0.3s ease',
                      opacity: 0,
                      borderRadius: 2,
                    },
                    '&:hover': {
                      color: theme.palette.primary.main,
                      background: 'rgba(67, 97, 238, 0.05)',
                      '&::before': {
                        width: '80%',
                        opacity: 1,
                      }
                    },
                  }}
                >
                  {item.text}
                </Button>
              ))}
              <Button
                variant="contained"
                color="primary"
                component={RouterLink}
                to="/contact"
                sx={{
                  ml: 2,
                  fontWeight: 600,
                  background: 'linear-gradient(45deg, #4361ee, #f72585)',
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: -100,
                    width: '100%',
                    height: '100%',
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.2), transparent)',
                    transition: 'all 0.6s ease',
                    zIndex: 0,
                  },
                  '&:hover': {
                    boxShadow: '0 8px 25px rgba(67, 97, 238, 0.3)',
                    '&::before': {
                      left: '100%',
                    },
                  }
                }}
              >
                Book Appointment
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar; 