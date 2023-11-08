import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    login: builder.mutation<any, { username: string; password: string }>({
      query: (loginData) => ({
        url: '/auth/login',
        method: 'POST',
        body: loginData,
      }),
    }),
  }),
});

export const { useLoginMutation } = authApi;
