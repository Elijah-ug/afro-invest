import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userSlice = createApi({
  reducerPath: 'user',
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.BASE_URL }),
  endpoints: (builder) => ({
    getUserInfo: builder.query<any, void>({
      query: () => ({
        url: '',
        method: 'GET',
      }),
    }),
  }),
});
export const { useGetUserInfoQuery } = userSlice;
