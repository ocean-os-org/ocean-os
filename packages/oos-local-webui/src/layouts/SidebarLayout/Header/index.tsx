import { useContext } from 'react';
import { Box, IconButton, useTheme, Toolbar } from '@mui/material';
import { SidebarContext } from '../../../contexts/SidebarContext';
import HeaderButtons from './Buttons';
import HeaderUserbox from './Userbox';
import OOSAppBar from '../../../components/AppBar';
import HeaderMenu from './Menu';


export function Header() {
  const { sidebarOpen, openMobileSidebar } = useContext(SidebarContext);
  const theme = useTheme();

  return (
    <OOSAppBar open={sidebarOpen}>
      <Toolbar
        sx={{ 
          ml: 0,
          height: '64px',
          paddingLeft: { xs: theme.spacing(1) },
          backgroundColor: theme.palette.primary.main
        }}
      >
        <IconButton 
            aria-label="open sidebar"
            sx={{  display: { sm: 'flex', md: 'none'}, padding: 0  }}
            onClick={openMobileSidebar}
        >
          <img width="32" src="/assets/images/logo/ocean-os.svg"></img>
        </IconButton>
        <HeaderMenu/>
        <Box sx={{ flexGrow: 1 }} />
        <HeaderButtons />
        <HeaderUserbox />
      </Toolbar>
    </OOSAppBar>
  );
}

export default Header;
