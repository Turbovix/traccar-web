import { useMediaQuery } from '@mui/material';
import { grey, green, indigo } from '@mui/material/colors';

const validatedColor = (color) => (/^#([0-9A-Fa-f]{3}){1,2}$/.test(color) ? color : null);

export default (server) => {
  const preferDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const serverDarkMode = server?.attributes?.darkMode;
  const darkMode = serverDarkMode !== undefined ? serverDarkMode : preferDarkMode;

  return {
    mode: darkMode ? 'dark' : 'light',
    background: {
      default: darkMode ? grey[900] : grey[50],
    },
    primary: {
      main: validatedColor(server?.attributes?.colorPrimary) || (darkMode ? indigo[200] : indigo[900]),
    },
    secondary: {
      main: validatedColor(server?.attributes?.colorSecondary) || (darkMode ? green[200] : green[800]),
    },
    neutral: {
      main: grey[500],
    },
    geometry: {
      main: '#3bb2d0',
    },
  };
};
