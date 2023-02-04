import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Add } from '@mui/icons-material';
import Form from './Form';
import { Box, Card, Container, Divider } from '@mui/material';
import PageTitle from '../../components/PageTitle';

export default function NewDrop() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <>
      <PageTitle>
        <Box>New Drop</Box>
      </PageTitle>
      <span id="back-to-top-anchor"/>
      <Container maxWidth="lg">
        <Card elevation={1} sx={{ padding: 2 }}>
          <Form/>
        </Card>

      </Container>
   
    </>  );
}