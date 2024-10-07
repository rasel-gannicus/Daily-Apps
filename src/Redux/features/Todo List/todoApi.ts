import { apiSlice } from "../../api/apiSlice";

export const todoApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    // --- add new todo
    addTodo: builder.mutation({
      query: (data) => ({
        url: "/addTodo",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),

    // --- delete a todo
    deleteTodo: builder.mutation({
      query: (data) => ({
        url: "/deleteTodo",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),

    // --- edit a todo
    editTodo: builder.mutation({
      query: (data) => ({
        url: "/editTodo",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useAddTodoMutation,
  useDeleteTodoMutation,
  useEditTodoMutation,
} = todoApi;