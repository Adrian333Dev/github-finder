import { Box, Container, styled } from '@mui/material';

export const StyledContainer = styled(Container)(({ theme }) => ({
	paddingBlock: '100px 50px',
	minHeight: '100vh',
}));

export const Flex = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: theme.spacing(1),
}));