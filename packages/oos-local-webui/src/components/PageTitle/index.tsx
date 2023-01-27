import { PropsWithChildren } from 'react';
import { Box, Container, styled } from '@mui/material';

const PageTitleStyled = styled(Box)(
  ({ theme }) => `
        padding: ${theme.spacing(4)};
        background-color: ${theme.palette.background.paper};
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
