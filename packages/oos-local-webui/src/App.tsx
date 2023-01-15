import { CssBaseline } from '@mui/material';
import { useRoutes } from 'react-router-dom';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import ThemeProviderWrapper from './theme/ThemeProvider';
import router from './router';

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
