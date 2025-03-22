import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  useTheme,
  Paper,
  Stack,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HealingIcon from '@mui/icons-material/Healing';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MedicationIcon from '@mui/icons-material/Medication';
import SpaIcon from '@mui/icons-material/Spa';

const Home = () => {
  const theme = useTheme();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const features = [
    {
      icon: <PsychologyIcon sx={{ fontSize: 40 }} />,
      title: 'Expert Psychiatric Care',
      description: 'Specialized treatment for various mental health conditions with evidence-based approaches.',
    },
    {
      icon: <HealingIcon sx={{ fontSize: 40 }} />,
      title: 'Holistic Healing',
      description: 'Comprehensive treatment plans that address both mental and physical well-being.',
    },
    {
      icon: <SupportAgentIcon sx={{ fontSize: 40 }} />,
      title: 'Patient-Centered Care',
      description: 'Personalized treatment plans tailored to your unique needs and circumstances.',
    },
  ];

  const contactInfo = [
    {
      icon: <AccessTimeIcon sx={{ fontSize: 30 }} />,
      title: "Working Hours",
      description: "Monday - Friday: 9 AM - 5 PM",
      color: theme.palette.primary.main,
      gradient: "linear-gradient(135deg, #4361ee, #3a0ca3)"
    },
    {
      icon: <LocationOnIcon sx={{ fontSize: 30 }} />,
      title: "Location",
      description: "123 Medical Plaza, Delhi, India",
      color: theme.palette.secondary.main,
      gradient: "linear-gradient(135deg, #f72585, #b5179e)"
    },
    {
      icon: <PhoneIcon sx={{ fontSize: 30 }} />,
      title: "Contact",
      description: "+91 98765 43210",
      color: "#0cae74",
      gradient: "linear-gradient(135deg, #0cae74, #06d6a0)"
    }
  ];

  return (
    <Box sx={{ bgcolor: 'background.default' }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, rgba(67, 97, 238, 0.9), rgba(247, 37, 133, 0.9)), url('https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: { xs: '90vh', md: '85vh' },
          display: 'flex',
          alignItems: 'center',
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle, rgba(67, 97, 238, 0.3) 0%, rgba(247, 37, 133, 0.3) 100%)',
            backdropFilter: 'blur(2px)',
            zIndex: 1,
          },
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 5 }}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={7}>
              <motion.div {...fadeIn}>
                <Typography 
                  variant="h5" 
                  component="p" 
                  sx={{
                    color: 'white',
                    mb: 2,
                    textTransform: 'uppercase',
                    letterSpacing: 1,
                    fontWeight: 500,
                  }}
                >
                  Welcome to
                </Typography>
                <Typography
                  variant="h2"
                  component="h1"
                  sx={{
                    fontWeight: 800,
                    color: 'white',
                    mb: 3,
                    textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                    background: 'linear-gradient(45deg, #ffffff, #f0f0f0)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                  }}
                >
                  Dr. Harpuneet's<br />
                  Psychiatric Practice
                </Typography>
                <Typography
                  variant="h6"
                  sx={{
                    color: 'white',
                    mb: 4,
                    maxWidth: 600,
                    lineHeight: 1.8,
                    fontWeight: 400,
                    textShadow: '1px 1px 2px rgba(0,0,0,0.2)',
                  }}
                >
                  Compassionate mental health care for a better quality of life. Specialized treatment for anxiety, depression, and other mental health conditions.
                </Typography>
                <Button
                  component={RouterLink}
                  to="/contact"
                  variant="contained"
                  color="secondary"
                  size="large"
                  sx={{
                    py: 1.5,
                    px: 4,
                    background: 'linear-gradient(to right, #f72585, #b5179e)',
                    boxShadow: '0 10px 20px rgba(247, 37, 133, 0.3)',
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
                      transform: 'translateY(-5px)',
                      boxShadow: '0 15px 25px rgba(247, 37, 133, 0.4)',
                      '&::before': {
                        left: '100%',
                      },
                    },
                  }}
                >
                  Schedule a Consultation
                </Button>
              </motion.div>
            </Grid>
            <Grid item xs={12} md={5} sx={{ display: { xs: 'none', md: 'block' } }}>
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8 }}
              >
                <Box
                  className="glass-card"
                  sx={{
                    borderRadius: 5,
                    overflow: 'hidden',
                    height: 450,
                    width: '100%',
                    position: 'relative',
                    boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.4)',
                    border: '1px solid rgba(255, 255, 255, 0.4)',
                    transformStyle: 'preserve-3d',
                    transform: 'perspective(1000px)',
                    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
                    '&:hover': {
                      transform: 'perspective(1000px) rotateY(5deg)',
                      '& img': {
                        transform: 'scale(1.05)',
                      },
                    },
                  }}
                >
                  <img
                    src="https://img.freepik.com/free-photo/woman-doctor-wearing-lab-coat-with-stethoscope-isolated_1303-29791.jpg"
                    alt="Dr. Harpuneet"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      transition: 'transform 0.7s ease',
                    }}
                  />
                  <Box
                    sx={{
                      position: 'absolute',
                      bottom: 0,
                      left: 0,
                      right: 0,
                      p: 3,
                      background: 'rgba(255, 255, 255, 0.1)',
                      backdropFilter: 'blur(20px)',
                      borderTop: '1px solid rgba(255, 255, 255, 0.3)',
                    }}
                  >
                    <Typography variant="h6" sx={{ color: 'white', fontWeight: 600, textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
                      Dr. Harpuneet
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'white', opacity: 0.9, textShadow: '1px 1px 2px rgba(0,0,0,0.2)' }}>
                      MD Psychiatry, 15+ years of experience
                    </Typography>
                  </Box>
                </Box>
              </motion.div>
            </Grid>
          </Grid>
        </Container>
      </Box>

      {/* Contact Info Section */}
      <Container sx={{ py: 8, position: 'relative', zIndex: 2, mt: { xs: 0, md: -6 } }}>
        <Grid container spacing={3}>
          {contactInfo.map((item, index) => (
            <Grid item xs={12} md={4} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <Paper
                  className="glass-card gradient-border"
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    textAlign: 'center',
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.7)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 5,
                      background: item.gradient,
                    },
                    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      mb: 3,
                      p: 2,
                      borderRadius: '50%',
                      color: 'white',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      background: item.gradient,
                      boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)',
                      width: 70,
                      height: 70,
                    }}
                  >
                    {item.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="h3"
                    gutterBottom
                    sx={{ fontWeight: 600, color: 'text.primary' }}
                  >
                    {item.title}
                  </Typography>
                  <Typography
                    variant="body1"
                    sx={{ color: 'text.secondary' }}
                  >
                    {item.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Features Section */}
      <Container sx={{ py: 8 }}>
        <Box sx={{ mb: 8, textAlign: 'center' }}>
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            className="gradient-text"
            sx={{ 
              fontWeight: 700,
              position: 'relative',
              pb: 2,
              display: 'inline-block',
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: '50%',
                transform: 'translateX(-50%)',
                width: 60,
                height: 3,
                background: 'linear-gradient(45deg, #4361ee, #f72585)',
                borderRadius: 2,
              },
            }}
          >
            Comprehensive Mental Health Services
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              maxWidth: 800,
              mx: 'auto',
              color: 'text.secondary',
              mb: 2,
            }}
          >
            Dr. Harpuneet provides specialized care across a range of mental health conditions, offering evidence-based treatments in a supportive environment.
          </Typography>
        </Box>

        <Grid container spacing={4}>
          <Grid item xs={12} md={6} lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              style={{ height: '100%' }}
            >
              <Paper
                className="glass-card"
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.7)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 5,
                    background: 'linear-gradient(to right, #4361ee, #3a0ca3)',
                  },
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12), 0 5px 15px rgba(0, 0, 0, 0.07)',
                  },
                }}
              >
                <Box
                  sx={{
                    mb: 3,
                    width: 80,
                    height: 80,
                    mx: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #4361ee, #3a0ca3)',
                    borderRadius: '50%',
                    color: 'white',
                    boxShadow: '0 15px 35px rgba(67, 97, 238, 0.3)',
                  }}
                >
                  <PsychologyIcon sx={{ fontSize: 45 }} />
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 600, color: '#3a0ca3' }}
                >
                  Psychotherapy
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, height: 100 }}>
                  Personalized therapeutic approaches including CBT, DBT, and interpersonal therapy to address emotional and behavioral challenges.
                </Typography>
                <Button
                  component={RouterLink}
                  to="/services"
                  variant="outlined"
                  color="primary"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    borderRadius: 2,
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      background: 'rgba(67, 97, 238, 0.05)',
                    },
                  }}
                >
                  Learn More
                </Button>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              style={{ height: '100%' }}
            >
              <Paper
                className="glass-card"
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.7)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 5,
                    background: 'linear-gradient(to right, #f72585, #b5179e)',
                  },
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12), 0 5px 15px rgba(0, 0, 0, 0.07)',
                  },
                }}
              >
                <Box
                  sx={{
                    mb: 3,
                    width: 80,
                    height: 80,
                    mx: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #f72585, #b5179e)',
                    borderRadius: '50%',
                    color: 'white',
                    boxShadow: '0 15px 35px rgba(247, 37, 133, 0.3)',
                  }}
                >
                  <MedicationIcon sx={{ fontSize: 45 }} />
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 600, color: '#b5179e' }}
                >
                  Medication Management
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, height: 100 }}>
                  Expert psychiatric medication evaluation, prescription, and ongoing monitoring to effectively manage symptoms with minimal side effects.
                </Typography>
                <Button
                  component={RouterLink}
                  to="/services"
                  variant="outlined"
                  color="secondary"
                  endIcon={<ArrowForwardIcon />}
                  sx={{
                    borderRadius: 2,
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      background: 'rgba(247, 37, 133, 0.05)',
                    },
                  }}
                >
                  Learn More
                </Button>
              </Paper>
            </motion.div>
          </Grid>

          <Grid item xs={12} md={6} lg={4}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              style={{ height: '100%' }}
            >
              <Paper
                className="glass-card"
                sx={{
                  p: 4,
                  height: '100%',
                  background: 'rgba(255, 255, 255, 0.7)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255, 255, 255, 0.7)',
                  boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
                  textAlign: 'center',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 5,
                    background: 'linear-gradient(to right, #0cae74, #06d6a0)',
                  },
                  '&:hover': {
                    transform: 'translateY(-10px)',
                    boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12), 0 5px 15px rgba(0, 0, 0, 0.07)',
                  },
                }}
              >
                <Box
                  sx={{
                    mb: 3,
                    width: 80,
                    height: 80,
                    mx: 'auto',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'linear-gradient(135deg, #0cae74, #06d6a0)',
                    borderRadius: '50%',
                    color: 'white',
                    boxShadow: '0 15px 35px rgba(12, 174, 116, 0.3)',
                  }}
                >
                  <SpaIcon sx={{ fontSize: 45 }} />
                </Box>
                <Typography
                  variant="h5"
                  component="h3"
                  gutterBottom
                  sx={{ fontWeight: 600, color: '#0cae74' }}
                >
                  Holistic Approach
                </Typography>
                <Typography variant="body1" color="text.secondary" sx={{ mb: 3, height: 100 }}>
                  Integrative treatment plans that address the mind-body connection, including lifestyle modifications, stress management, and wellness strategies.
                </Typography>
                <Button
                  component={RouterLink}
                  to="/services"
                  variant="outlined"
                  sx={{
                    borderRadius: 2,
                    borderWidth: 2,
                    borderColor: '#0cae74',
                    color: '#0cae74',
                    '&:hover': {
                      borderWidth: 2,
                      borderColor: '#0cae74',
                      background: 'rgba(12, 174, 116, 0.05)',
                    },
                  }}
                  endIcon={<ArrowForwardIcon />}
                >
                  Learn More
                </Button>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Home; 