import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const postsApi = createApi({
  reducerPath: "postsApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  tagTypes: ["posts"],
  endpoints: (builder) => ({
    getPosts: builder.query<IPost[], void>({
      query: () => "/posts",
      providesTags: ["posts"],
    }),
    getIndividualPost: builder.query<IPost, string | undefined>({
      query: (id) => `/posts/${id}`,
      providesTags: ["posts"],
    }),
  }),
});

export const { useGetPostsQuery, useGetIndividualPostQuery } = postsApi;
