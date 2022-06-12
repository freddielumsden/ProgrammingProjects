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

const root = createRoot(
	document.getElementById('root')
);
const el = <Button>Hello World</Button>;
root.render(el);