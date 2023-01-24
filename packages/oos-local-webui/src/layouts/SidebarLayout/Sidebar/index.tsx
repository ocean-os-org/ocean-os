import { useContext } from 'react';
import Scrollbar from '../../../components/Scrollbar';
import { SidebarContext } from '../../../contexts/SidebarContext';

import {
  Box,
  Drawer,
  alpha,
  styled,
  Divider,
  useTheme,
  Button,
  lighten,
  darken,
  Tooltip,
  Theme,
  CSSObject,
  IconButton,
  Typography
} from '@mui/material';

import SidebarMenu from './SidebarMenu';
import Logo from '../../../components/Logo';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

const openedMixin = (theme: Theme): CSSObject => ({
  width: theme.sidebar.width,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const MiniDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: theme.sidebar.width,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


const SidebarWrapper = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.colors.alpha.trueWhite[70]};
        position: relative;
        height: 100%;
        padding-bottom: 5px;
`
);

/**
 * 
 
      sx={{
        background:
          theme.palette.mode === 'dark'
            ? alpha(lighten(theme.header.background?.toString() || '', 0.1), 0.5)
            : darken(theme.colors.alpha.black[100], 0.5),
      }}

 */

function Sidebar() {
  const { sidebarOpen, sidebarMobileOpen, closeMobileSidebar, toggleSidebar } = useContext(SidebarContext);
  const theme = useTheme();


  const side = (
    <SidebarWrapper>
      <Box
        sx={{
          p: theme.spacing(1),
          display: 'flex',
          flexDirection: 'row'
        }}
      >
      <IconButton 
        aria-label="open sidebar"
        sx={{ display: { xs: 'none ', sm: 'flex'}}}
        onClick={toggleSidebar}
      >
        <img width="32" src="/assets/images/logo/ocean-os.svg"></img>
      </IconButton>
      <IconButton 
        aria-label="open sidebar"
        sx={{ display: { xs: 'flex', sm: 'none'}}}
      >
        <img width="32" src="/assets/images/logo/ocean-os.svg"></img>
      </IconButton>
      <Typography
            variant="h4"
            component="div"
            sx={{ ...((sidebarOpen || sidebarMobileOpen) ? {display: 'flex'} : {display: 'none'}), flexGrow: 1, justifyContent: 'start', alignItems: 'center' }}
          >
            OceanOS
      </Typography>
      <IconButton onClick={toggleSidebar} aria-label="close sidebar" sx={{ ...(!sidebarOpen ? {display: 'none'} : {display: { xs: 'none', md: 'flex'}} )}}>
        <ChevronLeftIcon />
      </IconButton>
      
    </Box>
    <Divider />
    <Box
      sx={{
        height: `calc(100% - ${theme.header.height})`,
        overflow: 'hidden'
      }}
    >
      <Scrollbar>
        <SidebarMenu />
      </Scrollbar>
    </Box>
  </SidebarWrapper>
); 

  return (
    <>
      <Drawer
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        variant="temporary"
        onClose={closeMobileSidebar}
        open={sidebarMobileOpen}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
        sx={{
          boxShadow: `${theme.sidebar.boxShadow}`,
          overflow: 'hidden',
          display: { xs: 'block', md: 'none' },
        }}
      >
        {side}
      </Drawer>
      <MiniDrawer 
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        variant="permanent"
        open={sidebarOpen}
        sx={{
          overflow: 'hidden',
          display: { xs: 'none', md: 'block' },
        }}
      >
        {side}
      </MiniDrawer>
    </>
  );
}

export default Sidebar;

/*

*/