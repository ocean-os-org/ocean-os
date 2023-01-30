import { Box, Container, Fab, Fade, Toolbar, useScrollTrigger } from '@mui/material';
import PageTitle from '../../components/PageTitle';
import StreamHeader from './StreamHeader';
import Drop from '../../components/Drop';
import { useDrops } from '../../contexts/DropsContext';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ScrollTop from './ScrollTop';


function Home() {
  const  {drops, dispatch} = useDrops();

  return (
    <>
      <PageTitle>
        <StreamHeader />
      </PageTitle>
      <span id="back-to-top-anchor"/>
      <Container maxWidth="lg">
        { drops?.map( d => <Drop key={d.id} drop={d} /> ) }
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
