import { AppBar, Toolbar, Typography } from '@mui/material';

const Footer = () => {
	return (
		<AppBar position='static'>
			<Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
				<Typography variant='subtitle1'>
					Copyright © {new Date().getFullYear()} All rights reserved.
				</Typography>
			</Toolbar>
		</AppBar>
	);
};

export default Footer;
