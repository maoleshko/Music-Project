import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const musicApi = createApi({
  
  reducerPath: "musicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/",
  }),
  endpoints: (builder) => ({
    getAllMusic: builder.query({
      query: () => 'catalog/track/all'      
    }), 

    getSelectMusic: builder.query({
      query: () => 'catalog/selection'      
    }),

    postReg: builder.mutation({
      query: (body) => ({
        url: 'user/signup/',
        method: 'POST',
        body,
      })      
    }),
    postLogin: builder.mutation({
      query: (body) => ({
        url: 'user/login/',
        method: 'POST',
        body,
      })      
    }),

    postToken: builder.mutation({
      query: (body) => ({
        url: 'user/token/',
        method: 'POST',
        body,
      })      
    }),

  }),
});

export const { useGetAllMusicQuery, useGetSelectMusicQuery, usePostRegMutation, usePostLoginMutation, usePostTokenMutation } = musicApi;