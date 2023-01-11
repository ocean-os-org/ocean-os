import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import ProTip  from './ProTip';
import { Copyright } from './Copyright';
import { Button } from '@mui/material';
import { persistence } from '@ocean-os/persistence';
import { remoteSync } from '@ocean-os/remote-sync';
import Dashboard  from './dashboard/Dashboard';

export default function App() {
  return (
      <Dashboard />
  );
}