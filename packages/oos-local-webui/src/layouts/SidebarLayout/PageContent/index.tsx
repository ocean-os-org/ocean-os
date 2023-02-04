import { useContext } from 'react';
import { Box, useTheme } from '@mui/material';
import { Outlet } from 'react-router';
import { SidebarContext } from '../../../contexts/SidebarContext';

function PageContent() {
  const { sidebarOpen } = useContext(SidebarContext);
  const theme = useTheme();

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        ...( sidebarOpen && {ml: { md: theme.sidebar.width }}),
        ...( !sidebarOpen && {ml: { md: theme.spacing(7) }}),
      }}
    >
    <Outlet />
  </Box>
);
}

export default PageContent;

/*

*/