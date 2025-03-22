import React from 'react';
import { Box, Container, Typography, Button, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Link as RouterLink } from 'react-router-dom';
import SentimentDissatisfiedIcon from '@mui/icons-material/SentimentDissatisfied';

const NotFound = () => {
  const theme = useTheme();
  
  return (
    <Box 
      component="section" 
      sx={{ 
        py: 8, 
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: `radial-gradient(circle, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
      }}
    >
      <Container maxWidth="md">
        <Box 
          sx={{ 
            textAlign: 'center',
            p: 5,
            borderRadius: 4,
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <SentimentDissatisfiedIcon 
              sx={{ 
                fontSize: 100, 
                color: 'text.secondary',
                mb: 2
              }} 
            />
            
            <Typography 
              variant="h1" 
              component="h1" 
              sx={{ 
                fontWeight: 700, 
                fontSize: { xs: '4rem', md: '8rem' },
                background: `linear-gradient(45deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                mb: 2
              }}
            >
              404
            </Typography>
            
            <Typography 
              variant="h4" 
              component="h2" 
              sx={{ fontWeight: 600, mb: 3 }}
            >
              Page Not Found
            </Typography>
            
            <Typography 
              variant="body1" 
              sx={{ 
                mb: 4, 
                maxWidth: 500, 
                mx: 'auto',
                color: 'text.secondary'
              }}
            >
              The page you're looking for doesn't exist or has been moved.
              Let's get you back on track.
            </Typography>
            
            <Box sx={{ display: 'flex', justifyContent: 'center', gap: 2 }}>
              <Button
                variant="contained"
                color="primary"
                component={RouterLink}
                to="/"
                sx={{
                  py: 1.5,
                  px: 3,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    transform: 'translateY(-2px)',
                    boxShadow: `0 4px 12px ${theme.palette.primary.main}40`
                  }
                }}
              >
                Back to Home
              </Button>
              
              <Button
                variant="outlined"
                component={RouterLink}
                to="/contact"
                sx={{
                  py: 1.5,
                  px: 3,
                  borderRadius: 2,
                  textTransform: 'none',
                  fontWeight: 600,
                  borderColor: theme.palette.primary.main,
                  '&:hover': {
                    borderColor: theme.palette.primary.dark,
                    transform: 'translateY(-2px)',
                    backgroundColor: 'rgba(0, 0, 0, 0.05)'
                  }
                }}
              >
                Contact Us
              </Button>
            </Box>
          </motion.div>
        </Box>
      </Container>
    </Box>
  );
};

export default NotFound; 