import { styled } from '@mui/material';

export const Container = styled('div')(({ theme }) => ({
	width: '100%',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
	flexDirection: 'column',
	height: '80vh',
	gap: 20,
	textAlign: 'center',
}));
