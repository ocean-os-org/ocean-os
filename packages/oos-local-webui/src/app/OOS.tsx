import { CssBaseline } from '@mui/material';
import { useRoutes } from 'react-router-dom';

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import frLocale from "date-fns/locale/fr-CH";
import ThemeProvider from '../services/ThemeContext';
import Routes from '../route/Routes';
import { NavigationProvider } from '../services/NavigationContext';

function OOS() {
  const content = useRoutes(Routes);

  return (
    <ThemeProvider>
      <LocalizationProvider dateAdapter={AdapterDateFns} adapterLocale={frLocale}>
        <NavigationProvider>
          <CssBaseline />
          {content}
        </NavigationProvider>
      </LocalizationProvider>
    </ThemeProvider>
  );
}
export default OOS;
