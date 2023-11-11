import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const authApi = createApi({
  reducerPath: 'authApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
  endpoints: (builder) => ({
    login: builder.mutation<any, any>({
      query: (loginData) => ({
        url: '/api/v1/auth/login',
        method: 'POST',
        body: {
          login: loginData.username,
          possword: loginData.password,
        },
      }),
      transformResponse: (response: any) => {
        localStorage.setItem('token', response?.access_token);
        localStorage.setItem('auth', 'true');
        return response;
      },
    }),
  }),
});

export const { useLoginMutation } = authApi;
