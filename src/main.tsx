import { createTheme, CssBaseline, ThemeProvider } from '@mui/material';
import { blueGrey, grey } from '@mui/material/colors';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const darkTheme = createTheme({
  palette: {
    primary: blueGrey,
    divider: blueGrey[700],
    background: {
      default: blueGrey[900],
      paper: blueGrey[900],
    },
    text: {
      primary: '#fff',
      secondary: grey[500],
    },
  }
})

root.render(
  <React.StrictMode>
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </React.StrictMode>
);