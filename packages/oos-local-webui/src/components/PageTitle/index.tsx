import { PropsWithChildren } from 'react';
import { Box, Container, styled } from '@mui/material';

const PageTitleStyled = styled(Box)(
  ({ theme }) => `
        background-color: ${'#15232D'};
        margin-bottom: ${theme.spacing(4)};
`
);

const PageTitle = ({ children }:PropsWithChildren<{}> ) => {
  return (
    <PageTitleStyled>
      <Container maxWidth="lg">{children}</Container>
    </PageTitleStyled>
  );
};

export default PageTitle;
