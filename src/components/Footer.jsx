import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  Box,
  Container,
  Grid,
  Typography,
  Link,
  IconButton,
  Divider,
  useTheme,
} from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

const Footer = () => {
  const theme = useTheme();
  const year = new Date().getFullYear();

  const footerLinks = [
    {
      title: 'Quick Links',
      items: [
        { name: 'Home', link: '/' },
        { name: 'About', link: '/about' },
        { name: 'Services', link: '/services' },
        { name: 'Contact', link: '/contact' },
      ],
    },
    {
      title: 'Services',
      items: [
        { name: 'Individual Therapy', link: '/services' },
        { name: 'Medication Management', link: '/services' },
        { name: 'Telepsychiatry', link: '/services' },
        { name: 'Mental Health Assessment', link: '/services' },
      ],
    },
    {
      title: 'Contact Info',
      items: [
        { name: '123 Medical Plaza, Delhi, India', link: '#' },
        { name: 'info@drharpuneet.com', link: 'mailto:info@drharpuneet.com' },
        { name: '+91 98765 43210', link: 'tel:+919876543210' },
        { name: 'Mon-Fri: 9 AM - 5 PM', link: '#' },
      ],
    },
  ];

  return (
    <Box
      component="footer"
      sx={{
        background: 'rgba(255, 255, 255, 0.8)',
        backdropFilter: 'blur(20px)',
        borderTop: '1px solid rgba(255, 255, 255, 0.7)',
        boxShadow: '0 -5px 20px rgba(0, 0, 0, 0.05)',
        py: 6,
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          background: 'linear-gradient(135deg, rgba(67, 97, 238, 0.05), rgba(247, 37, 133, 0.05))',
          zIndex: 0,
        },
      }}
    >
      <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={4}>
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
              <LocalHospitalIcon
                sx={{
                  fontSize: 30,
                  mr: 1,
                  color: theme.palette.primary.main,
                }}
              />
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 700,
                  background: 'linear-gradient(45deg, #4361ee, #f72585)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                }}
              >
                Dr. Harpuneet
              </Typography>
            </Box>
            <Typography
              variant="body2"
              color="text.secondary"
              sx={{ mb: 3, maxWidth: 300 }}
            >
              Providing compassionate psychiatric care and mental health services for a better quality of life. Specialized treatment for anxiety, depression, and other conditions.
            </Typography>
            <Box>
              <IconButton
                aria-label="Facebook"
                sx={{
                  mr: 1,
                  color: '#1877F2',
                  background: 'rgba(24, 119, 242, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(24, 119, 242, 0.2)',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                <FacebookIcon />
              </IconButton>
              <IconButton
                aria-label="Twitter"
                sx={{
                  mr: 1,
                  color: '#1DA1F2',
                  background: 'rgba(29, 161, 242, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(29, 161, 242, 0.2)',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                <TwitterIcon />
              </IconButton>
              <IconButton
                aria-label="Instagram"
                sx={{
                  mr: 1,
                  color: '#E4405F',
                  background: 'rgba(228, 64, 95, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(228, 64, 95, 0.2)',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                <InstagramIcon />
              </IconButton>
              <IconButton
                aria-label="LinkedIn"
                sx={{
                  color: '#0A66C2',
                  background: 'rgba(10, 102, 194, 0.1)',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    background: 'rgba(10, 102, 194, 0.2)',
                    transform: 'translateY(-3px)',
                  },
                }}
              >
                <LinkedInIcon />
              </IconButton>
            </Box>
          </Grid>

          {footerLinks.map((section, index) => (
            <Grid item xs={12} sm={6} md={2.5} key={index}>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: 600,
                  mb: 2,
                  color: theme.palette.primary.main,
                  position: 'relative',
                  display: 'inline-block',
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: -5,
                    left: 0,
                    width: 30,
                    height: 2,
                    background: 'linear-gradient(45deg, #4361ee, #f72585)',
                    borderRadius: 1,
                  },
                }}
              >
                {section.title}
              </Typography>
              <Box component="ul" sx={{ p: 0, m: 0, listStyle: 'none' }}>
                {section.items.map((item, idx) => (
                  <Box
                    component="li"
                    key={idx}
                    sx={{ mb: 1.5 }}
                  >
                    <Link
                      component={RouterLink}
                      to={item.link}
                      sx={{
                        color: 'text.secondary',
                        textDecoration: 'none',
                        transition: 'all 0.2s ease',
                        display: 'inline-flex',
                        alignItems: 'center',
                        position: 'relative',
                        py: 0.5,
                        px: 0.5,
                        borderRadius: 1,
                        '&:hover': {
                          color: 'primary.dark',
                          fontWeight: 500,
                          background: 'rgba(67, 97, 238, 0.05)',
                          transform: 'translateX(5px)',
                          '&::after': {
                            content: '"→"',
                            marginLeft: '4px',
                            fontSize: '0.85rem',
                            opacity: 1,
                            transform: 'translateX(0)',
                          },
                        },
                        '&::after': {
                          content: '"→"',
                          marginLeft: '4px',
                          fontSize: '0.85rem',
                          opacity: 0,
                          transform: 'translateX(-8px)',
                          transition: 'all 0.3s ease',
                          color: 'primary.main',
                        }
                      }}
                    >
                      {item.name}
                    </Link>
                  </Box>
                ))}
              </Box>
            </Grid>
          ))}
        </Grid>

        <Divider sx={{ my: 4, opacity: 0.3 }} />

        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', sm: 'row' },
            alignItems: { xs: 'center', sm: 'center' },
            justifyContent: 'space-between',
          }}
        >
          <Typography variant="body2" color="text.secondary" sx={{ mb: { xs: 2, sm: 0 } }}>
            © {year} Dr. Harpuneet. All rights reserved.
          </Typography>
          <Box>
            <Link
              component={RouterLink}
              to="/privacy"
              sx={{
                color: 'text.secondary',
                mx: 2,
                textDecoration: 'none',
                position: 'relative',
                py: 0.5,
                px: 1,
                borderRadius: 1,
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: 'primary.dark',
                  fontWeight: 500,
                  background: 'rgba(67, 97, 238, 0.05)',
                  '&::after': {
                    width: '100%',
                  },
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: 2,
                  background: 'linear-gradient(45deg, #4361ee, #f72585)',
                  transition: 'all 0.3s ease',
                  borderRadius: 1,
                },
              }}
            >
              Privacy Policy
            </Link>
            <Link
              component={RouterLink}
              to="/terms"
              sx={{
                color: 'text.secondary',
                textDecoration: 'none',
                position: 'relative',
                py: 0.5,
                px: 1,
                borderRadius: 1,
                transition: 'all 0.3s ease',
                '&:hover': {
                  color: 'primary.dark',
                  fontWeight: 500,
                  background: 'rgba(67, 97, 238, 0.05)',
                  '&::after': {
                    width: '100%',
                  },
                },
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: 0,
                  height: 2,
                  background: 'linear-gradient(45deg, #4361ee, #f72585)',
                  transition: 'all 0.3s ease',
                  borderRadius: 1,
                },
              }}
            >
              Terms of Service
            </Link>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer; 