import React, { useState, useEffect, useCallback } from 'react';
import { 
  Box, Container, Typography, TextField, Button, FormControl, InputLabel, Select, 
  MenuItem, Chip, OutlinedInput, useTheme, Paper, IconButton, Divider, Snackbar, Alert,
  Card, CardMedia, Tooltip, CircularProgress, Grid as MuiGrid
} from '@mui/material';
import { motion } from 'framer-motion';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import SaveIcon from '@mui/icons-material/Save';
import ImageIcon from '@mui/icons-material/Image';
import CloseIcon from '@mui/icons-material/Close';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';
import FormatListBulletedIcon from '@mui/icons-material/FormatListBulleted';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import InsertLinkIcon from '@mui/icons-material/InsertLink';
import CodeIcon from '@mui/icons-material/Code';
import { useNavigate, useParams } from 'react-router-dom';
import { getBlogById, createBlog, updateBlog } from '../services/blogService';
import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { useDropzone } from 'react-dropzone';

// Define a custom toolbar for Quill
const TOOLBAR_OPTIONS = [
  [{ header: [1, 2, 3, 4, 5, 6, false] }],
  ['bold', 'italic', 'underline', 'strike'],
  [{ list: 'ordered' }, { list: 'bullet' }],
  [{ indent: '-1' }, { indent: '+1' }],
  [{ color: [] }, { background: [] }],
  ['blockquote', 'code-block'],
  ['link', 'image'],
  ['clean']
];

// Define editor modules
const MODULES = {
  toolbar: TOOLBAR_OPTIONS
};

