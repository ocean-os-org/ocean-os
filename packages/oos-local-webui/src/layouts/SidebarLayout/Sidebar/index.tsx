import { useContext } from 'react';
import {
  Box,
  Drawer,
  styled,
  useTheme,
  Theme,
  CSSObject,
  IconButton,
  Typography,
  useMediaQuery,
  ListItemButton,
  ListItemIcon,
  ListItemText
} from '@mui/material';
import {  Link } from 'react-router-dom';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';

import Scrollbar from '../../../components/Scrollbar';

import { SidebarContext } from '../../../services/SidebarContext';
import SidebarMenu from './SidebarMenu';
import { Add } from '@mui/icons-material';

const openedMixin = (theme: Theme): CSSObject => ({
  width: theme.sidebar.opened,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  border: 'none',
  boxShadow: 'inset -2px 0px 4px 0px rgb(0,0,0,0.4)',
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  border: 'none',
  boxShadow: 'inset -2px 0px 4px 0px rgb(0,0,0,0.4)',
  width: `calc(${theme.sidebar.closed} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.sidebar.closed} + 1px)`,
  },
});

const MiniDrawer = styled(Drawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: theme.sidebar.opened,
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
        width: ${theme.sidebar.opened};
        min-width: ${theme.sidebar.opened};
        color: ${theme.colors.alpha.trueWhite[70]};
        position: relative;
        height: 100%;
`
);

function Sidebar() {
  const { sidebarOpen, sidebarMobileOpen, closeMobileSidebar, toggleSidebar } = useContext(SidebarContext);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const open = sidebarOpen || sidebarMobileOpen;
  const sideMenu = (
    <SidebarStyled>
      <Box
        sx={{
          display: 'flex',
          height: '64px',
          padding: theme.spacing(1,1,1,1)
        }}
      >
        <IconButton 
          aria-label="open sidebar"
          sx={{ display: { xs: 'none ', md: 'flex', padding:3,width: '40px', height: '40px'}}}
          onClick={toggleSidebar}
        >
          <img width="40" src="/assets/images/logo/ocean-os.svg"></img>
        </IconButton>
        <Box sx={{ display: { xs: 'flex', md: 'none'} }} >
          <img width="40"  src="/assets/images/logo/ocean-os.svg"></img>
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
          width: (sidebarOpen || sidebarMobileOpen) ? theme.sidebar.opened : `calc(${theme.sidebar.closed} + 1px)`,
          height: `calc(100% - 64px)`,
          overflow: 'hidden',
        }}
      >
        <ListItemButton
          key={'newdrop'}
          component={Link}
          to={'/home/newdrop'}
          sx={{ m: theme.spacing(0,1,0,1), backgroundColor: theme.palette.secondary.main, paddingLeft: theme.spacing(1), borderRadius: 1}}
        >
          <ListItemIcon>
            <Add/>
          </ListItemIcon>
          { open && <ListItemText primary={'New Drop'}  /> }
        </ListItemButton>

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
        sx={{ backdropFilter: 'blur(3px)'}}
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
