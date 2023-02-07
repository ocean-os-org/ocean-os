import { Box, Chip, Container, Divider, Fab, Fade, Toolbar, useScrollTrigger, useTheme } from '@mui/material';
import PageTitle from '../../components/PageTitle';
import StreamHeader from './StreamHeader';
import Drop from '../../components/Drop';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from './ScrollTop';
import { Fragment } from 'react';
import { useOOSStore, OOSState } from '../../services/useOOSStore';


function Home() {
  const drops = useOOSStore((state:OOSState) => state.drops);

  const theme = useTheme();

  return (
    <>
      <PageTitle>
        <StreamHeader />
      </PageTitle>
      <span id="back-to-top-anchor"/>
      <Container maxWidth="lg">
        { drops?.map( (d,i) => 
          <Fragment key={d.id}>
            <Drop {...d} />
            { (i % 2 == 0) ? (<Box sx={{height: theme.spacing(1)}}></Box>) : (<Divider sx={{ margin: theme.spacing(1)}}> <Chip color="primary" size="small" label="31, Janeiro, 2023" /></Divider>) }
          </Fragment> 
          ) 
        }
      </Container>
      <ScrollTop >
        <Fab size="small" aria-label="scroll back to top">
          <KeyboardArrowUpIcon />
        </Fab>
      </ScrollTop>      
    </>
  );
}

export default Home;
