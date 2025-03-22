import React, { useState, useEffect } from 'react';
import { 
  Box, Container, Typography, Button, Table, TableBody, TableCell, TableContainer, 
  TableHead, TableRow, Paper, IconButton, Chip, useTheme, Dialog, DialogActions, 
  DialogContent, DialogContentText, DialogTitle, Tooltip
} from '@mui/material';
import { motion } from 'framer-motion';
import AddIcon from '@mui/icons-material/Add';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import VisibilityIcon from '@mui/icons-material/Visibility';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { getAllBlogs, deleteBlog } from '../services/blogService';

const AdminDashboard = () => {
  const theme = useTheme();
  const navigate = useNavigate();
  const { currentUser, logout } = useAuth();
  const [blogs, setBlogs] = useState([]);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const [blogToDelete, setBlogToDelete] = useState(null);
  
  useEffect(() => {
    const fetchBlogs = () => {
      const allBlogs = getAllBlogs();
      setBlogs(allBlogs);
    };
    
    fetchBlogs();
  }, []);
  
  const handleLogout = async () => {
    try {
      await logout();
      navigate('/login');
    } catch (error) {
      console.error('Failed to log out', error);
    }
  };
  
  const handleDeleteClick = (blog) => {
    setBlogToDelete(blog);
    setDeleteDialogOpen(true);
  };
  
  const handleDeleteConfirm = () => {
    if (blogToDelete) {
      deleteBlog(blogToDelete.id);
      setBlogs(blogs.filter(blog => blog.id !== blogToDelete.id));
      setDeleteDialogOpen(false);
      setBlogToDelete(null);
    }
  };
  
  const handleDeleteCancel = () => {
    setDeleteDialogOpen(false);
    setBlogToDelete(null);
  };
  
  return (
    <Box component="section" sx={{ py: 4, minHeight: '100vh' }}>
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
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
                  width: '60%',
                  height: '3px',
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  borderRadius: '3px'
                }
              }}
            >
              Admin Dashboard
            </Typography>
          </motion.div>
          
          <Box sx={{ display: 'flex', gap: 2 }}>
            <Button
              variant="contained"
              color="primary"
              startIcon={<AddIcon />}
              onClick={() => navigate('/admin/blog/new')}
              sx={{
                borderRadius: 2,
                py: 1,
                px: 2,
                textTransform: 'none',
                fontWeight: 600,
                backgroundColor: theme.palette.primary.main,
                '&:hover': {
                  backgroundColor: theme.palette.primary.dark,
                  transform: 'translateY(-2px)',
                  boxShadow: `0 4px 8px ${theme.palette.primary.main}40`
                }
              }}
            >
              New Blog Post
            </Button>
            
            <Button
              variant="outlined"
              color="primary"
              startIcon={<LogoutIcon />}
              onClick={handleLogout}
              sx={{
                borderRadius: 2,
                py: 1,
                px: 2,
                textTransform: 'none',
                fontWeight: 600,
                borderColor: theme.palette.primary.main,
                '&:hover': {
                  borderColor: theme.palette.primary.dark,
                  backgroundColor: 'rgba(0, 0, 0, 0.05)'
                }
              }}
            >
              Logout
            </Button>
          </Box>
        </Box>
        
        <Box 
          sx={{ 
            p: 2,
            mb: 4,
            borderRadius: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.05)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
          }}
        >
          <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
            Welcome back, {currentUser?.displayName || currentUser?.email || 'Admin'}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            From here you can manage all blog content. Add, edit or delete blog posts as needed.
          </Typography>
        </Box>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <Typography variant="h5" sx={{ mb: 3, fontWeight: 600 }}>
            Blog Posts
          </Typography>
          
          <TableContainer 
            component={Paper} 
            sx={{ 
              borderRadius: 2,
              backgroundColor: 'rgba(255, 255, 255, 0.03)',
              backdropFilter: 'blur(10px)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.07)',
              mb: 4,
              overflow: 'hidden'
            }}
          >
            <Table sx={{ minWidth: 650 }}>
              <TableHead>
                <TableRow sx={{ 
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                  '& th': { fontWeight: 600 }
                }}>
                  <TableCell>Title</TableCell>
                  <TableCell>Category</TableCell>
                  <TableCell>Date</TableCell>
                  <TableCell align="center">Actions</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {blogs.length > 0 ? (
                  blogs.map((blog) => (
                    <TableRow
                      key={blog.id}
                      sx={{ 
                        '&:last-child td, &:last-child th': { border: 0 },
                        transition: 'all 0.2s ease',
                        '&:hover': {
                          backgroundColor: 'rgba(0, 0, 0, 0.02)'
                        }
                      }}
                    >
                      <TableCell component="th" scope="row" sx={{ maxWidth: 350, fontWeight: 500 }}>
                        <Typography 
                          variant="body2" 
                          sx={{ 
                            textOverflow: 'ellipsis',
                            overflow: 'hidden',
                            whiteSpace: 'nowrap'
                          }}
                        >
                          {blog.title}
                        </Typography>
                      </TableCell>
                      <TableCell>
                        <Chip 
                          label={blog.category}
                          size="small"
                          sx={{
                            backgroundColor: 
                              blog.category === 'Mental Health' ? `${theme.palette.primary.main}20` : 
                              blog.category === 'Wellness' ? `${theme.palette.secondary.main}20` : 
                              `${theme.palette.info.main}20`,
                            color: 
                              blog.category === 'Mental Health' ? theme.palette.primary.main : 
                              blog.category === 'Wellness' ? theme.palette.secondary.main : 
                              theme.palette.info.main,
                            fontWeight: 500,
                            borderRadius: 1
                          }}
                        />
                      </TableCell>
                      <TableCell>{blog.date}</TableCell>
                      <TableCell align="center">
                        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                          <Tooltip title="View">
                            <IconButton 
                              onClick={() => navigate(`/blog/${blog.id}`)}
                              size="small"
                              sx={{ 
                                color: theme.palette.info.main,
                                '&:hover': {
                                  backgroundColor: `${theme.palette.info.main}20`
                                }
                              }}
                            >
                              <VisibilityIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Edit">
                            <IconButton 
                              onClick={() => navigate(`/admin/blog/edit/${blog.id}`)}
                              size="small"
                              sx={{ 
                                color: theme.palette.primary.main,
                                '&:hover': {
                                  backgroundColor: `${theme.palette.primary.main}20`
                                }
                              }}
                            >
                              <EditIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                          <Tooltip title="Delete">
                            <IconButton 
                              onClick={() => handleDeleteClick(blog)}
                              size="small"
                              sx={{ 
                                color: theme.palette.error.main,
                                '&:hover': {
                                  backgroundColor: `${theme.palette.error.main}20`
                                }
                              }}
                            >
                              <DeleteIcon fontSize="small" />
                            </IconButton>
                          </Tooltip>
                        </Box>
                      </TableCell>
                    </TableRow>
                  ))
                ) : (
                  <TableRow>
                    <TableCell colSpan={4} align="center" sx={{ py: 4 }}>
                      <Typography variant="body1">No blog posts yet</Typography>
                      <Button
                        variant="text"
                        color="primary"
                        startIcon={<AddIcon />}
                        onClick={() => navigate('/admin/blog/new')}
                        sx={{ mt: 2, textTransform: 'none' }}
                      >
                        Create your first blog post
                      </Button>
                    </TableCell>
                  </TableRow>
                )}
              </TableBody>
            </Table>
          </TableContainer>
        </motion.div>
      </Container>
      
      {/* Delete Confirmation Dialog */}
      <Dialog
        open={deleteDialogOpen}
        onClose={handleDeleteCancel}
        PaperProps={{
          sx: {
            borderRadius: 2,
            backgroundColor: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(10px)',
          }
        }}
      >
        <DialogTitle>Confirm Deletion</DialogTitle>
        <DialogContent>
          <DialogContentText>
            Are you sure you want to delete "{blogToDelete?.title}"? This action cannot be undone.
          </DialogContentText>
        </DialogContent>
        <DialogActions sx={{ p: 2, pt: 0 }}>
          <Button 
            onClick={handleDeleteCancel} 
            sx={{ 
              textTransform: 'none',
              fontWeight: 500
            }}
          >
            Cancel
          </Button>
          <Button 
            onClick={handleDeleteConfirm} 
            variant="contained"
            color="error"
            sx={{ 
              textTransform: 'none',
              fontWeight: 500,
              px: 2
            }}
          >
            Delete
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default AdminDashboard; 