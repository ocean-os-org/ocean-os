import { Box, Container, Card } from '@mui/material';

import { styled } from '@mui/material/styles';
import Logo from '../../components/LogoSign';
import Hero from './Hero';

const OverviewWrapper = styled(Box)(
  () => `
    overflow: auto;
    flex: 1;
    overflow-x: hidden;
    align-items: center;
`
);

function Overview() {
  return (
    <OverviewWrapper>
      <Container maxWidth="md">
        <Card sx={{ p: 5, m: 5, borderRadius: 2 }}>
          <Box display="flex" justifyContent="center" pb={5} alignItems="center">
            <Logo />
          </Box>
          <Hero />
          
        </Card>
      </Container>
    </OverviewWrapper>
  );
}

export default Overview;
