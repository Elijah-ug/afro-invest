import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const receiverQuery = createApi({
  reducerPath: 'receiverPath',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/admin`,
  }),
  tagTypes: ['Receiver'],
  endpoints: (builder) => ({
    receiverAddr: builder.query<any, void>({
      query: () => ({
        url: '/receiver',
        method: 'GET',
      }),
      providesTags: ['Receiver'],
    }),
  }),
});
export const { useReceiverAddrQuery } = receiverQuery;
