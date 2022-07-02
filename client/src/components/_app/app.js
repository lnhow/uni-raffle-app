import { CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import 'react-toastify/dist/ReactToastify.css';

import { AppContextProvider } from '../_context';
import AppRouter from '../_router';

const getTheme = (isDark = false) => createTheme({
  palette: {
    mode: isDark ? 'dark' : 'light',
    background: {
      default: isDark ? '#111' : '#eee'
    },
    secondary: {
      light: '#9effff',
      main: '#64ffda',
      dark: '#14cba8',
      contrastText: '#000',
    },
    primary: {
      light: '#69e2ff',
      main: '#00b0ff',
      dark: '#0081cb',
      contrastText: '#000',
    },
  },
});

const theme = getTheme(false);

function App() {
  return (
    <AppContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <AppRouter />
        <ToastContainer 
          position='top-center'
          autoClose={3000}
          pauseOnHover={false}
          closeOnClick
          pauseOnFocusLoss={false}
          hideProgressBar
        />
      </ThemeProvider>
    </AppContextProvider>
  );
}

export default App;
