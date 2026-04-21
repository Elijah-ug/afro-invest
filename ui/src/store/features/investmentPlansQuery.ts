import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const investmentPlansQuery = createApi({
  reducerPath: 'investmentPlanPath',
  baseQuery: fetchBaseQuery({
    baseUrl: `${import.meta.env.VITE_BASE_URL}/investment-plans`,
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('token');
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
        console.log('Available token==>', token);
      }
      return headers;
    },
  }),
  tagTypes: ['InvestmentPlan'],
  endpoints: (builder) => ({
    investmentPlans: builder.query<any, void>({
      query: () => ({
        url: '/',
        method: 'GET',
      }),
      providesTags: ['InvestmentPlan'],
    }),
    investmentPlan: builder.query<any, void>({
      query: (id) => ({
        url: `/${id}`,
        method: 'GET',
      }),
      providesTags: ['InvestmentPlan'],
    }),

    // deposit: builder.mutation<any, void>({
    //   query: () => ({
    //     url: '/',
    //     method: 'POST',
    //   }),
    //   invalidatesTags: ['Investment'],
    // }),
  }),
});

export const { useInvestmentPlansQuery, useInvestmentPlanQuery } = investmentPlansQuery;
