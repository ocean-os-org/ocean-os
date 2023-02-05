import { PropsWithChildren } from 'react';
import { Box, Container, styled } from '@mui/material';

const PageTitleStyled = styled(Box)(
  ({ theme }) => `
        background-color: ${theme.header.background};
        margin-bottom: ${theme.spacing(4)};
        min-height: ${theme.header.height};
        padding-top: 64px;
        display: flex;
        flexDirection: row;
        align-items: center;
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
