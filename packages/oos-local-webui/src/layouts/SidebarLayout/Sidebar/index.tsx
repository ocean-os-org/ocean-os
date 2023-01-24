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
  CSSObject
} from '@mui/material';

import SidebarMenu from './SidebarMenu';
import Logo from '../../../components/Logo';

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
    width: `calc(${theme.spacing(8)} + 1px)`,
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
  const { sidebarOpen, sidebarMobileOpen, closeMobileSidebar } = useContext(SidebarContext);
  const theme = useTheme();

  const side = (
    <SidebarWrapper>
      <Box
        sx={{
          mt: theme.spacing(1),
          mx: theme.spacing(2),
          display: 'flex',
          flexDirection: 'row'
        }}
      >
        <Logo />
      </Box>
      <Divider
        sx={{
          mt: theme.spacing(3),
          mx: theme.spacing(2),
          background: theme.colors.alpha.trueWhite[10]
        }}
      />
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