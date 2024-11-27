import { BrowserRouter } from 'react-router-dom';
import './styles/App.css';
import { ThemeProvider, createTheme } from '@mui/material';
import Router from './router/Router';
import '@fontsource/roboto';
import { StoreContext, store } from './store';

const theme = createTheme({
  components: {
    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        outlined: {
          textTransform: 'inherit',
          borderRadius: '.71rem',
        },
        contained: {
          borderRadius: '.71rem',
          textTransform: 'inherit',
        },
      },
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          color: '#F2F2F2',
        },
      },
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          '&.Mui-checked': {
            color: '#F2F2F2',
          },
          fill: '#f2f2f2',
        },
        colorPrimary: {
          color: '#F2F2F2',
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          backgroundColor: '#F2F2F2',
          borderRadius: '.71rem !important',
        },
      },
    },
  },
  palette: {
    background: {
      default: '#11121B',
    },
    primary: {
      main: '#11121B',
      contrastText: '#F2F2F2',
    },
    secondary: {
      main: '#4F47F4',
      contrastText: '#F2F2F2',
    },
    error: {
      main: '#FA5757',
    },
    warning: {
      main: '#F8B917',
      contrastText: '#000',
    },
    success: {
      main: '#3FB8A9',
      contrastText: '#000',
    },
    text: {
      primary: '#11121B',
      secondary: '#F2F2F2',
    },
  },
});

function App() {
  return (
    <div className="App">
      <StoreContext.Provider value={store}>
        <ThemeProvider theme={theme}>
          <BrowserRouter>
            <Router />
          </BrowserRouter>
        </ThemeProvider>
      </StoreContext.Provider>
    </div>
  );
}

export default App;
