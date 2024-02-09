import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000" }),
  tagTypes: ['todo'],
  endpoints: (builder) => ({
    //single get query for
    // getTodo: builder.query({
    //   query: () => ({
    //     url: "/task",
    //     method: "GET",
    //   }),
    //   providesTags: ['todo']
    // }),
    // filter get query and with single get query
    getTodo: builder.query({
        query: (priority) => {
            //normal url method 
            // url: '/task',
            // first filter url method 
           // url: `/task?priority=${priority}`,
        //   url: `/task`,
        //   method: "GET",
        //   params: {priority}
          // second get and filter method
        //   params: {priority}

        // filter and get third method 
        const params = new URLSearchParams()
        if(params){
            params.append('priority', priority)
        }
            return {
                url: `/task`,
                method: "GET",
                params: {priority}
            }

        },
        providesTags: ['todo']
      }),
    addTodo: builder.mutation({
        query: (data)=>({
            url: '/task',
            method: "POST",
            body: data
        }),
        invalidatesTags:['todo']
    })
  }),
});


export const {useGetTodoQuery, useAddTodoMutation, } = baseApi