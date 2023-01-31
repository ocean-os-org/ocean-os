import { useContext, useState } from 'react';

import {
  Box,
  alpha,
  Stack,
  lighten,
  Divider,
  IconButton,
  Tooltip,
  styled,
  useTheme,
  MenuItem,
  Menu,
  Badge,
  Toolbar,
  Typography,
  Button
} from '@mui/material';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import MenuTwoToneIcon from '@mui/icons-material/MenuTwoTone';
import { SidebarContext } from '../../../contexts/SidebarContext';
import CloseTwoToneIcon from '@mui/icons-material/CloseTwoTone';
import MenuIcon from '@mui/icons-material/Menu';

import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import HeaderButtons from './Buttons';
import HeaderUserbox from './Userbox';
import HeaderMenu from './Menu';
import InputBase from '@mui/material/InputBase';
import { Add } from '@mui/icons-material';
import NewDrop from './NewDrop';



interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, { shouldForwardProp: (prop) => prop !== 'open', })<AppBarProps>(({ theme, open }) => ({
  position: 'fixed',
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: theme.sidebar.width,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${theme.sidebar.width})` ,
    },
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
  ...(!open && {
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${theme.spacing(7)} - 1px)` ,
    },
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));


export function Header() {
  const { sidebarOpen, toggleSidebar, openMobileSidebar } = useContext(SidebarContext);
  const theme = useTheme();

  return (
    <AppBar open={sidebarOpen}>
      <Toolbar
        sx={{ 
          ml: 0,
          paddingLeft: { xs: theme.spacing(1) },
          backgroundColor: theme.palette.primary.main
        }}
      >
        <IconButton 
            aria-label="open sidebar"
            sx={{  display: { sm: 'flex', md: 'none'}, padding: 0  }}
            onClick={openMobileSidebar}
          >
            <img width="40" src="/assets/images/logo/ocean-os.svg"></img>
        </IconButton>
        <NewDrop/>
        <Box sx={{ flexGrow: 1 }} />
        <HeaderButtons />
        <HeaderUserbox />
      </Toolbar>
    </AppBar>
  );
}

export default Header;
