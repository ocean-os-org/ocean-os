import { Container } from '@mui/material';
import PageTitle from '../../components/PageTitle';
import StreamHeader from './StreamHeader';
import Drop from '../../components/Drop';
import { useDrops } from '../../contexts/DropsContext';

function Home() {
  const  {drops, dispatch} = useDrops();

  return (
    <>
      <PageTitle>
        <StreamHeader />
      </PageTitle>
      <Container maxWidth="lg">
        { drops?.map( d => <Drop drop={d} /> ) }
      </Container>
    </>
  );
}

export default Home;
