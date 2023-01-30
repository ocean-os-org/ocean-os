import DocumentScannerTwoToneIcon from '@mui/icons-material/DocumentScannerTwoTone';
import {
  Typography,
  Button,
  Box,
  useTheme,
  styled,
  alpha,
  InputBase,
} from '@mui/material';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import useScrollTrigger from '@mui/material/useScrollTrigger';
import SearchIcon from '@mui/icons-material/Search';

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

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  display: 'block',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(1),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));
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
      flexDirection={{ xs: 'column', md: 'row' }}
    > 
      <Box display="flex" sx={{height: '128px', alignItems:'center', paddingTop: theme.spacing(2), paddingBottom: theme.spacing(2), flexGrow: 1 }}>
        <Box>
        <Search>
          <SearchIconWrapper>
            <SearchIcon />
          </SearchIconWrapper>
          <StyledInputBase
            placeholder="Search…"
          />
        </Search>
          <Typography variant="subtitle2">
            
          </Typography>
        </Box>
      </Box>
      <Box mt={{ display: 'flex', alignItems: 'center', xs: 3, md: 0 }}>
        <Button variant="contained" startIcon={<DocumentScannerTwoToneIcon />}>
          Jump
        </Button>
      </Box>
    </Box>
    </>
  );
}

export default StreamHeader;
