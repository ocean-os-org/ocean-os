import { CssBaseline } from '@mui/material';
import { useRoutes } from 'react-router-dom';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

import OOSThemeProvider from './theme/ThemeProvider';
import DropsProvider from './contexts/DropsContext';
import router from './router';

function App() {
  const content = useRoutes(router);

  return (
    <OOSThemeProvider>
      <DropsProvider>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
            <CssBaseline />
            {content}
        </LocalizationProvider>
      </DropsProvider>
    </OOSThemeProvider>
  );
}
export default App;
