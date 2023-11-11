import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const roleApi = createApi({
  reducerPath: 'roleApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://ce68-5-139-225-94.ngrok-free.app/',
    prepareHeaders: (headers) => {
      headers.set('ngrok-skip-browser-warning', 'true');
    },
  }),
  endpoints: (builder) => ({
    testget: builder.query<any, any>({
      query: () => '/api/v1/roles',
    }),
  }),
});

export const { useTestgetQuery } = roleApi;
