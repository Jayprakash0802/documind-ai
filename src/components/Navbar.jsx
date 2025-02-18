// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { 
//   AppBar, 
//   Toolbar, 
//   Typography, 
//   IconButton, 
//   Menu, 
//   MenuItem, 
//   Avatar,
//   Box,
//   useTheme
// } from '@mui/material';
// import { Brightness4, Brightness7, Notifications } from '@mui/icons-material';
// import { useThemeContext } from '../context/ThemeContext';
// import { useAuth } from '../context/AuthContext';

// const Navbar = () => {
//   const { darkMode, toggleTheme } = useThemeContext();
//   const { user, logout } = useAuth();
//   const [anchorEl, setAnchorEl] = useState(null);
//   const theme = useTheme();

//   const handleMenuOpen = (event) => {
//     setAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setAnchorEl(null);
//   };

//   return (
//     <AppBar 
//       position="static" 
//       elevation={0}
//       sx={{ 
//         bgcolor: 'background.paper',
//         color: 'text.primary',
//         borderBottom: `1px solid ${theme.palette.divider}`
//       }}
//     >
//       <Toolbar sx={{ justifyContent: 'space-between' }}>
//         <Typography 
//           variant="h6" 
//           component={Link} 
//           to="/dashboard"
//           sx={{ 
//             textDecoration: 'none', 
//             color: 'inherit',
//             fontWeight: 700
//           }}
//         >
//           DocuMind AI
//         </Typography>

//         <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
//           <IconButton onClick={toggleTheme} color="inherit">
//             {darkMode ? <Brightness7 /> : <Brightness4 />}
//           </IconButton>
          
//           <IconButton color="inherit">
//             <Notifications />
//           </IconButton>

//           <IconButton onClick={handleMenuOpen}>
//             <Avatar 
//               src={user?.photoURL} 
//               sx={{ width: 36, height: 36 }}
//             >
//               {user?.displayName?.[0]}
//             </Avatar>
//           </IconButton>

//           <Menu
//             anchorEl={anchorEl}
//             open={Boolean(anchorEl)}
//             onClose={handleMenuClose}
//             PaperProps={{
//               sx: {
//                 mt: 1.5,
//                 minWidth: 200,
//                 boxShadow: theme.shadows[3],
//               }
//             }}
//           >
//             <MenuItem component={Link} to="/settings">Settings</MenuItem>
//             <MenuItem component={Link} to="/pricing">Pricing</MenuItem>
//             <Divider />
//             <MenuItem onClick={logout}>Logout</MenuItem>
//           </Menu>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Navbar;

// components/Navbar.jsx
const Navbar = () => {
  return (
    <header className="sticky top-0 z-10 bg-white border-b border-neutral-200/20">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-64 px-4 py-2 text-sm border border-neutral-200/20 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>
            <button className="p-2 text-gray-600 hover:text-gray-900">
              {/* Notification icon */}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;