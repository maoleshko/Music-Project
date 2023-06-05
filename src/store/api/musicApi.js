import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"

export const musicApi = createApi({
  
  reducerPath: "musicApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://painassasin.online/",
    tagTypes: ['Tracks'],
    prepareHeaders: (headers, { getState }) => {
      const token = getState().user.token.access
      if (token) {
        headers.set('Authorization', `Bearer ${token}`)
      }
      return headers
    },
  }),
  endpoints: (builder) => ({
    getAllTracks: builder.query({
      query: () => 'catalog/track/all',
      providesTags: ['Tracks'],      
    }),
    getSelectMusic: builder.query({
      query: (id) => `catalog/selection/${id}`      
    }),
    getLikesTrack: builder.mutation({
      query: () => ({
        url: `/catalog/track/favorite/all/`,
        method: 'GET',
      }),
      invalidatesTags: ['Tracks'],
    }),
    setLike: builder.mutation({
      query: (id) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'POST',
      }),
      invalidatesTags: ['Tracks'],
    }),
    setUnlike: builder.mutation({
      query: (id) => ({
        url: `/catalog/track/${id}/favorite/`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Tracks'],
    }),
  }),
})


export const { useGetAllTracksQuery, useGetSelectMusicQuery, useGetLikesTrackMutation, useSetLikeMutation, useSetUnlikeMutation } = musicApi;