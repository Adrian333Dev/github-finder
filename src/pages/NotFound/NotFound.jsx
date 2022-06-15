import { useNavigate } from 'react-router-dom';
import { Button, Typography } from '@mui/material';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import { Container } from '../About/styles';

const NotFound = () => {
	const navigate = useNavigate();
	return (
		<Container>
			<ErrorOutlineIcon sx={{ fontSize: '5rem' }} />
			<Typography variant='h2'>404 - Page Not Found</Typography>
			<Button
				onClick={() => navigate(-1)}
				size='large'
				sx={{ border: '1px solid #E2E8F0' }}
				startIcon={<ArrowBackIcon />}
			>
				{' '}
				Go Back
			</Button>
		</Container>
	);
};

export default NotFound;
