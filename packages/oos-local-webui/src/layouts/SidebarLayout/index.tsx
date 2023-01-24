import { FC, PropsWithChildren, ReactNode, useContext, useState } from 'react';
import { Box, alpha, lighten } from '@mui/material';
import { Outlet } from 'react-router-dom';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import { SidebarContext, SidebarProvider } from '../../contexts/SidebarContext';

import Sidebar from './Sidebar';
import Header from './Header';


import PageContent from './PageContent';



const SidebarLayout = () => {
  const theme = useTheme();
  const { sidebarOpen } = useContext(SidebarContext);

  return (
    <SidebarProvider>

      <Box
        sx={{
          flex: 1,
          height: '100%',

          '.MuiPageTitle-wrapper': {
            background:
              theme.palette.mode === 'dark'
                ? theme.colors.alpha.trueWhite[5]
                : theme.colors.alpha.white[50],
            marginBottom: `${theme.spacing(4)}`,
            boxShadow:
              theme.palette.mode === 'dark'
                ? `0 1px 0 ${alpha(
                    lighten(theme.colors.primary.main, 0.7),
                    0.15
                  )}, 0px 2px 4px -3px rgba(0, 0, 0, 0.2), 0px 5px 12px -4px rgba(0, 0, 0, .1)`
                : `0px 2px 4px -3px ${alpha(
                    theme.colors.alpha.black[100],
                    0.1
                  )}, 0px 5px 12px -4px ${alpha(
                    theme.colors.alpha.black[100],
                    0.05
                  )}`
          }
        }}
      >
        <Header />
        <Sidebar />
        <PageContent />
      </Box>
    </SidebarProvider>

  );
};
/*
            [theme.breakpoints.up('lg')]: {
              ml: `${theme.sidebar.width}`
            }

*/
export default SidebarLayout;
