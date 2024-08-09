import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
export const api_slice = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://jsonplaceholder.typicode.com/' }),
    endpoints: builder => ({
        getPosts: builder.query({
            query: () => '/posts'
        })
    })
})
export const { useGetPostsQuery } = api_slice