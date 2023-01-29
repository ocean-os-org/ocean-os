import DocumentScannerTwoToneIcon from '@mui/icons-material/DocumentScannerTwoTone';
import {
  Typography,
  Button,
  Box,
} from '@mui/material';

function StreamHeader() {
  const user = {
    name: 'Rui Gil',
    avatar: '/assets/images/avatars/1.jpg'
  };

  return (
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
  );
}

export default StreamHeader;
