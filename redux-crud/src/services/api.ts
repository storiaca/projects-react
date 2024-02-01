// api.ts
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://jsonplaceholder.typicode.com',
  }),
  endpoints: (builder) => ({
    getItems: builder.query<any[], void>({
      query: () => 'posts',
    }),
    createItem: builder.mutation<any, Partial<any>>({
      query: (newItem) => ({
        url: 'posts',
        method: 'POST',
        body: newItem,
      }),
    }),
    getItem: builder.query<any, number>({
      query: (id) => `posts/${id}`,
    }),
    updateItem: builder.mutation<any, { id: number; data: Partial<any> }>({
      query: ({ id, data }) => ({
        url: `posts/${id}`,
        method: 'PUT',
        body: data,
      }),
    }),
    deleteItem: builder.mutation<any, number>({
      query: (id) => ({
        url: `posts/${id}`,
        method: 'DELETE',
      }),
    }),
  }),
});

export const {
  useGetItemsQuery,
  useCreateItemMutation,
  useGetItemQuery,
  useUpdateItemMutation,
  useDeleteItemMutation,
} = api;
