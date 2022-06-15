import { AppBar, Box, styled, Toolbar, Typography } from '@mui/material';

export const StyledAppBar = styled(AppBar)(({ theme }) => ({}));

export const StyledToolbar = styled(Toolbar)(({ theme }) => ({
	display: 'flex',
	justifyContent: 'space-between',
	alignItems: 'center',
}));

export const LogoTitle = styled(Typography)(({ theme }) => ({}));

export const Flex = styled(Box)(({ theme }) => ({
	display: 'flex',
	alignItems: 'center',
	gap: theme.spacing(1),
}));

export const Links = styled(Box)(({ theme }) => ({}));
