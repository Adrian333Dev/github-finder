import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export const githubApi = createApi({
	reducerPath: 'githubApi',
	baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_GITHUB_URL }),
	endpoints: (builder) => ({
		getUsers: builder.query({
			query: () => `/users`,
			headers: {
				Authorization: `toke ${process.env.REACT_APP_GITHUB_TOKEN}`,
			},
		}),
		searchUsers: builder.query({
			query: (input) => `/search/users?q=${input}`,
			headers: {
				Authorization: `toke ${process.env.REACT_APP_GITHUB_TOKEN}`,
			},
		}),
	}),
});
export const { useGetUsersQuery, useSearchUsersQuery } = githubApi;
