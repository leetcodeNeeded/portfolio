import { motion } from 'framer-motion';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Chip,
  Stack,
  Paper,
  Avatar,
  CardMedia,
  Divider,
  useTheme,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PriceChangeIcon from '@mui/icons-material/PriceChange';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import SecurityIcon from '@mui/icons-material/Security';
import MedicationIcon from '@mui/icons-material/Medication';
import SelfImprovementIcon from '@mui/icons-material/SelfImprovement';
import HealingIcon from '@mui/icons-material/Healing';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import SupportIcon from '@mui/icons-material/Support';
import PsychologyIcon from '@mui/icons-material/Psychology';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const Services = () => {
  const theme = useTheme();

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const services = [
    {
      title: "Initial Psychiatric Evaluation",
      description: "Comprehensive assessment of mental health status, medical history, and diagnostic evaluation.",
      icon: <MedicalServicesIcon sx={{ fontSize: 36, color: 'white' }} />,
      duration: "60-90 minutes",
      price: "$300-350",
      image: "https://images.unsplash.com/photo-1551739440-5dd934d3a94a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2064&q=80",
      features: [
        "In-depth mental health history",
        "Medical condition review",
        "Symptom assessment",
        "Treatment plan development"
      ],
      gradient: "linear-gradient(135deg, #4a90e2, #357abd)"
    },
    {
      title: "Medication Management",
      description: "Regular follow-up sessions to monitor medication effectiveness and adjust treatment as needed.",
      icon: <MedicationIcon sx={{ fontSize: 36, color: 'white' }} />,
      duration: "20-30 minutes",
      price: "$150-200",
      image: "https://images.unsplash.com/photo-1587854692152-cbe660dbde88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
      features: [
        "Medication effectiveness review",
        "Side effect management",
        "Dosage adjustments",
        "Progress monitoring"
      ],
      gradient: "linear-gradient(135deg, #f39c12, #d68910)"
    },
    {
      title: "Psychotherapy Sessions",
      description: "Individual therapy sessions using evidence-based approaches to address specific mental health concerns.",
      icon: <PsychologyIcon sx={{ fontSize: 36, color: 'white' }} />,
      duration: "45-50 minutes",
      price: "$180-220",
      image: "https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Cognitive Behavioral Therapy",
        "Interpersonal Therapy",
        "Mindfulness techniques",
        "Skill development"
      ],
      gradient: "linear-gradient(135deg, #2ecc71, #27ae60)"
    },
    {
      title: "Telepsychiatry Sessions",
      description: "Convenient virtual appointments for evaluations and follow-ups via secure video conferencing.",
      icon: <SupportIcon sx={{ fontSize: 36, color: 'white' }} />,
      duration: "30-60 minutes",
      price: "$150-250",
      image: "https://images.unsplash.com/photo-1516726817505-f5ed825624d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
      features: [
        "Secure HIPAA-compliant platform",
        "Flexible scheduling",
        "Prescription management",
        "Same quality care as in-person"
      ],
      gradient: "linear-gradient(135deg, #3498db, #2980b9)"
    },
    {
      title: "Crisis Intervention",
      description: "Urgent care sessions to address acute mental health crises and stabilize symptoms.",
      icon: <HealingIcon sx={{ fontSize: 36, color: 'white' }} />,
      duration: "60-90 minutes",
      price: "$280-350",
      image: "https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2052&q=80",
      features: [
        "Rapid assessment",
        "Immediate intervention",
        "Safety planning",
        "Resource coordination"
      ],
      gradient: "linear-gradient(135deg, #e74c3c, #c0392b)"
    },
    {
      title: "Wellness & Stress Management",
      description: "Holistic sessions focused on developing coping strategies and improving overall mental wellness.",
      icon: <SelfImprovementIcon sx={{ fontSize: 36, color: 'white' }} />,
      duration: "45-60 minutes",
      price: "$160-200",
      image: "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
      features: [
        "Stress reduction techniques",
        "Lifestyle modifications",
        "Sleep hygiene guidance",
        "Relaxation training"
      ],
      gradient: "linear-gradient(135deg, #9b59b6, #8e44ad)"
    }
  ];

  const benefits = [
    {
      title: "Licensed Professional Care",
      description: "Treatment by a board-certified psychiatrist with extensive training and experience",
      icon: <VerifiedUserIcon fontSize="large" />,
      color: "#4a90e2"
    },
    {
      title: "Confidential Treatment",
      description: "Your privacy is protected with strict confidentiality protocols and HIPAA compliance",
      icon: <SecurityIcon fontSize="large" />,
      color: "#2ecc71"
    },
    {
      title: "Flexible Scheduling",
      description: "Convenient appointment times including evenings and telehealth options",
      icon: <AccessTimeIcon fontSize="large" />,
      color: "#f39c12"
    },
    {
      title: "Insurance Accepted",
      description: "In-network with many major insurance providers to make care more affordable",
      icon: <PriceChangeIcon fontSize="large" />,
      color: "#3498db"
    }
  ];

  const treatmentApproaches = [
    {
      title: "Medication Management",
      description: "Evidence-based pharmacological treatments tailored to your specific needs",
      icon: <MedicationIcon />,
      gradient: "linear-gradient(135deg, #4a90e2, #357abd)",
    },
    {
      title: "Cognitive Behavioral Therapy",
      description: "Techniques to modify thought patterns and behaviors that contribute to mental health issues",
      icon: <PsychologyIcon />,
      gradient: "linear-gradient(135deg, #f39c12, #d68910)",
    },
    {
      title: "Mindfulness Practices",
      description: "Approaches that increase awareness and acceptance of present moment experiences",
      icon: <SelfImprovementIcon />,
      gradient: "linear-gradient(135deg, #2ecc71, #27ae60)",
    },
    {
      title: "Supportive Therapy",
      description: "Empathetic guidance and practical support through difficult life challenges",
      icon: <SupportIcon />,
      gradient: "linear-gradient(135deg, #3498db, #2980b9)",
    },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', pt: 2, pb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, rgba(67, 97, 238, 0.9), rgba(247, 37, 133, 0.9)), url('https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
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
              Our Services
            </Typography>
            <Typography 
              variant="subtitle1" 
              align="center"
              sx={{ 
                maxWidth: 700,
                mx: 'auto',
                mb: 4,
                fontSize: '1.1rem',
                lineHeight: 1.8,
                opacity: 0.9,
              }}
            >
              Comprehensive psychiatric care tailored to your individual needs. We offer evidence-based treatments in a compassionate and supportive environment.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Benefits Section */}
      <Container sx={{ mb: 10 }}>
        <Grid container spacing={3}>
          {benefits.map((benefit, index) => (
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
                    borderTop: `4px solid ${benefit.color}`,
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
                      background: `linear-gradient(135deg, ${benefit.color}, ${benefit.color}bb)`,
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.15)',
                    }}
                  >
                    {benefit.icon}
                  </Box>
                  <Typography
                    variant="h6"
                    component="div"
                    gutterBottom
                    sx={{
                      fontWeight: 600,
                      color: benefit.color,
                    }}
                  >
                    {benefit.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      lineHeight: 1.7,
                    }}
                  >
                    {benefit.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Services Section */}
      <Container sx={{ mb: 10 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          className="gradient-text"
          sx={{ 
            fontWeight: 700,
            mb: 6,
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
          Professional Services
        </Typography>
        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item xs={12} md={6} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <Card
                  className="glass-card"
                  sx={{
                    display: 'flex',
                    flexDirection: { xs: 'column', sm: 'row' },
                    height: '100%',
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(20px)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
                    border: '1px solid rgba(255, 255, 255, 0.7)',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    position: 'relative',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      width: 4,
                      height: '100%',
                      background: service.gradient,
                      zIndex: 2,
                      borderTopLeftRadius: 16,
                      borderBottomLeftRadius: 16,
                    },
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12), 0 5px 15px rgba(0, 0, 0, 0.07)',
                    },
                  }}
                >
                  <Box sx={{ width: { xs: '100%', sm: '40%' }, position: 'relative' }}>
                    <CardMedia
                      component="img"
                      sx={{ 
                        height: { xs: 200, sm: '100%' },
                        minHeight: { sm: 320 },
                        filter: 'brightness(1.05) contrast(1.05)',
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          filter: 'brightness(1.1) contrast(1.1)',
                        }
                      }}
                      image={service.image}
                      alt={service.title}
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
                    <Avatar
                      sx={{
                        position: 'absolute',
                        top: 16,
                        left: 16,
                        background: service.gradient,
                        boxShadow: '0 4px 14px rgba(0, 0, 0, 0.25)',
                        width: 56,
                        height: 56,
                      }}
                    >
                      {service.icon}
                    </Avatar>
                  </Box>
                  <Box sx={{ 
                    flex: '1 1 auto',
                    display: 'flex',
                    flexDirection: 'column',
                    p: 3,
                  }}>
                    <Typography variant="h5" component="h3" gutterBottom className="gradient-text" sx={{ fontWeight: 700 }}>
                      {service.title}
                    </Typography>
                    <Typography variant="body2" sx={{ mb: 2, color: 'text.secondary', lineHeight: 1.7 }}>
                      {service.description}
                    </Typography>
                    
                    <Stack direction="row" spacing={2} sx={{ mb: 2 }}>
                      <Chip 
                        icon={<AccessTimeIcon />} 
                        label={service.duration} 
                        size="small" 
                        sx={{ 
                          bgcolor: 'rgba(67, 97, 238, 0.1)',
                          color: 'primary.main',
                          borderRadius: 2,
                        }}
                      />
                      <Chip 
                        icon={<PriceChangeIcon />} 
                        label={service.price} 
                        size="small" 
                        sx={{ 
                          bgcolor: 'rgba(247, 37, 133, 0.1)',
                          color: 'secondary.main',
                          borderRadius: 2,
                        }}
                      />
                    </Stack>
                    
                    <Divider sx={{ my: 2 }} />
                    
                    <Box sx={{ 
                      mb: 2,
                      flex: 1, // Make this grow to fill space
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-start',
                    }}>
                      <Grid container spacing={1}>
                        {service.features.map((feature, idx) => (
                          <Grid item xs={12} sm={6} key={idx}>
                            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
                              <CheckCircleIcon sx={{ mr: 1, color: 'success.main', fontSize: 20 }} />
                              <Typography variant="body2" color="text.secondary">
                                {feature}
                              </Typography>
                            </Box>
                          </Grid>
                        ))}
                      </Grid>
                    </Box>
                    
                    <Box sx={{ mt: 'auto', pt: 2 }}>
                      <Button
                        component={RouterLink}
                        to="/contact"
                        variant="contained"
                        color="primary"
                        fullWidth
                        sx={{
                          py: 1,
                          background: service.gradient,
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
                            opacity: 0.95,
                            transform: 'translateY(-2px)',
                            boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                            '&::before': {
                              left: '100%',
                            },
                          },
                        }}
                      >
                        Book Appointment
                      </Button>
                    </Box>
                  </Box>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Treatment Approaches */}
      <Container sx={{ mb: 10 }}>
        <Typography
          variant="h4"
          component="h2"
          gutterBottom
          className="gradient-text"
          sx={{ 
            fontWeight: 700,
            mb: 6,
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
          Treatment Approaches
        </Typography>
        <Grid container spacing={3}>
          {treatmentApproaches.map((approach, index) => (
            <Grid item xs={12} sm={6} md={3} key={index}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{ height: '100%' }}
              >
                <Paper
                  className="glass-card"
                  sx={{
                    p: 4,
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    textAlign: 'center',
                    background: 'rgba(255, 255, 255, 0.7)',
                    backdropFilter: 'blur(20px)',
                    border: '1px solid rgba(255, 255, 255, 0.7)',
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
                    transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                    position: 'relative',
                    overflow: 'hidden',
                    '&::before': {
                      content: '""',
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      height: 5,
                      background: approach.gradient,
                    },
                    '&:hover': {
                      transform: 'translateY(-8px)',
                      boxShadow: '0 15px 35px rgba(0, 0, 0, 0.12), 0 5px 15px rgba(0, 0, 0, 0.07)',
                    },
                  }}
                >
                  <Avatar
                    sx={{
                      width: 80,
                      height: 80,
                      mb: 3,
                      background: approach.gradient,
                      boxShadow: '0 4px 14px rgba(0, 0, 0, 0.2)',
                    }}
                  >
                    {approach.icon}
                  </Avatar>
                  <Typography
                    variant="h6"
                    gutterBottom
                    sx={{ fontWeight: 600 }}
                  >
                    {approach.title}
                  </Typography>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    sx={{ lineHeight: 1.7 }}
                  >
                    {approach.description}
                  </Typography>
                </Paper>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Call to Action */}
      <Container>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <Paper
            sx={{
              p: { xs: 4, md: 6 },
              textAlign: 'center',
              background: 'linear-gradient(135deg, rgba(67, 97, 238, 0.85), rgba(247, 37, 133, 0.85))',
              backdropFilter: 'blur(20px)',
              borderRadius: 4,
              color: 'white',
              position: 'relative',
              overflow: 'hidden',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07)',
              '&::before': {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `url('https://images.unsplash.com/photo-1557200134-90327ee9fafa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.15,
                zIndex: -1,
              },
            }}
          >
            <Box
              sx={{
                position: 'absolute',
                top: -30,
                right: -30,
                width: 150,
                height: 150,
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
              }}
            />
            <Box
              sx={{
                position: 'absolute',
                bottom: -40,
                left: -40,
                width: 200,
                height: 200,
                borderRadius: '50%',
                background: 'rgba(255, 255, 255, 0.1)',
              }}
            />
            <Typography
              variant="h3"
              gutterBottom
              sx={{
                fontWeight: 700,
                textShadow: '2px 2px 4px rgba(0,0,0,0.2)',
                position: 'relative',
                display: 'inline-block',
                mb: 3,
              }}
            >
              Ready to Take the First Step?
              <Box
                sx={{
                  position: 'absolute',
                  bottom: -8,
                  left: '50%',
                  transform: 'translateX(-50%)',
                  width: 100,
                  height: 3,
                  background: 'white',
                  borderRadius: 2,
                }}
              />
            </Typography>
            <Typography
              variant="h6"
              paragraph
              sx={{
                maxWidth: 700,
                mx: 'auto',
                mb: 6,
                opacity: 0.9,
                textShadow: '1px 1px 2px rgba(0,0,0,0.1)',
              }}
            >
              Schedule your consultation today and begin your journey toward improved mental health and well-being.
            </Typography>
            <Button
              component={RouterLink}
              to="/contact"
              variant="contained"
              size="large"
              startIcon={<AutoAwesomeIcon />}
              sx={{
                py: 1.5,
                px: 4,
                fontSize: '1.1rem',
                fontWeight: 600,
                background: 'rgba(255, 255, 255, 0.9)',
                color: 'primary.dark',
                boxShadow: '0 8px 16px rgba(0, 0, 0, 0.15)',
                position: 'relative',
                overflow: 'hidden',
                '&::before': {
                  content: '""',
                  position: 'absolute',
                  top: 0,
                  left: -100,
                  width: '100%',
                  height: '100%',
                  background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.8), transparent)',
                  transition: 'all 0.6s ease',
                  zIndex: 0,
                },
                '&:hover': {
                  background: 'rgba(255, 255, 255, 1)',
                  transform: 'translateY(-4px)',
                  boxShadow: '0 12px 24px rgba(0,0,0,0.2)',
                  '&::before': {
                    left: '100%',
                  },
                },
              }}
            >
              Schedule Consultation
            </Button>
          </Paper>
        </motion.div>
      </Container>
    </Box>
  );
};

export default Services; 