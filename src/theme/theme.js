import { createTheme } from '@mui/material';

const theme = createTheme({
	palette: {
		custom: {
			50: '#F7FAFC',
			100: '#EDF2F7',
			200: '#E2E8F0',
			300: '#CBD5E0',
			400: '#A0AEC0',
			500: '#718096',
			600: '#4A5568',
			700: '#2D3748',
			800: '#1A202C',
			900: '#171923',
		},
		mode: 'dark',
	},
	components: {
		MuiCssBaseline: {
			styleOverrides: {
				body: {
					backgroundColor: '#1A202C',
					color: '#E2E8F0',
					'& *': {
						color: 'inherit !important',
					},
				},
				'*::-webkit-scrollbar': {
					width: '0.4em',
				},
				'*::-webkit-scrollbar-thumb': {
					outline: '1px solid #4A5568',
					borderRadius: '5px',
				},
			},
		},
		MuiAppBar: {
			styleOverrides: {
				root: {
					backgroundColor: '#171923',
					backgroundImage: 'unset',
				},
			},
		},
	},
});

export default theme;
