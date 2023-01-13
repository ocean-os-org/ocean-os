import { useRoutes } from 'react-router-dom';
import router from './router';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import { CssBaseline } from '@mui/material';
import ThemeProviderWrapper from './theme/ThemeProvider';

function App() {
  const content = useRoutes(router);

  return (
    <ThemeProviderWrapper>
      <LocalizationProvider dateAdapter={AdapterDateFns}>
        <CssBaseline />
        {content}
      </LocalizationProvider>
    </ThemeProviderWrapper>
  );
}
export default App;
