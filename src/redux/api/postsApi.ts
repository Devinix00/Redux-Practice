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

    addPost: builder.mutation({
      query: ({ title, content }) => ({
        url: "/posts",
        method: "POST",
        body: {
          title,
          content,
        },
      }),
      invalidatesTags: ["posts"],
    }),
  }),
});

export const {
  useGetPostsQuery,
  useGetIndividualPostQuery,
  useAddPostMutation,
} = postsApi;
