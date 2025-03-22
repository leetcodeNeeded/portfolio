import React, { useState, useEffect } from 'react';
import { Box, Container, Typography, Grid, Card, CardContent, CardMedia, CardActionArea, 
  InputAdornment, TextField, Chip, Stack, Divider, useTheme, Button } from '@mui/material';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import SearchIcon from '@mui/icons-material/Search';
import CategoryIcon from '@mui/icons-material/Category';
import { getAllBlogs, getBlogsByCategory, searchBlogs } from '../services/blogService';

const Blog = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const [blogs, setBlogs] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  
  const categories = ['Mental Health', 'Wellness', 'Therapy', 'All'];
  
  useEffect(() => {
    const allBlogs = getAllBlogs();
    setBlogs(allBlogs);
    setFilteredBlogs(allBlogs);
  }, []);
  
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    
    if (query.trim() === '') {
      if (activeCategory && activeCategory !== 'All') {
        setFilteredBlogs(getBlogsByCategory(activeCategory));
      } else {
        setFilteredBlogs(blogs);
      }
    } else {
      setFilteredBlogs(searchBlogs(query));
    }
  };
  
  const handleCategoryFilter = (category) => {
    setActiveCategory(category);
    setSearchQuery('');
    
    if (category === 'All') {
      setFilteredBlogs(blogs);
    } else {
      setFilteredBlogs(getBlogsByCategory(category));
    }
  };
  
  return (
    <Box component="section" sx={{ py: 8, minHeight: '100vh' }}>
      {/* Hero Section */}
      <Box
        sx={{
          position: 'relative',
          height: '40vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          mb: 6,
          overflow: 'hidden',
          background: `linear-gradient(135deg, ${theme.palette.primary.dark}80, ${theme.palette.secondary.dark}80)`,
          '&::before': {
            content: '""',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'url(https://images.unsplash.com/photo-1513128034602-7814ccaddd4e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            zIndex: -1,
            opacity: 0.3,
          }
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography 
            variant="h2" 
            component="h1" 
            align="center"
            sx={{
              fontWeight: 700,
              color: 'white',
              textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
              position: 'relative',
              '&::after': {
                content: '""',
                display: 'block',
                width: '100px',
                height: '4px',
                background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                margin: '16px auto',
                borderRadius: '2px'
              }
            }}
          >
            Blog & Articles
          </Typography>
          <Typography 
            variant="h6" 
            align="center" 
            sx={{ 
              maxWidth: '800px', 
              mx: 'auto', 
              color: 'white',
              px: 2
            }}
          >
            Insights on mental health, wellness, and psychiatric care
          </Typography>
        </motion.div>
      </Box>
      
      <Container maxWidth="lg">
        {/* Search and Filter */}
        <Box 
          sx={{ 
            mb: 5,
            p: 3,
            borderRadius: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
          }}
        >
          <Grid container spacing={3} alignItems="center">
            <Grid item xs={12} md={6}>
              <TextField
                fullWidth
                placeholder="Search articles..."
                value={searchQuery}
                onChange={handleSearch}
                variant="outlined"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <SearchIcon />
                    </InputAdornment>
                  ),
                  sx: {
                    borderRadius: 2,
                    backgroundColor: 'rgba(255, 255, 255, 0.05)',
                    backdropFilter: 'blur(5px)',
                    '&:hover': {
                      backgroundColor: 'rgba(255, 255, 255, 0.1)'
                    }
                  }
                }}
              />
            </Grid>
            <Grid item xs={12} md={6}>
              <Stack 
                direction="row" 
                spacing={1}
                alignItems="center"
                flexWrap="wrap"
                gap={1}
              >
                <CategoryIcon sx={{ color: theme.palette.primary.main }} />
                <Typography variant="body2" sx={{ mr: 1 }}>Filter by:</Typography>
                {categories.map((category) => (
                  <Chip
                    key={category}
                    label={category}
                    onClick={() => handleCategoryFilter(category)}
                    color={activeCategory === category ? 'primary' : 'default'}
                    variant={activeCategory === category ? 'filled' : 'outlined'}
                    sx={{
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        transform: 'translateY(-2px)',
                        boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
                      }
                    }}
                  />
                ))}
              </Stack>
            </Grid>
          </Grid>
        </Box>
        
        {/* Blog Posts */}
        {filteredBlogs.length === 0 ? (
          <Box sx={{ textAlign: 'center', py: 8 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>No articles found</Typography>
            <Typography variant="body1">
              Try adjusting your search or filter to find what you're looking for.
            </Typography>
            <Button 
              variant="outlined" 
              color="primary" 
              onClick={() => {
                setSearchQuery('');
                setActiveCategory('All');
                setFilteredBlogs(blogs);
              }}
              sx={{ mt: 2 }}
            >
              Clear Filters
            </Button>
          </Box>
        ) : (
          <Grid container spacing={3}>
            {filteredBlogs.map((blog, index) => (
              <Grid item xs={12} md={6} lg={4} key={blog.id}>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                >
                  <Card 
                    sx={{ 
                      height: '100%',
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
                        '& .MuiCardMedia-root': {
                          transform: 'scale(1.05)'
                        }
                      }
                    }}
                  >
                    <CardActionArea onClick={() => navigate(`/blog/${blog.id}`)}>
                      <Box sx={{ overflow: 'hidden', height: 200 }}>
                        <CardMedia
                          component="img"
                          height="200"
                          image={blog.image}
                          alt={blog.title}
                          sx={{
                            transition: 'transform 0.5s ease',
                          }}
                        />
                      </Box>
                      <CardContent sx={{ flexGrow: 1 }}>
                        <Box sx={{ mb: 1 }}>
                          <Chip 
                            size="small" 
                            label={blog.category}
                            sx={{
                              backgroundColor: 
                                blog.category === 'Mental Health' ? `${theme.palette.primary.main}40` : 
                                blog.category === 'Wellness' ? `${theme.palette.secondary.main}40` : 
                                `${theme.palette.info.main}40`,
                              color: 
                                blog.category === 'Mental Health' ? theme.palette.primary.main : 
                                blog.category === 'Wellness' ? theme.palette.secondary.main : 
                                theme.palette.info.main,
                              fontWeight: 500
                            }}
                          />
                          <Typography variant="caption" sx={{ ml: 1, color: 'text.secondary' }}>
                            {blog.date}
                          </Typography>
                        </Box>
                        <Typography 
                          variant="h6" 
                          component="h2" 
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
                          {blog.title}
                        </Typography>
                        <Typography
                          variant="body2"
                          color="text.secondary"
                          sx={{
                            mb: 2,
                            overflow: 'hidden',
                            textOverflow: 'ellipsis',
                            display: '-webkit-box',
                            WebkitLineClamp: 3,
                            WebkitBoxOrient: 'vertical',
                          }}
                        >
                          {blog.excerpt}
                        </Typography>
                        <Divider sx={{ mb: 2 }} />
                        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                          <Typography variant="body2" sx={{ fontWeight: 500 }}>
                            {blog.author}
                          </Typography>
                          <Typography 
                            variant="body2" 
                            color="primary"
                            sx={{ 
                              fontWeight: 500,
                              display: 'flex',
                              alignItems: 'center',
                              '&:after': {
                                content: '"→"',
                                ml: 0.5,
                                transition: 'transform 0.2s ease',
                              },
                              '&:hover:after': {
                                transform: 'translateX(3px)'
                              }
                            }}
                          >
                            Read More
                          </Typography>
                        </Box>
                      </CardContent>
                    </CardActionArea>
                  </Card>
                </motion.div>
              </Grid>
            ))}
          </Grid>
        )}
      </Container>
    </Box>
  );
};

export default Blog; 