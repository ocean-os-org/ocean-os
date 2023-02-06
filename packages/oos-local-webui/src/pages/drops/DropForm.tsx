import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { Add, AddAlert, DocumentScanner } from '@mui/icons-material';
import Form from './Form';
import { Avatar, Box, Card, Container, Divider, Typography, useTheme } from '@mui/material';
import PageTitle from '../../components/PageTitle';

export default function NewDrop() {
  const [open, setOpen] = React.useState(false);
  const theme = useTheme();
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
      <>
      <PageTitle>
      <Box
      display="flex"
      height='128px'
      alignItems={{ xs: 'stretch', md: 'center' }}
      flexDirection={{ xs: 'column', md: 'row' }}
      justifyContent="space-between"
    >
      <Box display="flex" alignItems="center" >
        <Avatar variant="rounded" sx={{ marginRight: 2, backgroundColor: theme.palette.primary.main}}>
          <Add fontSize="large" />
        </Avatar>
        <Box>
          <Typography variant="h3" component="h3" gutterBottom>
            New Drop
          </Typography>
          <Typography variant="subtitle2">
            Choose the type of drop to create
          </Typography>
        </Box>
      </Box>
      <Box mt={{ xs: 3, md: 0 }}>
        <Button variant="contained" startIcon={<DocumentScanner />}>
          Create
        </Button>
      </Box>
    </Box>
      </PageTitle>
      <span id="back-to-top-anchor"/>
      <Container maxWidth="lg">
        <Card elevation={1} sx={{ padding: 2 }}>
          <Form/>
        </Card>

      </Container>
   
    </>  );
}