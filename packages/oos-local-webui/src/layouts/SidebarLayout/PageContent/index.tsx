import { useContext } from 'react';
import { Box, useTheme } from '@mui/material';
import { Outlet } from 'react-router';
import { SidebarContext } from '../../../services/SidebarContext';

function PageContent() {
  const { sidebarOpen } = useContext(SidebarContext);
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        ...( sidebarOpen && {ml: { md: theme.sidebar.opened }}),
        ...( !sidebarOpen && {ml: { md: theme.sidebar.closed }}),
      }}
    >
    <Outlet />
  </Box>
);
}

export default PageContent;