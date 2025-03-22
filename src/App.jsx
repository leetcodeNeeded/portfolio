import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme, CssBaseline } from '@mui/material';
import { AuthProvider } from './contexts/AuthContext';
import PrivateRoute from './components/PrivateRoute';

// Layout Components
import Navbar from './components/Navbar';
import Footer from './components/Footer';

// Pages
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';

// Blog Pages
import Blog from './pages/Blog';
import BlogPost from './pages/BlogPost';

// Admin Pages
import Login from './pages/Login';
import AdminDashboard from './pages/AdminDashboard';
import BlogEditor from './pages/BlogEditor';

function App() {
  const theme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: '#f8fafc'
      },
      primary: {
        main: '#4361ee',
        light: '#738eef',
        dark: '#3a0ca3',
        contrastText: '#ffffff'
      },
      secondary: {
        main: '#f72585',
        light: '#fb6eae',
        dark: '#b5179e',
        contrastText: '#ffffff'
      },
      success: {
        main: '#06d6a0',
        light: '#79e9ca',
        dark: '#0cae74'
      },
      info: {
        main: '#4cc9f0',
        light: '#7ddaf4',
        dark: '#3e97b5'
      }
    },
    typography: {
      fontFamily: '"Poppins", "Roboto", "Helvetica", "Arial", sans-serif',
      h1: {
        fontWeight: 700,
      },
      h2: {
        fontWeight: 700,
      },
      h3: {
        fontWeight: 600,
      },
      h4: {
        fontWeight: 600,
      },
      button: {
        textTransform: 'none',
        fontWeight: 600,
      },
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            scrollbarColor: "#d9d9d9 #f5f5f5",
            "&::-webkit-scrollbar, & *::-webkit-scrollbar": {
              backgroundColor: "#f5f5f5",
              width: 10,
            },
            "&::-webkit-scrollbar-thumb, & *::-webkit-scrollbar-thumb": {
              borderRadius: 8,
              backgroundColor: "#d9d9d9",
              minHeight: 24,
            },
            "&::-webkit-scrollbar-thumb:hover, & *::-webkit-scrollbar-thumb:hover": {
              backgroundColor: "#b5b5b5",
            },
          },
          ".gradient-text": {
            background: 'linear-gradient(45deg, #4361ee, #f72585)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
          },
          ".glass-card": {
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            borderRadius: 16,
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
            border: '1px solid rgba(255, 255, 255, 0.7)',
            transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
            overflow: 'hidden',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07)',
              backgroundColor: 'rgba(255, 255, 255, 0.8)',
            },
          },
          ".gradient-border": {
            position: 'relative',
            '&::before': {
              content: '""',
              position: 'absolute',
              inset: 0,
              borderRadius: 16,
              padding: '2px',
              background: 'linear-gradient(45deg, #4361ee, #f72585)',
              WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
              WebkitMaskComposite: 'xor',
              maskComposite: 'exclude',
              pointerEvents: 'none',
            },
          }
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            borderRadius: 8,
            padding: '10px 16px',
            boxShadow: '0 4px 14px 0 rgba(0,0,0,0.1)',
            transition: 'all 0.3s ease',
            '&:hover': {
              transform: 'translateY(-2px)',
              boxShadow: '0 6px 20px rgba(0,0,0,0.15)'
            },
          },
          contained: {
            background: 'linear-gradient(45deg, #4361ee, #738eef)',
            '&:hover': {
              background: 'linear-gradient(45deg, #3a57e5, #6c85ed)'
            }
          },
          containedSecondary: {
            background: 'linear-gradient(45deg, #f72585, #fb6eae)',
            '&:hover': {
              background: 'linear-gradient(45deg, #f01a7d, #fa61a9)'
            }
          },
        },
      },
      MuiCard: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            overflow: 'hidden',
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.7)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
            transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
            '&:hover': {
              transform: 'translateY(-8px)',
              boxShadow: '0 15px 35px rgba(0, 0, 0, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07)',
            },
          },
        },
      },
      MuiPaper: {
        styleOverrides: {
          root: {
            borderRadius: 16,
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.7)',
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
          },
          elevation1: {
            boxShadow: '0 4px 14px rgba(0, 0, 0, 0.05), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
          },
          elevation4: {
            boxShadow: '0 8px 24px rgba(0, 0, 0, 0.08), inset 0 1px 2px rgba(255, 255, 255, 0.3)',
          },
        },
      },
      MuiAppBar: {
        styleOverrides: {
          root: {
            background: 'rgba(255, 255, 255, 0.85)',
            backdropFilter: 'blur(20px)',
            boxShadow: '0 4px 20px rgba(0, 0, 0, 0.05)',
            borderBottom: '1px solid rgba(255, 255, 255, 0.8)',
          },
        },
      },
      MuiContainer: {
        styleOverrides: {
          root: {
            paddingLeft: 24,
            paddingRight: 24,
            '@media (min-width: 600px)': {
              paddingLeft: 32,
              paddingRight: 32,
            },
          },
        },
      },
      MuiCardContent: {
        styleOverrides: {
          root: {
            padding: 24,
            '&:last-child': {
              paddingBottom: 24
            }
          }
        }
      },
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <AuthProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            
            {/* Blog Routes */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            
            {/* Auth Routes */}
            <Route path="/login" element={<Login />} />
            
            {/* Admin Routes - Protected */}
            <Route 
              path="/admin" 
              element={
                <PrivateRoute>
                  <AdminDashboard />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/admin/blog/new" 
              element={
                <PrivateRoute>
                  <BlogEditor />
                </PrivateRoute>
              } 
            />
            <Route 
              path="/admin/blog/edit/:id" 
              element={
                <PrivateRoute>
                  <BlogEditor />
                </PrivateRoute>
              } 
            />
            
            {/* 404 Route */}
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
          <Footer />
        </Router>
      </AuthProvider>
    </ThemeProvider>
  );
}

export default App;
