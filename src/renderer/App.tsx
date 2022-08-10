import { MemoryRouter as Router } from 'react-router-dom';
import { CssBaseline, createTheme, ThemeProvider } from '@mui/material';
import { Provider } from 'react-redux';
import { store } from './store';

import SideBar from './ui/containers/SideBar/SideBar';
import { AppRoutes as Routes } from './Router/Routes';
import './App.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#2b2a2a',
    },
  },
});
export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Provider store={store}>
        <Router>
          <SideBar />
          <Routes />
        </Router>
      </Provider>
    </ThemeProvider>
  );
}
