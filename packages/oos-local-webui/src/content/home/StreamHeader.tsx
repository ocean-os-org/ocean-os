import DocumentScannerTwoToneIcon from '@mui/icons-material/DocumentScannerTwoTone';
import {
  Typography,
  Button,
  Box,
  useTheme,
} from '@mui/material';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';

interface Props {
  children: React.ReactElement;
}

const ElevationScroll = (props: Props) => {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0,
    sx: {
      marginTop: '64px',
      opacity: trigger ? 1 : 0,
    }
  });
}

const StreamHeader = () => {

  const theme = useTheme();
  const user = {
    name: 'Rui Gil',
    avatar: '/assets/images/avatars/1.jpg'
  };

  return (
    <>
      <ElevationScroll>
        <AppBar >
          <Toolbar sx={{ backgroundColor: '#15232D' }}>
            <Typography variant="h6" component="div">
              Scroll to elevate App bar
            </Typography>
          </Toolbar>
        </AppBar>
      </ElevationScroll>    
      <Box
      display="flex"
      alignItems={{ xs: 'stretch', md: 'center' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent="space-between"
    > 
      <Box display="flex" alignItems="center">
        <Box>
          <Typography variant="h3" component="h3" gutterBottom>
            Welcome, {user.name} !!
          </Typography>
          <Typography variant="subtitle2">
            Manage your day to day tasks with style! Enjoy a well built UI
            system.
          </Typography>
        </Box>
      </Box>
      <Box mt={{ xs: 3, md: 0 }}>
        <Button variant="contained" startIcon={<DocumentScannerTwoToneIcon />}>
          Export
        </Button>
      </Box>
    </Box>
    </>
  );
}

export default StreamHeader;
