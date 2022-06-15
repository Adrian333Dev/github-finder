import { useNavigate } from 'react-router-dom';
import { Box, Grid, Grow, Typography } from '@mui/material';

import { ImgContainer, StyledCard } from './styles';

const User = ({ user: { login, avatar_url }, i }) => {
	const navigate = useNavigate();
	return (
		<Grid item xs={12} sm={6} md={4} lg={3}>
			<Grow in timeout={i * 50}>
				<StyledCard>
					<ImgContainer>
						<img src={avatar_url} alt='Profile' />
					</ImgContainer>
					<Box>
						<Typography variant='body1'>{login}</Typography>
						<Typography
							variant='body2'
							sx={{ color: 'gray !important', cursor: 'pointer' }}
							onClick={() => navigate(`users/${login}`)}
						>
							Visit Profile
						</Typography>
					</Box>
				</StyledCard>
			</Grow>
		</Grid>
	);
};

export default User;
