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

export default OOSAppBar;