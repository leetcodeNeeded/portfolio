import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Grid,
  Paper,
  Avatar,
  Stack,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Card,
  CardContent,
  useTheme,
} from '@mui/material';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import VerifiedIcon from '@mui/icons-material/Verified';
import GroupsIcon from '@mui/icons-material/Groups';
import PsychologyIcon from '@mui/icons-material/Psychology';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import HealingIcon from '@mui/icons-material/Healing';
import FavoriteIcon from '@mui/icons-material/Favorite';

const About = () => {
  const theme = useTheme();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const stats = [
    {
      value: '15+',
      label: 'Years Experience',
      icon: <WorkIcon fontSize="large" />,
      color: '#4a90e2',
    },
    {
      value: '5000+',
      label: 'Patients Treated',
      icon: <GroupsIcon fontSize="large" />,
      color: '#f39c12',
    },
    {
      value: '20+',
      label: 'Research Papers',
      icon: <StarIcon fontSize="large" />,
      color: '#2ecc71',
    },
    {
      value: '8+',
      label: 'Specializations',
      icon: <MedicalServicesIcon fontSize="large" />,
      color: '#e74c3c',
    },
  ];

  const expertise = [
    {
      title: 'Depression & Mood Disorders',
      description: 'Effective treatment for various forms of depression and related mood disorders.',
      image: 'https://images.unsplash.com/photo-1614315517650-3771cf72d18a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      icon: <PsychologyIcon sx={{ fontSize: 36, color: 'white' }} />,
      gradient: 'linear-gradient(135deg, #4a90e2, #357abd)',
    },
    {
      title: 'Anxiety Disorders',
      description: 'Specialized care for various anxiety disorders using evidence-based treatments.',
      image: 'https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      icon: <HealingIcon sx={{ fontSize: 36, color: 'white' }} />,
      gradient: 'linear-gradient(135deg, #f39c12, #d68910)',
    },
    {
      title: 'ADHD Management',
      description: 'Comprehensive assessment and treatment plans for ADHD in adults and teens.',
      image: 'https://images.unsplash.com/photo-1559757175-7cb056fba93d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2029&q=80',
      icon: <FavoriteIcon sx={{ fontSize: 36, color: 'white' }} />,
      gradient: 'linear-gradient(135deg, #2ecc71, #27ae60)',
    },
    {
      title: 'Trauma & PTSD',
      description: 'Specialized treatment for trauma-related disorders with compassionate care.',
      image: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
      icon: <HealthAndSafetyIcon sx={{ fontSize: 36, color: 'white' }} />,
      gradient: 'linear-gradient(135deg, #3498db, #2980b9)',
    },
    {
      title: 'Bipolar Disorder',
      description: 'Expert care and medication management for bipolar disorder.',
      image: 'https://images.unsplash.com/photo-1559757148-5c350d0d3c56?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80',
      icon: <PsychologyIcon sx={{ fontSize: 36, color: 'white' }} />,
      gradient: 'linear-gradient(135deg, #e74c3c, #c0392b)',
    },
    {
      title: 'Sleep Disorders',
      description: 'Diagnosis and treatment of various sleep disorders affecting mental health.',
      image: 'https://images.unsplash.com/photo-1596461042071-8de00e13570a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      icon: <HealingIcon sx={{ fontSize: 36, color: 'white' }} />,
      gradient: 'linear-gradient(135deg, #9b59b6, #8e44ad)',
    },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', pt: 2, pb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, rgba(67, 97, 238, 0.9), rgba(247, 37, 133, 0.9)), url('https://images.unsplash.com/photo-1559757175-5700dde675bc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2073&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: 12,
          mb: 8,
          position: 'relative',
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: 'radial-gradient(circle, rgba(67, 97, 238, 0.2) 0%, rgba(247, 37, 133, 0.2) 100%)',
            backdropFilter: 'blur(2px)',
            zIndex: 1,
          },
        }}
      >
        <Container sx={{ position: 'relative', zIndex: 2 }}>
          <motion.div {...fadeIn}>
            <Typography
              variant="h2"
              component="h1"
              gutterBottom
              sx={{
                fontWeight: 700,
                textAlign: 'center',
                textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
                background: 'linear-gradient(45deg, #ffffff, #f0f0f0)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                position: 'relative',
                '&::after': {
                  content: '""',
                  position: 'absolute',
                  bottom: -16,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 60,
                  height: 4,
                  background: 'linear-gradient(45deg, #ffffff, rgba(255,255,255,0.5))',
                  borderRadius: 2,
                },
              }}
            >
              About Dr. Harpuneet
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Stats Section */}
      <Container sx={{ mb: 10 }}>
        <Grid container spacing={3}>
          {stats.map((stat, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <Paper
                  className="glass-card gradient-border"
                  sx={{
                    p: 3,
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
                    borderTop: `4px solid ${stat.color}`,
                    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    overflow: 'hidden',
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12), 0 5px 15px rgba(0, 0, 0, 0.07)',
                      background: 'rgba(255, 255, 255, 0.8)',
                    },
                  }}
                >
                  <Box
                    sx={{
                      color: 'white',
                      mb: 2,
                      p: 1.5,
                      borderRadius: '50%',
                      background: `linear-gradient(135deg, ${stat.color}, ${stat.color}bb)`,
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
                    }}
                  >
                    {stat.icon}
                  </Box>
                  <Typography
                    variant="h3"
                    component="div"
                    gutterBottom
                    sx={{
                      fontWeight: 700,
                      color: stat.color,
                      textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
                    }}
                  >
                    {stat.value}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    sx={{
                      fontWeight: 500,
                      color: 'text.secondary',
                    }}
                  >
                    {stat.label}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Professional Background */}
      <Container sx={{ mb: 10 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Paper
                className="glass-card"
                elevation={0}
                sx={{
                  p: 2,
                  overflow: 'hidden',
                }}
              >
                <Box
                  component="img"
                  src="https://images.unsplash.com/photo-1582719471384-894fbb16e074?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2087&q=80"
                  alt="Brain Scan"
                  sx={{
                    width: '100%',
                    height: 400,
                    objectFit: 'cover',
                    borderRadius: 2,
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.1)',
                    transition: 'all 0.5s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    filter: 'brightness(1.05) contrast(1.05)',
                    '&:hover': {
                      transform: 'scale(1.02)',
                      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.15)',
                      filter: 'brightness(1.1) contrast(1.1)',
                    },
                  }}
                />
              </Paper>
            </motion.div>
          </Grid>
          <Grid item xs={12} md={6}>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Typography
                variant="h4"
                component="h2"
                gutterBottom
                className="gradient-text"
                sx={{ 
                  fontWeight: 700,
                  position: 'relative',
                  pb: 2,
                  '&::after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: 50,
                    height: 3,
                    background: 'linear-gradient(45deg, #4361ee, #f72585)',
                    borderRadius: 2,
                  },
                }}
              >
                Professional Background
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ 
                  mt: 3,
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.primary',
                }}
              >
                Dr. Harpuneet is a board-certified psychiatrist with extensive training and experience in treating a wide range of mental health conditions. She completed her medical education at prestigious institutions and has since dedicated her career to providing compassionate, evidence-based care to her patients.
              </Typography>
              <Typography
                variant="body1"
                paragraph
                sx={{ 
                  fontSize: '1.1rem',
                  lineHeight: 1.8,
                  color: 'text.primary',
                }}
              >
                With a patient-centered approach, Dr. Harpuneet believes in treating the whole person, not just the symptoms. She combines the latest therapeutic techniques with medication management when appropriate to develop comprehensive treatment plans tailored to each individual's unique needs.
              </Typography>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Education and Qualifications */}
      <Container sx={{ mb: 10 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            className="gradient-text"
            sx={{ 
              fontWeight: 700,
              mb: 4,
              position: 'relative',
              pb: 2,
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: 50,
                height: 3,
                background: 'linear-gradient(45deg, #4361ee, #f72585)',
                borderRadius: 2,
              },
            }}
          >
            Education & Qualifications
          </Typography>
          <Paper
            className="glass-card"
            elevation={0}
            sx={{
              p: 4,
              position: 'relative',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '100%',
                background: 'linear-gradient(180deg, rgba(255, 255, 255, 0.25) 0%, rgba(255, 255, 255, 0) 100%)',
                opacity: 0.6,
                zIndex: 0,
              }
            }}
          >
            <List>
              <ListItem 
                sx={{ 
                  py: 2,
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  borderRadius: 2,
                  '&:hover': {
                    transform: 'translateX(8px)',
                    background: 'rgba(67, 97, 238, 0.05)',
                  },
                }}
              >
                <ListItemIcon>
                  <Avatar
                    sx={{
                      background: 'linear-gradient(135deg, #4361ee, #4895ef)',
                      boxShadow: '0 4px 14px rgba(67, 97, 238, 0.3)',
                    }}
                  >
                    <SchoolIcon />
                  </Avatar>
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Doctor of Medicine (MD)
                    </Typography>
                  }
                  secondary="Stanford University School of Medicine"
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem 
                sx={{ 
                  py: 2,
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  borderRadius: 2,
                  '&:hover': {
                    transform: 'translateX(8px)',
                    background: 'rgba(247, 37, 133, 0.05)',
                  },
                }}
              >
                <ListItemIcon>
                  <Avatar
                    sx={{
                      background: 'linear-gradient(135deg, #f72585, #ff4d6d)',
                      boxShadow: '0 4px 14px rgba(247, 37, 133, 0.3)',
                    }}
                  >
                    <WorkIcon />
                  </Avatar>
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Residency in Psychiatry
                    </Typography>
                  }
                  secondary="Johns Hopkins Hospital"
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem 
                sx={{ 
                  py: 2,
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  borderRadius: 2,
                  '&:hover': {
                    transform: 'translateX(8px)',
                    background: 'rgba(46, 196, 182, 0.05)',
                  },
                }}
              >
                <ListItemIcon>
                  <Avatar
                    sx={{
                      background: 'linear-gradient(135deg, #2ec4b6, #72efdd)',
                      boxShadow: '0 4px 14px rgba(46, 196, 182, 0.3)',
                    }}
                  >
                    <MedicalServicesIcon />
                  </Avatar>
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Clinical Experience
                    </Typography>
                  }
                  secondary="15+ years of practice in hospital and private settings"
                />
              </ListItem>
              <Divider variant="inset" component="li" />
              <ListItem 
                sx={{ 
                  py: 2,
                  transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                  borderRadius: 2,
                  '&:hover': {
                    transform: 'translateX(8px)',
                    background: 'rgba(76, 201, 240, 0.05)',
                  },
                }}
              >
                <ListItemIcon>
                  <Avatar
                    sx={{
                      background: 'linear-gradient(135deg, #4cc9f0, #3a86ff)',
                      boxShadow: '0 4px 14px rgba(76, 201, 240, 0.3)',
                    }}
                  >
                    <VerifiedIcon />
                  </Avatar>
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="h6" sx={{ fontWeight: 600 }}>
                      Board Certification
                    </Typography>
                  }
                  secondary="American Board of Psychiatry and Neurology"
                />
              </ListItem>
            </List>
          </Paper>
        </motion.div>
      </Container>

      {/* Areas of Expertise */}
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="h4"
            component="h2"
            gutterBottom
            className="gradient-text"
            sx={{ 
              fontWeight: 700,
              mb: 4,
              position: 'relative',
              pb: 2,
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: 50,
                height: 3,
                background: 'linear-gradient(45deg, #4361ee, #f72585)',
                borderRadius: 2,
              },
            }}
          >
            Areas of Expertise
          </Typography>
          
          <Grid container spacing={3}>
            {expertise.map((area, index) => (
              <Grid item xs={12} sm={6} md={4} key={index}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  style={{ height: '100%' }}
                >
                  <Card
                    className="glass-card"
                    sx={{
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      background: 'rgba(255, 255, 255, 0.7)',
                      backdropFilter: 'blur(20px)',
                      boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
                      border: '1px solid rgba(255, 255, 255, 0.7)',
                      transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                      '&:hover': {
                        transform: 'translateY(-8px)',
                        boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12), 0 5px 15px rgba(0, 0, 0, 0.07)',
                      },
                    }}
                  >
                    <Box sx={{ position: 'relative', height: 180 }}>
                      <Box
                        component="img"
                        src={area.image}
                        alt={area.title}
                        sx={{
                          width: '100%',
                          height: '100%',
                          objectFit: 'cover',
                          transition: 'all 0.3s ease',
                          filter: 'brightness(1.05) contrast(1.05)',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          background: 'linear-gradient(0deg, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0) 50%, rgba(0,0,0,0.2) 100%)',
                        }}
                      />
                      <Box
                        sx={{
                          position: 'absolute',
                          bottom: 12,
                          left: 12,
                          color: 'white',
                          display: 'flex',
                          alignItems: 'center',
                        }}
                      >
                        <Avatar
                          sx={{
                            mr: 1.5,
                            background: area.gradient,
                            boxShadow: '0 4px 8px rgba(0,0,0,0.25)',
                          }}
                        >
                          {area.icon}
                        </Avatar>
                        <Typography
                          variant="h6"
                          component="div"
                          sx={{
                            fontWeight: 600,
                            textShadow: '1px 1px 2px rgba(0,0,0,0.5)',
                          }}
                        >
                          {area.title}
                        </Typography>
                      </Box>
                    </Box>
                    <CardContent sx={{ 
                      flexGrow: 1, 
                      p: 3,
                      height: 80, // Fixed height for content to ensure uniformity
                      overflow: 'auto', // Allow scrolling if content is too long
                      '&::-webkit-scrollbar': {
                        width: '4px',
                      },
                      '&::-webkit-scrollbar-thumb': {
                        background: area.gradient,
                        borderRadius: '4px',
                      },
                    }}>
                      <Typography 
                        variant="body1" 
                        color="text.secondary"
                        sx={{ 
                          lineHeight: 1.7,
                        }}
                      >
                        {area.description}
                      </Typography>
                    </CardContent>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        </motion.div>
      </Container>
    </Box>
  );
};

export default About; 