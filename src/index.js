import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@mui/material';
import { Provider } from 'react-redux';

import App from './App';
import theme from './theme/theme';
import { store } from './app/store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<ThemeProvider theme={theme}>
		<CssBaseline />
		<BrowserRouter>
			<Provider store={store}>
				<App />
			</Provider>
		</BrowserRouter>
	</ThemeProvider>
);
