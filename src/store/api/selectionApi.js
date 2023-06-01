import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

export const trackSelections = createApi({
    reducerPath: 'trackSelections',
    baseQuery: fetchBaseQuery({baseUrl: 'https://painassasin.online/catalog/selection/'}),
    endpoints: (build) => ({
        getTracks: build.query({
            query: () => `2`,
            
        })
    })
});

export const {useGetTracksQuery} = trackSelections;