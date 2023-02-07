import { styled } from '@mui/material';
import AppBar, { AppBarProps  } from '@mui/material/AppBar';

interface OOSAppBarProps extends AppBarProps {
    open?: boolean;
}
  
const OOSAppBar = styled(AppBar, { shouldForwardProp: (prop) => prop !== 'open', })<OOSAppBarProps>(({ theme, open }) => ({
    position: 'fixed',
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: theme.sidebar.opened,
        [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${theme.sidebar.opened})` ,
        },
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    }),
    ...(!open && {
        [theme.breakpoints.up('md')]: {
        width: `calc(100% - ${theme.sidebar.closed} - 1px)` ,
        },
        transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

export default OOSAppBar;