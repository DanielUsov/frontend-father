import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const userApi = createApi({
  reducerPath: 'userApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ce68-5-139-225-94.ngrok-free.app/',
    prepareHeaders: (headers) => {
      headers.set('ngrok-skip-browser-warning', 'true');
    },
  }),
  endpoints: (builder) => ({
    createUser: builder.mutation<any, any>({
      query: (loginData) => ({
        url: '/api/v1/users/create',
        method: 'POST',
        body: {
          login: loginData.username,
          possword: loginData.password,
        },
      }),
    }),
  }),
});

export const { useCreateUserMutation } = userApi;
