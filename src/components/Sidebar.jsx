// import React from 'react';
// import { 
//   Drawer, 
//   List, 
//   ListItem, 
//   ListItemButton, 
//   ListItemIcon, 
//   ListItemText, 
//   Divider,
//   Avatar,
//   Typography,
//   useMediaQuery,
//   useTheme
// } from '@mui/material';
import {
  Dashboard as DashboardIcon,
  Description,
  Summarize,
  Schedule,
  Settings,
  ChevronLeft
} from '@mui/icons-material';
// import { useNavigate } from 'react-router-dom';

// const Sidebar = ({ mobileOpen, handleDrawerToggle }) => {
//   const theme = useTheme();
//   const isMobile = useMediaQuery(theme.breakpoints.down('lg'));
//   const navigate = useNavigate();

//   const menuItems = [
//     { text: 'Dashboard', icon: <DashboardIcon />, path: '/dashboard' },
//     { text: 'Documents', icon: <Description />, path: '/documents' },
//     { text: 'Summaries', icon: <Summarize />, path: '/summaries' },
//     { text: 'History', icon: <Schedule />, path: '/history' },
//     { text: 'Settings', icon: <Settings />, path: '/settings' },
//   ];

//   const drawerContent = (
//     <>
//       <div className="p-4 border-b">
//         <Typography variant="h6" className="font-semibold">
//           DocuMind AI
//         </Typography>
//       </div>
      
//       <List className="px-2">
//         {menuItems.map((item) => (
//           <ListItem key={item.text} disablePadding>
//             <ListItemButton
//               onClick={() => navigate(item.path)}
//               sx={{
//                 borderRadius: '8px',
//                 '&.Mui-selected': {
//                   backgroundColor: theme.palette.primary.light,
//                   color: theme.palette.primary.main,
//                 },
//               }}
//             >
//               <ListItemIcon sx={{ minWidth: '40px' }}>
//                 {item.icon}
//               </ListItemIcon>
//               <ListItemText primary={item.text} />
//             </ListItemButton>
//           </ListItem>
//         ))}
//       </List>

//       <Divider />

//       <div className="p-4 flex items-center gap-3">
//         <Avatar src="https://avatar.iran.liara.run/public" />
//         <div>
//           <Typography variant="body1" className="font-medium">John Doe</Typography>
//           <Typography variant="body2" color="textSecondary">john@example.com</Typography>
//         </div>
//       </div>
//     </>
//   );

//   return (
//     <nav className="hidden lg:block lg:w-64">
//       <Drawer
//         variant={isMobile ? 'temporary' : 'permanent'}
//         open={mobileOpen}
//         onClose={handleDrawerToggle}
//         ModalProps={{ keepMounted: true }}
//         sx={{
//           '& .MuiDrawer-paper': {
//             width: 256,
//             boxSizing: 'border-box',
//             borderRight: 'none',
//           },
//         }}
//       >
//         {drawerContent}
//       </Drawer>
//     </nav>
//   );
// };

// export default Sidebar;

// components/Sidebar.jsx
import { Link } from 'react-router-dom';

const Sidebar = ({ logout }) => {
  const navigation = [
    { name: 'Dashboard', path: '/dashboard', icon: <DashboardIcon /> },
    { name: 'Documents', path: '/documents', icon: <Description /> },
    { name: 'Summaries', path: '/summaries', icon: <Summarize/> },
    { name: 'History', path: '/history', icon: <Schedule/> },
    { name: 'Settings', path: '/settings', icon: <Settings/> },
  ];

  return (
    <nav className="hidden lg:flex flex-col w-64 bg-white border-r border-neutral-200/20">
      <div className="flex items-center justify-between px-6 h-16 border-b border-neutral-200/20">
        <span className="text-xl font-semibold">DocuMind AI</span>
      </div>

      <div className="flex-1 px-4 py-6 space-y-2">
        {navigation.map((item) => (
          <Link
            key={item.name}
            to={item.path}
            className="flex items-center px-4 py-2.5 text-sm font-medium text-gray-600 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition-all"
          >
            {item.icon}
            {item.name}
          </Link>
        ))}
      </div>

      <div className="p-4 border-t border-neutral-200/20">
        <div className="flex items-center">
          <img src="https://avatar.iran.liara.run/public" className="w-8 h-8 rounded-full" alt="Profile" />
          <div className="ml-3">
            <p className="text-sm font-medium text-gray-700">John Doe</p>
            <p className="text-xs text-gray-500">john@example.com</p>
          </div>
        </div>
        <button
          onClick={logout}
          className="w-full mt-4 px-4 py-2 text-sm text-red-600 bg-red-50 rounded-lg hover:bg-red-100"
        >
          Logout
        </button>
      </div>
    </nav>
  );
};

export default Sidebar;