import { motion } from 'framer-motion';
import { useState } from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Paper,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Snackbar,
  Alert,
  useTheme,
  Avatar,
  Divider,
  InputAdornment,
} from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import PersonIcon from '@mui/icons-material/Person';
import MessageIcon from '@mui/icons-material/Message';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import SendIcon from '@mui/icons-material/Send';
import WarningIcon from '@mui/icons-material/Warning';

const Contact = () => {
  const theme = useTheme();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to your backend
    setSnackbar({
      open: true,
      message: 'Thank you for your message. We will contact you soon!',
      severity: 'success',
    });
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleCloseSnackbar = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  // Contact info for the right panel
  const contactInfo = [
    {
      icon: <LocationOnIcon />,
      primary: "Office Address",
      secondary: "123 Medical Plaza, Delhi, India",
      gradient: "linear-gradient(135deg, #4361ee, #3a0ca3)",
    },
    {
      icon: <PhoneIcon />,
      primary: "Phone Number",
      secondary: "+91 98765 43210",
      gradient: "linear-gradient(135deg, #f72585, #b5179e)",
    },
    {
      icon: <EmailIcon />,
      primary: "Email",
      secondary: "dr.harpuneet@example.com",
      gradient: "linear-gradient(135deg, #0cae74, #06d6a0)",
    },
    {
      icon: <AccessTimeIcon />,
      primary: "Office Hours",
      secondary: "Monday - Friday: 9 AM - 5 PM",
      gradient: "linear-gradient(135deg, #4cc9f0, #3e97b5)",
    },
  ];

  return (
    <Box sx={{ bgcolor: 'background.default', pt: 2, pb: 8 }}>
      {/* Hero Section */}
      <Box
        sx={{
          background: `linear-gradient(135deg, rgba(67, 97, 238, 0.9), rgba(247, 37, 133, 0.9)), url('https://images.unsplash.com/photo-1573497620053-ea5300f94f21?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          color: 'white',
          py: 10,
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
                display: 'inline-block',
                left: '50%',
                transform: 'translateX(-50%)',
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
              Get in Touch
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
              We're here to answer your questions and provide the support you need. 
              Reach out to schedule a consultation or learn more about our services.
            </Typography>
          </motion.div>
        </Container>
      </Box>

      {/* Main Content */}
      <Container maxWidth="lg">
        <Grid container spacing={5}>
          {/* Form Section */}
          <Grid item xs={12} md={7}>
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Paper 
                className="glass-card"
                sx={{ 
                  p: 4,
                  position: 'relative',
                  overflow: 'hidden',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: 5,
                    background: 'linear-gradient(to right, #4361ee, #f72585)',
                    borderRadius: '16px 16px 0 0',
                  },
                }}
              >
                <Typography 
                  variant="h4" 
                  gutterBottom 
                  className="gradient-text"
                  sx={{ 
                    fontWeight: 700,
                    mb: 4,
                    position: 'relative',
                    display: 'inline-block',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -8,
                      left: 0,
                      width: 40,
                      height: 3,
                      background: 'linear-gradient(45deg, #4361ee, #f72585)',
                      borderRadius: 2,
                    },
                  }}
                >
                  Send a Message
                </Typography>
                
                <form onSubmit={handleSubmit}>
                  <TextField
                    fullWidth
                    label="Full Name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    margin="normal"
                    required
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <PersonIcon color="primary" />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: theme.palette.primary.main,
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderWidth: 2,
                        }
                      }
                    }}
                  />
                  
                  <TextField
                    fullWidth
                    label="Email Address"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    margin="normal"
                    required
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <EmailIcon color="secondary" />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: theme.palette.secondary.main,
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderWidth: 2,
                          borderColor: theme.palette.secondary.main,
                        }
                      }
                    }}
                  />
                  
                  <TextField
                    fullWidth
                    label="Phone Number"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    margin="normal"
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <SmartphoneIcon style={{ color: theme.palette.success.main }} />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: theme.palette.success.main,
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderWidth: 2,
                          borderColor: theme.palette.success.main,
                        }
                      }
                    }}
                  />
                  
                  <TextField
                    fullWidth
                    label="Your Message"
                    name="message"
                    multiline
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    margin="normal"
                    required
                    variant="outlined"
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start" sx={{ mt: 1.5 }}>
                          <MessageIcon color="info" />
                        </InputAdornment>
                      ),
                    }}
                    sx={{
                      '& .MuiOutlinedInput-root': {
                        borderRadius: 2,
                        '&:hover .MuiOutlinedInput-notchedOutline': {
                          borderColor: theme.palette.info.main,
                        },
                        '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                          borderWidth: 2,
                          borderColor: theme.palette.info.main,
                        }
                      }
                    }}
                  />
                  
                  <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    fullWidth
                    endIcon={<SendIcon />}
                    sx={{
                      mt: 4,
                      py: 1.5,
                      background: 'linear-gradient(45deg, #4361ee, #f72585)',
                      borderRadius: 2,
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
                        boxShadow: '0 10px 25px rgba(67, 97, 238, 0.3)',
                        '&::before': {
                          left: '100%',
                        },
                      }
                    }}
                  >
                    Send Message
                  </Button>
                </form>
              </Paper>
            </motion.div>
          </Grid>

          {/* Contact Info Section */}
          <Grid item xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Paper 
                className="glass-card"
                sx={{ 
                  p: 4,
                  position: 'relative',
                  overflow: 'hidden',
                  height: '100%',
                  '&::before': {
                    content: '""',
                    position: 'absolute',
                    top: 0,
                    right: 0,
                    bottom: 0,
                    width: 5,
                    background: 'linear-gradient(to bottom, #4361ee, #f72585)',
                    borderRadius: '0 16px 16px 0',
                  },
                }}
              >
                <Typography 
                  variant="h4" 
                  gutterBottom 
                  className="gradient-text"
                  sx={{ 
                    fontWeight: 700,
                    mb: 4,
                    position: 'relative',
                    display: 'inline-block',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      bottom: -8,
                      left: 0,
                      width: 40,
                      height: 3,
                      background: 'linear-gradient(45deg, #4361ee, #f72585)',
                      borderRadius: 2,
                    },
                  }}
                >
                  Contact Details
                </Typography>

                <Box sx={{ mb: 4 }}>
                  {contactInfo.map((info, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          mb: 3,
                          p: 2,
                          borderRadius: 2,
                          background: 'rgba(255, 255, 255, 0.5)',
                          boxShadow: '0 4px 14px rgba(0, 0, 0, 0.05)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 10px 25px rgba(0, 0, 0, 0.08)',
                            background: 'rgba(255, 255, 255, 0.7)',
                          }
                        }}
                      >
                        <Avatar
                          sx={{
                            background: info.gradient,
                            color: 'white',
                            mr: 2,
                            boxShadow: '0 4px 10px rgba(0, 0, 0, 0.15)',
                          }}
                        >
                          {info.icon}
                        </Avatar>
                        <Box>
                          <Typography variant="subtitle1" sx={{ fontWeight: 600, color: 'text.primary' }}>
                            {info.primary}
                          </Typography>
                          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                            {info.secondary}
                          </Typography>
                        </Box>
                      </Box>
                    </motion.div>
                  ))}
                </Box>

                <Divider sx={{ my: 4, opacity: 0.5 }} />

                <Paper
                  sx={{
                    p: 3,
                    background: 'rgba(247, 37, 133, 0.07)',
                    borderRadius: 2,
                    border: '1px solid rgba(247, 37, 133, 0.2)',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                >
                  <Box sx={{ display: 'flex', alignItems: 'flex-start', mb: 2 }}>
                    <Avatar
                      sx={{
                        background: 'linear-gradient(135deg, #f72585, #b5179e)',
                        color: 'white',
                        mr: 2,
                      }}
                    >
                      <WarningIcon />
                    </Avatar>
                    <Typography
                      variant="h6"
                      sx={{ fontWeight: 600, color: theme.palette.secondary.dark }}
                    >
                      Emergency Contact
                    </Typography>
                  </Box>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    For urgent mental health emergencies, please call emergency services
                    (911) or visit your nearest emergency room. For immediate assistance,
                    you can also call our emergency hotline at <strong>+91 98765 99999</strong>.
                  </Typography>
                </Paper>
              </Paper>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* Map Section */}
      <Container sx={{ mt: 8 }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Paper
            className="glass-card"
            sx={{ 
              p: 3,
              borderRadius: 4,
              position: 'relative',
              overflow: 'hidden',
              height: 450,
            }}
          >
            <Box
              component="iframe"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224345.83923192776!2d77.06889754418377!3d28.52758200617607!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi%2C%20India!5e0!3m2!1sen!2sus!4v1650822579784!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0, borderRadius: 16 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </Paper>
        </motion.div>
      </Container>

      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={snackbar.severity}
          variant="filled"
          sx={{ width: '100%', boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default Contact; 