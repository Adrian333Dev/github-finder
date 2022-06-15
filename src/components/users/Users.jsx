import { CircularProgress, Grid } from '@mui/material';
import { Container } from '../../pages/About/styles';
import { useSelector } from 'react-redux';

import { useSearchUsersQuery } from '../../services/githubApi';
import User from './User';
import { selectSearch } from '../../app/features/searchSlice';

const Users = () => {
	const search = useSelector(selectSearch);
	const { data, isLoading, error } = useSearchUsersQuery(search);

	if (isLoading)
		return (
			<Container>
				<CircularProgress size={'5rem'} />
			</Container>
		);

	if (error) return;

	return (
		<>
			<Grid container spacing={1}>
				{data?.items?.map((user, i) => (
					<User key={user.id} user={user} i={i} />
				))}
			</Grid>
		</>
	);
};

export default Users;