// Define Quill formats
const FORMATS = [
  'header',
  'bold', 'italic', 'underline', 'strike',
  'list', 'bullet', 'indent',
  'color', 'background',
  'blockquote', 'code-block',
  'link', 'image'
];

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const BlogEditor = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { id } = useParams();
  const isEditMode = !!id;
  
  const [formData, setFormData] = useState({
    title: '',
    excerpt: '',
    content: '',
    category: '',
    image: '',
    tags: []
  });
  
  const [availableTags] = useState([
    'mental health', 'anxiety', 'depression', 'wellness', 'therapy', 'mindfulness',
    'stress', 'treatment', 'psychiatry', 'disorders', 'sleep', 'self-care'
  ]);
  
  const [availableCategories] = useState([
    'Mental Health', 'Wellness', 'Therapy'
  ]);
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: '',
    severity: 'success'
  });
  
  // Image upload preview state
  const [imagePreview, setImagePreview] = useState(null);
  
  useEffect(() => {
    if (isEditMode) {
      try {
        const blogData = getBlogById(parseInt(id));
        if (blogData) {
          setFormData({
            title: blogData.title,
            excerpt: blogData.excerpt,
            content: blogData.content,
            category: blogData.category,
            image: blogData.image,
            tags: blogData.tags
          });
          setImagePreview(blogData.image);
        } else {
          navigate('/admin');
        }
      } catch (error) {
        console.error('Error fetching blog:', error);
        setSnackbar({
          open: true,
          message: 'Failed to load blog data.',
          severity: 'error'
        });
      }
    }
  }, [id, isEditMode, navigate]);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error for the field being edited
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };
  
  const handleContentChange = (content) => {
    setFormData(prev => ({
      ...prev,
      content
    }));
    
    // Clear content error if it exists
    if (errors.content) {
      setErrors(prev => ({
        ...prev,
        content: ''
      }));
    }
  };
  
  const handleTagChange = (event) => {
    const {
      target: { value },
    } = event;
    
    setFormData(prev => ({
      ...prev,
      tags: typeof value === 'string' ? value.split(',') : value,
    }));
    
    // Clear tags error if it exists
    if (errors.tags) {
      setErrors(prev => ({
        ...prev,
        tags: ''
      }));
    }
  };
  
  // Image drop handler
  const onDrop = useCallback(acceptedFiles => {
    const file = acceptedFiles[0];
    if (file) {
      setUploading(true);
      
      // Simulate upload delay
      setTimeout(() => {
        const reader = new FileReader();
        reader.onload = () => {
          const imageUrl = reader.result;
          setImagePreview(imageUrl);
          setFormData(prev => ({
            ...prev,
            image: imageUrl
          }));
          setUploading(false);
          
          // Clear image error if it exists
          if (errors.image) {
            setErrors(prev => ({
              ...prev,
              image: ''
            }));
          }
        };
        reader.readAsDataURL(file);
      }, 1000);
    }
  }, [errors.image]);
  
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.gif']
    },
    maxFiles: 1
  });
  
  const validate = () => {
    const newErrors = {};
    
    if (!formData.title.trim()) newErrors.title = 'Title is required';
    if (!formData.excerpt.trim()) newErrors.excerpt = 'Excerpt is required';
    if (!formData.content.trim()) newErrors.content = 'Content is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (!formData.image) newErrors.image = 'Image is required';
    if (formData.tags.length === 0) newErrors.tags = 'At least one tag is required';
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validate()) return;
    
    setLoading(true);
    try {
      if (isEditMode) {
        updateBlog(id, formData);
        setSnackbar({
          open: true,
          message: 'Blog post updated successfully!',
          severity: 'success'
        });
      } else {
        createBlog(formData);
        setSnackbar({
          open: true,
          message: 'Blog post created successfully!',
          severity: 'success'
        });
      }
      
      // Navigate back after a short delay to show the success message
      setTimeout(() => {
        navigate('/admin');
      }, 1500);
    } catch (error) {
      console.error('Error saving blog:', error);
      setSnackbar({
        open: true,
        message: 'Failed to save blog post.',
        severity: 'error'
      });
    } finally {
      setLoading(false);
    }
  };
  
  const handleSnackbarClose = () => {
    setSnackbar(prev => ({
      ...prev,
      open: false
    }));
  };
  
  // Clear selected image
  const handleClearImage = () => {
    setImagePreview(null);
    setFormData(prev => ({
      ...prev,
      image: ''
    }));
  };
  
  const handleExternalImageUrl = (e) => {
    const url = e.target.value;
    setFormData(prev => ({
      ...prev,
      image: url
    }));
    setImagePreview(url);
    
    // Clear image error if it exists
    if (errors.image) {
      setErrors(prev => ({
        ...prev,
        image: ''
      }));
    }
  };
  
  return (
    <Box component="section" sx={{ py: 4, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 4 }}>
          <IconButton 
            onClick={() => navigate('/admin')}
            sx={{ mr: 2 }}
          >
            <ArrowBackIcon />
          </IconButton>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Typography 
              variant="h4" 
              component="h1" 
              sx={{ 
                fontWeight: 700,
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
              {isEditMode ? 'Edit Blog Post' : 'Create New Blog Post'}
            </Typography>
          </motion.div>
        </Box>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Paper
            elevation={0}
            component="form"
            onSubmit={handleSubmit}
            sx={{
              p: { xs: 2, sm: 4 },
              borderRadius: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.05)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
            }}
          >
            <MuiGrid container spacing={3}>
              <MuiGrid item xs={12}>
                <TextField
                  name="title"
                  label="Title"
                  value={formData.title}
                  onChange={handleChange}
                  fullWidth
                  error={!!errors.title}
                  helperText={errors.title}
                  sx={{ 
                    '.MuiOutlinedInput-root': {
                      borderRadius: 2,
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }
                    } 
                  }}
                />
              </MuiGrid>
              
              <MuiGrid item xs={12} md={6}>
                <FormControl 
                  fullWidth 
                  error={!!errors.category}
                  sx={{ 
                    '.MuiOutlinedInput-root': {
                      borderRadius: 2,
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }
                    } 
                  }}
                >
                  <InputLabel>Category</InputLabel>
                  <Select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    label="Category"
                  >
                    {availableCategories.map((category) => (
                      <MenuItem key={category} value={category}>
                        {category}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.category && (
                    <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1.5 }}>
                      {errors.category}
                    </Typography>
                  )}
                </FormControl>
              </MuiGrid>
              
              <MuiGrid item xs={12} md={6}>
                <FormControl 
                  fullWidth 
                  error={!!errors.tags}
                  sx={{ 
                    '.MuiOutlinedInput-root': {
                      borderRadius: 2,
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }
                    } 
                  }}
                >
                  <InputLabel>Tags</InputLabel>
                  <Select
                    multiple
                    value={formData.tags}
                    onChange={handleTagChange}
                    input={<OutlinedInput label="Tags" />}
                    renderValue={(selected) => (
                      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                        {selected.map((value) => (
                          <Chip 
                            key={value} 
                            label={value} 
                            size="small"
                            sx={{
                              borderRadius: 1,
                              backgroundColor: `${theme.palette.primary.main}20`,
                              color: theme.palette.primary.main
                            }}
                          />
                        ))}
                      </Box>
                    )}
                    MenuProps={MenuProps}
                  >
                    {availableTags.map((tag) => (
                      <MenuItem
                        key={tag}
                        value={tag}
                        style={{
                          fontWeight:
                            formData.tags.indexOf(tag) === -1
                              ? theme.typography.fontWeightRegular
                              : theme.typography.fontWeightMedium,
                        }}
                      >
                        {tag}
                      </MenuItem>
                    ))}
                  </Select>
                  {errors.tags && (
                    <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1.5 }}>
                      {errors.tags}
                    </Typography>
                  )}
                </FormControl>
              </MuiGrid>
              
              <MuiGrid item xs={12}>
                <TextField
                  name="excerpt"
                  label="Excerpt"
                  value={formData.excerpt}
                  onChange={handleChange}
                  fullWidth
                  multiline
                  rows={2}
                  error={!!errors.excerpt}
                  helperText={errors.excerpt}
                  sx={{ 
                    '.MuiOutlinedInput-root': {
                      borderRadius: 2,
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      '&:hover': {
                        backgroundColor: 'rgba(255, 255, 255, 0.1)'
                      }
                    } 
                  }}
                />
              </MuiGrid>
              
              <MuiGrid item xs={12}>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 500 }}>
                  Featured Image
                </Typography>
                
                <MuiGrid container spacing={2}>
                  <MuiGrid item xs={12} md={6}>
                    <Box
                      {...getRootProps()}
                      sx={{
                        border: '2px dashed',
                        borderColor: isDragActive 
                          ? theme.palette.primary.main 
                          : errors.image 
                            ? theme.palette.error.main 
                            : 'rgba(255, 255, 255, 0.2)',
                        borderRadius: 2,
                        p: 3,
                        textAlign: 'center',
                        cursor: 'pointer',
                        backgroundColor: isDragActive 
                          ? `${theme.palette.primary.main}10` 
                          : 'rgba(255, 255, 255, 0.02)',
                        transition: 'all 0.3s ease',
                        minHeight: 150,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                        '&:hover': {
                          backgroundColor: 'rgba(255, 255, 255, 0.05)',
                          borderColor: theme.palette.primary.main
                        }
                      }}
                    >
                      <input {...getInputProps()} />
                      {uploading ? (
                        <Box sx={{ textAlign: 'center' }}>
                          <CircularProgress size={30} sx={{ mb: 1 }} />
                          <Typography variant="body2">Uploading image...</Typography>
                        </Box>
                      ) : (
                        <>
                          <ImageIcon 
                            sx={{ 
                              fontSize: 48, 
                              mb: 1, 
                              color: isDragActive 
                                ? theme.palette.primary.main 
                                : 'text.secondary' 
                            }} 
                          />
                          <Typography variant="body1" component="div" sx={{ mb: 1 }}>
                            {isDragActive ? (
                              <span>Drop the image here</span>
                            ) : (
                              <span>Drag & drop an image here, or click to select</span>
                            )}
                          </Typography>
                          <Typography variant="caption" color="text.secondary">
                            Supports: PNG, JPG, JPEG, GIF
                          </Typography>
                        </>
                      )}
                    </Box>
                    {errors.image && !imagePreview && (
                      <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1.5 }}>
                        {errors.image}
                      </Typography>
                    )}
                  </MuiGrid>
                  
                  <MuiGrid item xs={12} md={6}>
                    <Box>
                      <Typography variant="subtitle2" gutterBottom>
                        Or enter image URL:
                      </Typography>
                      <TextField
                        name="image"
                        placeholder="https://example.com/image.jpg"
                        value={formData.image}
                        onChange={handleExternalImageUrl}
                        fullWidth
                        size="small"
                        sx={{ 
                          mb: 2,
                          '.MuiOutlinedInput-root': {
                            borderRadius: 2,
                            backgroundColor: 'rgba(255, 255, 255, 0.05)',
                            '&:hover': {
                              backgroundColor: 'rgba(255, 255, 255, 0.1)'
                            }
                          } 
                        }}
                      />
                      
                      {imagePreview && (
                        <Card 
                          sx={{ 
                            position: 'relative',
                            borderRadius: 2,
                            overflow: 'hidden',
                            height: '100%',
                            maxHeight: 200,
                            backgroundColor: 'rgba(0, 0, 0, 0.2)',
                            mb: 1
                          }}
                        >
                          <CardMedia
                            component="img"
                            image={imagePreview}
                            alt="Preview"
                            sx={{ 
                              height: '100%',
                              objectFit: 'cover' 
                            }}
                          />
                          <IconButton
                            size="small"
                            onClick={handleClearImage}
                            sx={{
                              position: 'absolute',
                              top: 8,
                              right: 8,
                              backgroundColor: 'rgba(0, 0, 0, 0.5)',
                              color: 'white',
                              '&:hover': {
                                backgroundColor: 'rgba(0, 0, 0, 0.7)',
                              }
                            }}
                          >
                            <CloseIcon fontSize="small" />
                          </IconButton>
                        </Card>
                      )}
                    </Box>
                  </MuiGrid>
                </MuiGrid>
              </MuiGrid>
              
              <MuiGrid item xs={12}>
                <Typography variant="subtitle1" gutterBottom sx={{ fontWeight: 500, display: 'flex', alignItems: 'center' }}>
                  Content
                  <Box sx={{ ml: 2, display: 'flex', gap: 0.5 }}>
                    <Tooltip title="Bold">
                      <Chip 
                        icon={<FormatBoldIcon fontSize="small" />} 
                        label="Bold" 
                        size="small" 
                        sx={{ borderRadius: 1 }}
                      />
                    </Tooltip>
                    <Tooltip title="Italic">
                      <Chip 
                        icon={<FormatItalicIcon fontSize="small" />} 
                        label="Italic" 
                        size="small" 
                        sx={{ borderRadius: 1 }}
                      />
                    </Tooltip>
                    <Tooltip title="Links">
                      <Chip 
                        icon={<InsertLinkIcon fontSize="small" />} 
                        label="Links" 
                        size="small" 
                        sx={{ borderRadius: 1 }}
                      />
                    </Tooltip>
                    <Tooltip title="More options in the editor">
                      <Chip 
                        label="More..." 
                        size="small" 
                        sx={{ borderRadius: 1 }}
                      />
                    </Tooltip>
                  </Box>
                </Typography>
                
                <Box 
                  sx={{ 
                    '.ql-container': {
                      borderBottomLeftRadius: 8,
                      borderBottomRightRadius: 8,
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                    },
                    '.ql-toolbar': {
                      borderTopLeftRadius: 8,
                      borderTopRightRadius: 8,
                      backgroundColor: 'rgba(255, 255, 255, 0.08)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                    },
                    '.ql-editor': {
                      minHeight: 300,
                      fontSize: '1rem',
                      backgroundColor: 'rgba(255, 255, 255, 0.03)',
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      borderTop: 0,
                    }
                  }}
                >
                  <ReactQuill
                    value={formData.content}
                    onChange={handleContentChange}
                    modules={MODULES}
                    formats={FORMATS}
                    placeholder="Write your blog content here..."
                  />
                </Box>
                {errors.content && (
                  <Typography variant="caption" color="error" sx={{ mt: 0.5, ml: 1.5 }}>
                    {errors.content}
                  </Typography>
                )}
              </MuiGrid>
            </MuiGrid>
            
            <Divider sx={{ my: 4 }} />
            
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Button
                variant="outlined"
                onClick={() => navigate('/admin')}
                sx={{
                  borderRadius: 2,
                  py: 1,
                  px: 3,
                  textTransform: 'none',
                  fontWeight: 500
                }}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="contained"
                color="primary"
                disabled={loading}
                startIcon={<SaveIcon />}
                sx={{
                  borderRadius: 2,
                  py: 1,
                  px: 3,
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
                {loading ? 'Saving...' : isEditMode ? 'Update Post' : 'Publish Post'}
              </Button>
            </Box>
          </Paper>
        </motion.div>
      </Container>
      
      <Snackbar
        open={snackbar.open}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }}
      >
        <Alert 
          onClose={handleSnackbarClose} 
          severity={snackbar.severity} 
          variant="filled"
          sx={{ width: '100%' }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default BlogEditor; 