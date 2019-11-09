import React from 'react';
import { createMuiTheme, MuiThemeProvider  } from '@material-ui/core/styles';

import "./App.css"
import Routes from './routes';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#009688'
    },
    secondary: {
      main: '#834bff',
    },
  },
});

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <div className="App">
        <Routes />
      </div>
    </MuiThemeProvider>
  );
}

export default App;
