import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'baseUrl' }),
  endpoints: (builder) => ({
    login: builder.mutation<any, any>({
      query: () => ({
        url: '/auth/login',
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
