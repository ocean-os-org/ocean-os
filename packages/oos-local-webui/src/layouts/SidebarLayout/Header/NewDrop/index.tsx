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
import { Divider } from '@mui/material';

export default function FormDialog() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Button variant="contained" onClick={handleClickOpen} color="secondary" startIcon={ <Add/> }>
          New Drop
      </Button>

      <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md" sx={{ backdropFilter: 'blur(4px)'}}>
        <DialogTitle>New Drop</DialogTitle>
        <DialogContent>
          <DialogContentText>
            You can choose the drop type that you want to create.
          </DialogContentText>
          <Form/>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button variant="contained" onClick={handleClose}>Create</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}