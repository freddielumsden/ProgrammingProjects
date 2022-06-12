// React
import React from 'react';
import { createRoot } from 'react-dom/client';

// CSS
import './index.css';

// Fonts
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Material UI
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
	palette: {
	  mode: 'dark'
	},
});

const root = createRoot(
	document.getElementById('root')
);
function App() {
	const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  
	const theme = React.useMemo(
	  () =>
		createTheme({
		  palette: {
			mode: prefersDarkMode ? 'dark' : 'light',
		  },
		}),
	  [prefersDarkMode],
	);
  
	return (
	  <ThemeProvider theme={theme}>
		<CssBaseline />
		<Button />
	  </ThemeProvider>
	);
  }
  export default App;