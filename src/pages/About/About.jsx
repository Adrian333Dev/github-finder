import { Container } from './styles';
import Typography from '@mui/material/Typography';

const About = () => {
	return (
		<Container>
			<Typography variant='h2'>Github Finder</Typography>
			<Typography fontSize={'1.4rem'}>
				A React app to search GitHub profiles and see profile details. This
				project is part of the
			</Typography>
		</Container>
	);
};

export default About;
