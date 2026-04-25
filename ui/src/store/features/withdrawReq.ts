import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const withdrawReq = createApi({
  reducerPath: 'withdrawRequestPath',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/withdraws`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
        console.log('Available token==>', token);
      }
      return headers;
    },
  }),
  tagTypes: ['WithdrawRequest'],
  endpoints: (builder) => ({
    sendRequest: builder.mutation<any, number>({
      query: (body) => ({
        url: '/request',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['WithdrawRequest'],
    }),
    requests: builder.query<any, void>({
      query: () => ({
        url: '/requests',
        method: 'GET',
      }),
    }),
  }),
});
export const { useSendRequestMutation, useRequestsQuery } = withdrawReq;
