import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip  from './ProTip';
import { Copyright } from './Copyright';
import { Button } from '@mui/material';
import { persistence } from '@ocean-os/persistence';
import { remoteSync } from '@ocean-os/remote-sync';

export default function App() {
  return (
    <Container maxWidth="sm">
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          {persistence()}
        </Typography>
        <Typography variant="h4" component="h1" gutterBottom>
          {remoteSync()}
        </Typography>
        <Button variant="contained">Hello World YEAH YEAH</Button>
        <ProTip />
        <Copyright />
      </Box>
    </Container>
  );
}