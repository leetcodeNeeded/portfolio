import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Box, Container, Typography, Chip, Avatar, Divider, Button, Grid, Card, CardActionArea, 
  CardContent, CardMedia, useTheme, Paper } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import { getBlogById, getAllBlogs } from '../services/blogService';

const BlogPost = () => {
  const { id } = useParams();
  const theme = useTheme();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [relatedBlogs, setRelatedBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchBlog = () => {
      try {
        const blogData = getBlogById(parseInt(id));
        if (blogData) {
          setBlog(blogData);
          
          // Get related blogs from the same category
          const allBlogs = getAllBlogs();
          const related = allBlogs
            .filter(b => b.id !== blogData.id && b.category === blogData.category)
            .slice(0, 3);
          setRelatedBlogs(related);
        } else {
          navigate('/blog', { replace: true });
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchBlog();
    window.scrollTo(0, 0);
  }, [id, navigate]);
  
  if (loading) {
    return (
      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
        <Typography variant="h5">Loading...</Typography>
      </Box>
    );
  }
  
  if (!blog) return null;
  
  return (
    <Box component="section" sx={{ py: 8, minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '50vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 6,
          overflow: 'hidden',
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: `url(${blog.image})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            filter: 'brightness(0.7)',
            zIndex: -1,
          },
          '&::after': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: `linear-gradient(to bottom, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.5) 100%)`,
            zIndex: -1,
          }
        }}
      >
        <Container maxWidth="md">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Button
              startIcon={<ArrowBackIcon />}
              onClick={() => navigate('/blog')}
              sx={{
                color: 'white',
                mb: 3,
                borderRadius: 2,
                textTransform: 'none',
                backgroundColor: 'rgba(255, 255, 255, 0.1)',
                backdropFilter: 'blur(5px)',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                }
              }}
            >
              Back to Blog
            </Button>
            <Typography 
              variant="h2" 
              component="h1" 
              sx={{
                fontWeight: 700,
                color: 'white',
                textShadow: '2px 2px 4px rgba(0,0,0,0.5)',
                mb: 2
              }}
            >
              {blog.title}
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', gap: 2, mb: 1 }}>
              <Chip 
                label={blog.category}
                sx={{
                  backgroundColor: 
                    blog.category === 'Mental Health' ? `${theme.palette.primary.main}80` : 
                    blog.category === 'Wellness' ? `${theme.palette.secondary.main}80` : 
                    `${theme.palette.info.main}80`,
                  color: 'white',
                  fontWeight: 500,
                  backdropFilter: 'blur(5px)',
                }}
              />
              <Box sx={{ display: 'flex', alignItems: 'center', color: 'white' }}>
                <CalendarTodayIcon sx={{ fontSize: 16, mr: 0.5 }} />
                <Typography variant="body2">{blog.date}</Typography>
              </Box>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center', mt: 2 }}>
              <Avatar 
                alt={blog.author} 
                src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80"
                sx={{ width: 50, height: 50, mr: 2, border: '2px solid white' }} 
              />
              <Typography variant="subtitle1" sx={{ color: 'white', fontWeight: 500 }}>
                {blog.author}
              </Typography>
            </Box>
          </motion.div>
        </Container>
      </Box>
      
      <Container maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} md={8}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Paper
                elevation={0}
                sx={{
                  p: { xs: 3, md: 5 },
                  borderRadius: 2,
                  backgroundColor: 'rgba(255, 255, 255, 0.05)',
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
                  mb: 4
                }}
              >
                <Box 
                  className="blog-content" 
                  sx={{ 
                    "& p": { 
                      mb: 2,
                      lineHeight: 1.8
                    },
                    "& ul, & ol": { 
                      mb: 2,
                      pl: 3
                    },
                    "& li": { 
                      mb: 1
                    },
                    "& strong": {
                      color: theme.palette.primary.main,
                      fontWeight: 600
                    }
                  }}
                  dangerouslySetInnerHTML={{ __html: blog.content }} 
                />
                <Divider sx={{ my: 3 }} />
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1 }}>
                  {blog.tags.map(tag => (
                    <Chip
                      key={tag}
                      label={tag}
                      size="small"
                      variant="outlined"
                      sx={{
                        borderRadius: 1,
                        transition: 'all 0.3s ease',
                        '&:hover': {
                          backgroundColor: `${theme.palette.primary.main}10`,
                          borderColor: theme.palette.primary.main
                        }
                      }}
                    />
                  ))}
                </Box>
              </Paper>
            </motion.div>
          </Grid>
          
          <Grid item xs={12} md={4}>
            <Box sx={{ position: 'sticky', top: 100 }}>
              <Typography 
                variant="h6" 
                sx={{ 
                  mb: 3, 
                  fontWeight: 600,
                  position: 'relative',
                  display: 'inline-block',
                  pb: 1,
                  '&:after': {
                    content: '""',
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    width: '40%',
                    height: '3px',
                    background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                    borderRadius: '3px'
                  }
                }}
              >
                Related Articles
              </Typography>
              
              {relatedBlogs.length > 0 ? (
                <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                  {relatedBlogs.map((relatedBlog, index) => (
                    <motion.div
                      key={relatedBlog.id}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: 0.3 + index * 0.1 }}
                    >
                      <Card 
                        sx={{ 
                          display: 'flex',
                          flexDirection: 'column',
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          backdropFilter: 'blur(10px)',
                          border: '1px solid rgba(255, 255, 255, 0.1)',
                          boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
                          transition: 'all 0.3s ease',
                          '&:hover': {
                            transform: 'translateY(-5px)',
                            boxShadow: '0 12px 20px rgba(0,0,0,0.1)',
                          }
                        }}
                      >
                        <CardActionArea onClick={() => {
                          navigate(`/blog/${relatedBlog.id}`);
                          window.scrollTo(0, 0);
                        }}>
                          <CardMedia
                            component="img"
                            height="140"
                            image={relatedBlog.image}
                            alt={relatedBlog.title}
                          />
                          <CardContent>
                            <Typography 
                              variant="subtitle1" 
                              component="h3" 
                              gutterBottom
                              sx={{
                                fontWeight: 600,
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                              }}
                            >
                              {relatedBlog.title}
                            </Typography>
                            <Typography 
                              variant="caption" 
                              color="text.secondary"
                              sx={{ display: 'block', mb: 1 }}
                            >
                              {relatedBlog.date}
                            </Typography>
                            <Typography
                              variant="body2"
                              color="text.secondary"
                              sx={{
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                                display: '-webkit-box',
                                WebkitLineClamp: 2,
                                WebkitBoxOrient: 'vertical',
                              }}
                            >
                              {relatedBlog.excerpt}
                            </Typography>
                          </CardContent>
                        </CardActionArea>
                      </Card>
                    </motion.div>
                  ))}
                </Box>
              ) : (
                <Typography variant="body2" color="text.secondary">
                  No related articles found.
                </Typography>
              )}
              
              <Box 
                sx={{ 
                  mt: 4,
                  p: 3,
                  borderRadius: 2,
                  background: `linear-gradient(135deg, ${theme.palette.primary.dark}20, ${theme.palette.secondary.dark}20)`,
                  backdropFilter: 'blur(10px)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                }}
              >
                <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                  Need Professional Help?
                </Typography>
                <Typography variant="body2" sx={{ mb: 2 }}>
                  Dr. Harpuneet offers expert psychiatric services tailored to your needs.
                </Typography>
                <Button
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => navigate('/contact')}
                  sx={{
                    borderRadius: 2,
                    py: 1,
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
                  Book a Consultation
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default BlogPost; 