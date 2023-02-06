import { useState, createContext, PropsWithChildren } from 'react';
import { ThemeProvider as MuiThemeProvider} from '@mui/material';
import { themeCreator } from './base';

export const ThemeContext = createContext(
  (themeName: string): void => {}
);

const ThemeProvider = (props:PropsWithChildren<{}>) => {
  const curThemeName = localStorage.getItem('appTheme') || 'OceanOSTheme';
  const [themeName, _setThemeName] = useState(curThemeName);
  const theme = themeCreator(themeName);

  const setThemeName = (themeName: string): void => {
    localStorage.setItem('appTheme', themeName);
    _setThemeName(themeName);
  };

  return (
      <ThemeContext.Provider value={setThemeName}>        
        <MuiThemeProvider theme={theme}>{props.children}</MuiThemeProvider>
      </ThemeContext.Provider>
  );
};

export default ThemeProvider;