import { Container,Typography, Box, Card, CardHeader, Divider, CardContent, Avatar, IconButton, CardMedia, CardActions, Collapse, IconButtonProps, styled, Chip } from '@mui/material';

import Footer from '../../components/Footer';
import PageTitle from '../../components/PageTitle';
import StreamHeader from './StreamHeader';
import { useState } from 'react';

//import { useState } from 'react';





import Drop from '../../components/Drop';
function Home() {

  const d1 = { content: "hello", metas: [ { key: 'type', value:'text' }]}
  const d2 = { content: "hello", metas: [ { key: 'type', value:'checklist' }]}
  const d3 = { content: "hello", metas: [ ]}
  return (
    <>
      <PageTitle>
        <StreamHeader />
      </PageTitle>
      <Container maxWidth="lg">
        <Drop value={d1} />
        <Drop value={d2} />
        <Drop value={d3} />
      </Container>
    </>
  );
}

export default Home;
