import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import SaveIcon from '@mui/icons-material/Save';

type SaveDialogProps = {
    open: boolean;
}

export default function SaveDialog() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };
  
  return (
    <>
      <IconButton onClick={handleClickOpen}><SaveIcon/></IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Save Stream Filters</DialogTitle>
        <DialogContent>
          <TextField
          color="secondary"
            autoFocus

            margin="dense"
            id="name"
            label="Stream name"
            type="text"
            fullWidth
            variant="standard"
          />
          <DialogContentText>
            You can save these filters as a new stream. The custom stream will apear on your saved streams.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleClose}>Cancel</Button>
          <Button variant="contained" color="secondary" onClick={handleClose}>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
}