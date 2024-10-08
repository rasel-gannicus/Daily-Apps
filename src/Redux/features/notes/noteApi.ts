import { apiSlice } from "../../api/apiSlice";

export const noteApi = apiSlice.injectEndpoints({
  endpoints: (builder : any) => ({
    // --- adding new user to db after registration or login with firebase
    addNote: builder.mutation({
      query: (data : any) => ({
        url: "/addNote",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),

    // --- delete a note or making isDelete property true
    deleteNote: builder.mutation({
      query: (data : any) => ({
        url: "/deleteNote",
        method: "DELETE",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),

    // --- edit a note
    editNote: builder.mutation({
      query: (data : any) => ({
        url: "/editNote",
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["user"],
    }),
  }),
});

export const {
  useAddNoteMutation,
  useDeleteNoteMutation,
  useEditNoteMutation,
} = noteApi;
