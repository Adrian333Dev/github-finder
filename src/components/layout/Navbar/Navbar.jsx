import { useNavigate } from 'react-router-dom';
import { AppBar, Button } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';

import { Flex, LogoTitle, StyledToolbar } from './styles';

const Navbar = () => {
	const navigate = useNavigate();
	return (
		<AppBar>
			<StyledToolbar>
				<Flex onClick={() => navigate('/')}>
					<GitHubIcon fontSize='large' />
					<LogoTitle variant='h6'>Github Finder</LogoTitle>
				</Flex>
				<Flex>
					<Button onClick={() => navigate('/')}>Home</Button>
					<Button onClick={() => navigate('/about')}>About</Button>
				</Flex>
			</StyledToolbar>
		</AppBar>
	);
};

export default Navbar;
