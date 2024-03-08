import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const toDosApi = createApi({
  reducerPath: "toDosApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:8080" }),
  tagTypes: ["toDos"],
  endpoints: (builder) => ({
    getTodos: builder.query<IToDo[], void>({
      query: () => "/toDos",
      providesTags: ["toDos"],
    }),

    addToDo: builder.mutation({
      query: (newText) => ({
        url: "/toDos",
        method: "POST",
        body: {
          text: newText,
          completed: false,
        },
      }),
      invalidatesTags: ["toDos"],
    }),

    toggleToDo: builder.mutation<
      IToDo,
      { id: number; text: string; completed: boolean }
    >({
      query: ({ id, text, completed }) => ({
        url: `/toDos/${id}`,
        method: "PUT",
        body: { id, text, completed },
      }),
      invalidatesTags: ["toDos"],
    }),

    deleteToDo: builder.mutation<IToDo, number>({
      query: (id) => ({
        url: `/toDos/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["toDos"],
    }),

    updateToDo: builder.mutation<
      IToDo,
      { id: number; text: string; completed: boolean }
    >({
      query: ({ id, text, completed }) => ({
        url: `/toDos/${id}`,
        method: "PUT",
        body: { id, text, completed },
      }),
      invalidatesTags: ["toDos"],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddToDoMutation,
  useToggleToDoMutation,
  useDeleteToDoMutation,
  useUpdateToDoMutation,
} = toDosApi;
