import { CssBaseline } from '@mui/material';
import { useRoutes } from 'react-router-dom';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import frLocale from "date-fns/locale/fr-CH";
import OOSThemeProvider from './theme/ThemeProvider';
import DropsProvider from './contexts/DropsContext';
import router from './router';
import MetasProvider from './contexts/MetasContext';

function App() {
  const content = useRoutes(router);

  return (
    <OOSThemeProvider>
      <DropsProvider>
        <MetasProvider>
          <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={frLocale}>
            <CssBaseline />
            {content}
          </LocalizationProvider>
        </MetasProvider>
      </DropsProvider>
    </OOSThemeProvider>
  );
}
export default App;
