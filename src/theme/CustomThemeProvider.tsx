import { createTheme, ThemeProvider } from '@mui/material/styles';
import { PropsWithChildren } from 'react';
import { useAppSelector } from 'store/hooks';
import { appColors, darkModeColors, commonColors } from './colors';

const CustomThemeProvider = (props: PropsWithChildren<{}>) => {
  const darkMode = useAppSelector((state) => state.darkMode);
  const theme = createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: appColors.primary,
      },
    },
    background: darkMode ? darkModeColors.background : appColors.background,
    font: darkMode ? darkModeColors.font : appColors.font,
    commonColors,
  });
  return <ThemeProvider theme={theme}>{props.children}</ThemeProvider>;
};

export default CustomThemeProvider;

declare module '@mui/system' {
  interface Theme {
    background: string;
    font: string;
    commonColors: { [key: string]: string };
  }
  interface ThemeOptions {
    background: string;
    font: string;
    commonColors: { [key: string]: string };
  }
}
