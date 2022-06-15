import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { AppBar, Button, Toolbar } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

import { Search, SearchIconWrapper, StyledInputBase } from './styles';
import { setValue } from '../../app/features/searchSlice';

export default function SearchAppBar() {
	const [input, setInput] = useState('');
	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(setValue(input));
		setInput('');
	};

	const dispatch = useDispatch();

	return (
		<AppBar position='static' sx={{ marginBottom: 3 }}>
			<Toolbar
				sx={{
					display: 'flex',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}
			>
				<Search onSubmit={handleSubmit}>
					<SearchIconWrapper>
						<SearchIcon />
					</SearchIconWrapper>
					<StyledInputBase
						placeholder='Search…'
						inputProps={{ 'aria-label': 'search' }}
						value={input}
						onChange={(e) => setInput(e.target.value)}
					/>
				</Search>
				<Button onClick={() => dispatch(setValue(''))}>Clear</Button>
			</Toolbar>
		</AppBar>
	);
}
