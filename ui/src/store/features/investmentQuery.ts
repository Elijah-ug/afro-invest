import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const investmentQuery = createApi({
  reducerPath: 'investmentPath',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/investments`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
        console.log('Available token==>', token);
      }
      return headers;
    },
  }),
  tagTypes: ['Investment'],
  endpoints: (builder) => ({
    allInvestments: builder.query<any, void>({
      query: () => ({
        url: `/`,
        method: 'GET',
      }),
      providesTags: ['Investment'],
    }),

    investments: builder.query<any, void>({
      query: (userId) => ({
        url: `/user/${userId}`,
        method: 'GET',
      }),
      providesTags: ['Investment'],
    }),

    deposit: builder.mutation<any, any>({
      query: (body) => ({
        url: '/',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['Investment'],
    }),
  }),
});

export const { useInvestmentsQuery, useDepositMutation, useAllInvestmentsQuery } = investmentQuery;
