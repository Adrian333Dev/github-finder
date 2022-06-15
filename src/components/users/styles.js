import { alpha, Card, InputBase, styled } from '@mui/material';

export const StyledCard = styled(Card)(({ theme }) => ({
	backgroundColor: theme.palette.custom[700],
	padding: theme.spacing(1),
	display: 'flex',
	alignItems: 'center',
	gap: theme.spacing(1),
}));

export const ImgContainer = styled('div')(({ theme }) => ({
	borderRadius: '50%',
	overflow: 'hidden',
	width: '48px',
	height: '48px',
	'& img': {
		width: '100%',
	},
}));

export const Search = styled('form')(({ theme }) => ({
	position: 'relative',
	width: '100%',
	borderRadius: theme.shape.borderRadius,
	backgroundColor: alpha(theme.palette.common.white, 0.15),
	'&:hover': {
		backgroundColor: alpha(theme.palette.common.white, 0.25),
	},
	[theme.breakpoints.up('sm')]: {
		'&:focus': {
			'& $InputBase': {
				width: 400,
			},
		},
	},
	marginLeft: 0,
	[theme.breakpoints.up('sm')]: {
		marginLeft: theme.spacing(1),
		width: 'auto',
	},
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
	padding: theme.spacing(0, 2),
	paddingRight: theme.spacing(1),
	height: '100%',
	position: 'absolute',
	cursor: 'pointer',
	display: 'flex',
	alignItems: 'center',
	justifyContent: 'center',
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
	color: 'inherit',
	'& .MuiInputBase-input': {
		padding: theme.spacing(1, 1, 1, 0),
		paddingInline: `calc(1em + ${theme.spacing(4)})`,
		transition: theme.transitions.create('width'),
		width: 300,
		maxWidth: '100%',
		[theme.breakpoints.up('sm')]: {
			'&:focus': {
				width: 400,
			},
		},
	},
}));
