import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userSlice = createApi({
  reducerPath: 'userPath',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/users`,
     prepareHeaders: (headers) => {
      const token = localStorage.getItem("token");
      if (token) {
        headers.set("authorization", `Bearer ${token}`);
      }
      return headers;
    },
  }),
  tagTypes: ['UsersAPI'],
  endpoints: (builder) => ({
    getUserInfo: builder.query<any, void>({
      query: () => ({
        url: '/',
        method: 'GET',
      }),
      providesTags: ['UsersAPI'],
    }),

    loggedinUser: builder.query<any, void>({
      query: () => ({
        url: '/users/loggedin-user',
        method: 'GET',
      }),
      providesTags: ['UsersAPI'],
    }),
    // Login mutation
    login: builder.mutation({
      query: (credentials) => ({
        url: '/login',
        method: 'POST',
        body: credentials,
      }),
      invalidatesTags: ['UsersAPI'],
    }),
    // Register mutation
    register: builder.mutation({
      query: (userData) => ({
        url: '/register',
        method: 'POST',
        body: userData,
      }),
      invalidatesTags: ['UsersAPI'],
    }),
  }),
});
export const { useGetUserInfoQuery, useLoginMutation, useRegisterMutation, useLoggedinUserQuery } = userSlice;
