// pages/QuickStatsPage.jsx
import React from 'react';
import { Box, Paper, Typography, Button } from '@mui/material';
import QuickStats from '../components/Stats';

const QuickStatsPage = () => {
  const handleUpgradeStorage = () => {
    // Add your custom logic here
    alert('Upgrade storage functionality triggered!');
  };

  return (
    <Box sx={{ p: 3 }}>
      <Typography variant="h4" mb={2}>
        Detailed Statistics
      </Typography>

      {/* Reuse the QuickStats component */}
      <QuickStats />

      {/* Additional insights or charting could go here */}
      <Paper sx={{ mt: 3, p: 2 }}>
        <Typography variant="subtitle1">Additional Insights</Typography>
        <Typography variant="body2" color="text.secondary" mt={1}>
          Here you can display charts, analytics, or other info related to folder/file usage, 
          user activity, or storage consumption.
        </Typography>
        
        <Button variant="contained" sx={{ mt: 2 }} onClick={handleUpgradeStorage}>
          Upgrade Storage
        </Button>
      </Paper>
    </Box>
  );
};

export default QuickStatsPage;
