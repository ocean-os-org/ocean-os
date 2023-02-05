import * as React from 'react';
import Button from '@mui/material/Button';
import { Add, DocumentScanner } from '@mui/icons-material';
import Form from './Form';
import { Avatar, Box, Card, Container, Divider, Typography, useTheme } from '@mui/material';
import PageTitle from '../../components/PageTitle';

export default function Metas() {
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
            Manage Metas
          </Typography>
          <Typography variant="subtitle2">
            Metas are metadata that you add to your drops. They can be simple personal labels, or full applications.
          </Typography>
        </Box>
      </Box>
      <Box mt={{ xs: 3, md: 0 }}>
        <Button variant="contained" startIcon={<DocumentScanner />}>
          Manage
        </Button>
      </Box>
    </Box>
      </PageTitle>
      <span id="back-to-top-anchor"/>
      <Container maxWidth="lg">
          <Form/>

      </Container>
   
    </>  );
}