import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userSlice = createApi({
  reducerPath: 'userPath',
  baseQuery: fetchBaseQuery({ baseUrl: `${import.meta.env.VITE_BASE_URL}/users` }),
  endpoints: (builder) => ({
    getUserInfo: builder.query<any, void>({
      query: () => ({
        url: '/',
        method: 'GET',
      }),
    }),
    // Login mutation
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
    }),
    // Register mutation
    register: builder.mutation({
      query: (userData) => ({
        url: '/register',
        method: 'POST',
        body: userData,
      }),
    }),
  }),
});
export const { useGetUserInfoQuery, useLoginMutation, useRegisterMutation } = userSlice;
