import { useContext } from 'react';

import {
  Box,
  Drawer,
  styled,
  Divider,
  useTheme,
  Theme,
  CSSObject,
  IconButton,
  Typography,
  useMediaQuery
} from '@mui/material';

import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import Scrollbar from '../../../components/Scrollbar';

import { SidebarContext } from '../../../contexts/SidebarContext';
import SidebarMenu from './SidebarMenu';

const openedMixin = (theme: Theme): CSSObject => ({
  width: theme.sidebar.width,
  border: 'none',
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
  border: 'none',
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)}) + 1px`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
});

const MiniDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: theme.sidebar.width,
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


const SidebarStyled = styled(Box)(
  ({ theme }) => `
        width: ${theme.sidebar.width};
        min-width: ${theme.sidebar.width};
        color: ${theme.colors.alpha.trueWhite[70]};
        position: relative;
        height: 100%;
        box-shadow: '5px 0px 5px 0px rgb(0,0,0,0.2)';
        padding-bottom: 5px;


`
);

function Sidebar() {
  const { sidebarOpen, sidebarMobileOpen, closeMobileSidebar, toggleSidebar } = useContext(SidebarContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const sideMenu = (
    <SidebarStyled>
      <Box
        sx={{
          p: theme.spacing(1),
          display: 'flex',
        }}
      >
        <IconButton 
          aria-label="open sidebar"
          sx={{ display: { xs: 'none ', md: 'flex', padding: 3}}}
          onClick={toggleSidebar}
        >
          <img width="40" src="/assets/images/logo/ocean-os.svg"></img>
        </IconButton>
        <Box 
          sx={{ display: { xs: 'flex', md: 'none'} }}
        >
          <img width="40" src="/assets/images/logo/ocean-os.svg"></img>
        </Box>
        <Typography
              variant="h4"
              component="div"
              sx={{ ...((sidebarOpen || sidebarMobileOpen) ? {display: 'flex'} : {display: 'none'}), pl:1, flexGrow: 1, justifyContent: 'start', alignItems: 'center' }}
            >
              OceanOS
        </Typography>
        <IconButton onClick={toggleSidebar} aria-label="close sidebar" sx={{ width:'46px',...(!sidebarOpen ? {display: 'none'} : {display: { xs: 'none', md: 'flex'}} )}}>
          {theme.direction === 'ltr' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
        </IconButton>
      </Box>
      <Box
        sx={{
          width: (sidebarOpen || sidebarMobileOpen) ? theme.sidebar.width: `calc(${theme.spacing(7)} + 1px)`,
          height: `calc(100% - ${theme.header.height})`,
          overflow: 'hidden',
          boxShadow: 'inset -2px 4px 4px rgba(0, 0, 0, 0.4)',
        }}
      >
        <Scrollbar>
          <SidebarMenu/>
        </Scrollbar>
      </Box>
    </SidebarStyled>
  ); 

  return (
    <>
    {isMobile ?
      <Drawer
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        variant="temporary"
        onClose={closeMobileSidebar}
        open={sidebarMobileOpen}
        ModalProps={{
          keepMounted: true, // Better open performance on mobile.
        }}
      >
        {sideMenu}
      </Drawer>
      :
      <MiniDrawer 
        anchor={theme.direction === 'rtl' ? 'right' : 'left'}
        variant="permanent"
        open={sidebarOpen}
      >
        {sideMenu}
      </MiniDrawer>
    }
    </>
  );
}

export default Sidebar;
