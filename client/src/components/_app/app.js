import { CssBaseline } from '@mui/material';
import { ToastContainer } from 'react-toastify';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import 'react-toastify/dist/ReactToastify.css';

import { AppContextProvider } from '../_context';
import AppRouter from '../_router';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <AppContextProvider>
      <ThemeProvider theme={darkTheme}>
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
