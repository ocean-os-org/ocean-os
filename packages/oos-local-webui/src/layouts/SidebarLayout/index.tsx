import { useTheme } from '@mui/material/styles';
import { SidebarProvider } from '../../contexts/SidebarContext';

import Box from '@mui/material/Box';

import Sidebar from './Sidebar';
import Header from './Header';
import PageContent from './PageContent';

const SidebarLayout = () => {
  const theme = useTheme();

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

export default SidebarLayout;
