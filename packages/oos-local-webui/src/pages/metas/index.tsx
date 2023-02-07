import Button from '@mui/material/Button';
import { Add, DocumentScanner } from '@mui/icons-material';
import MetaForm from './MetaForm';
import { Avatar, Box, Card, Container, Divider, Typography, useTheme } from '@mui/material';
import PageTitle from '../../components/PageTitle';
import { useState } from 'react';
import { OOSState, useOOSStore } from '../../services/useOOSStore';

export default function Metas() {
  const [open, setOpen] = useState(false);
  const theme = useTheme();
  const [metasType] = useOOSStore( (state:OOSState) => [state.metaTypes] );

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
          minHeight='128px'
          alignItems={'center'}
          justifyContent="space-between"
        >
        <Box display="flex" alignItems="center" >
          <Avatar variant="rounded" sx={{ marginRight: 2, backgroundColor: theme.palette.primary.main}}>
            <Add fontSize="large" />
          </Avatar>
          <Box sx={{ p: theme.spacing(2,0,2,0)}}>
            <Typography variant="h3" component="h3" gutterBottom>
              Manage Metas
            </Typography>
            <Typography variant="subtitle2">
              Metas are metadata that you add to your drops. They can be simple personal labels, or full applications.
            </Typography>
          </Box>
        </Box>
        <Box>
          <Button variant="contained" startIcon={<DocumentScanner />}>
            Manage
          </Button>
        </Box>
      </Box>
      </PageTitle>
      <Container maxWidth="lg">
        { metasType().map( t => <MetaForm key={t} type={t}/> ) }
      </Container>
    </>  
  );
}