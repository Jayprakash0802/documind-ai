import React from 'react';
import { useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { Box, Typography, Button } from '@mui/material';
import Navbar from '../components/Navbar';
import { Link } from 'react-router-dom';

const NotFound = () => {
  const theme = useTheme();

  return (
    <Box sx={{ 
      minHeight: '100vh', 
      bgcolor: 'background.default',
      display: 'flex',
      flexDirection: 'column'
    }}>
      <Navbar />
      
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          p: 3
        }}
      >
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Typography variant="h1" sx={{ 
            fontWeight: 700,
            color: 'primary.main',
            fontSize: { xs: '4rem', sm: '6rem', md: '8rem' }
          }}>
            404
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <Typography variant="h5" sx={{ 
            mt: 2,
            color: 'text.secondary',
            textAlign: 'center'
          }}>
            Oops! The page you're looking for doesn't exist.
          </Typography>
        </motion.div>

        <Button
          component={Link}
          to="/dashboard"
          variant="contained"
          sx={{ 
            mt: 4,
            px: 4,
            py: 1.5,
            borderRadius: 2,
            textTransform: 'none'
          }}
        >
          Go Back Home
        </Button>
      </Box>
    </Box>
  );
};

export default NotFound;