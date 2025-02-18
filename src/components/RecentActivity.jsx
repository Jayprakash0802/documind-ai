// components/RecentActivity.jsx
import React from 'react';
import { Paper, Typography, Box } from '@mui/material';

const RecentActivity = () => {
  const activities = [
    { id: 1, description: 'Uploaded Project_Proposal.pdf', date: '2024-03-16' },
    { id: 2, description: 'Processed Meeting_Notes.jpg', date: '2024-03-14' },
  ];

  return (
    <Paper sx={{ p: 3 }}>
      <Typography variant="h6" gutterBottom>
        Recent Activity
      </Typography>
      {activities.map((activity) => (
        <Box key={activity.id} sx={{ mb: 1 }}>
          <Typography variant="body2">
            {activity.description}
          </Typography>
          <Typography variant="caption" color="text.secondary">
            {activity.date}
          </Typography>
        </Box>
      ))}
    </Paper>
  );
};

export default RecentActivity;
