import React from 'react';
import { 
  Box, 
  Grid, 
  Typography, 
  Paper,
  useTheme 
} from '@mui/material';
import {
  Description,
  Summarize,
  Schedule,
  Cloud
} from '@mui/icons-material';

const QuickStats = () => {
  const theme = useTheme();

  const stats = [
    { icon: <Description />, title: 'Documents Processed', value: '24', color: theme.palette.primary.main },
    { icon: <Summarize />, title: 'Summaries Created', value: '18', color: theme.palette.secondary.main },
    { icon: <Schedule />, title: 'Avg. Process Time', value: '2.5min', color: theme.palette.warning.main },
    { icon: <Cloud />, title: 'Storage Used', value: '7.5/10GB', color: theme.palette.info.main },
  ];

  return (
    <Grid container spacing={3}>
      {stats.map((stat, index) => (
        <Grid item xs={12} sm={6} lg={3} key={index}>
          <Paper sx={{ 
            p: 3,
            borderRadius: 4,
            display: 'flex',
            alignItems: 'center',
            gap: 2
          }}>
            <Box sx={{
              p: 2,
              borderRadius: 3,
              bgcolor: `${stat.color}10`,
              color: stat.color
            }}>
              {stat.icon}
            </Box>
            <div>
              <Typography variant="h6" sx={{ fontWeight: 700 }}>
                {stat.value}
              </Typography>
              <Typography variant="body2" color="textSecondary">
                {stat.title}
              </Typography>
            </div>
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default QuickStats;