import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { IMovie, ServerResponse } from '../../models/models';

export const tmdbApi = createApi({
    reducerPath: 'tmdb/api',
    baseQuery: fetchBaseQuery({
        baseUrl: 'https://api.themoviedb.org/',
        prepareHeaders: (headers, { getState }) => {
            headers.set('accept', 'application/json')
            headers.set('Authorization', `Bearer ${process.env.REACT_APP_TOKEN}`)
            return headers;
        }
    }),
    refetchOnFocus: true,
    endpoints: build => ({
        getTrendingMoviesList: build.query<IMovie[], string>({
            query: (lang: string) => ({
                url: '3/trending/movie/week',
                method: 'get',
                params: {
                    language: lang,
                    page: 1
                }
            }),
            transformResponse: (response: ServerResponse<IMovie>, meta, arg) => {
                console.log(response.results)
                return response.results
            }
        }),
        // getGenreList: build.query<IGenre[], string>({
        //     query: (lang: string) => ({
        //         url: '3/genre/movie/list',
        //         method: 'get',
        //         params: {
        //             language: lang
        //         }
        //     }),
        //     transformResponse: (response: ServerResponse<IGenre>, meta, arg) => {
        //         console.log(response.results)
        //         return response.results
        //     }
        // })
    })
})

export const { useGetTrendingMoviesListQuery} = tmdbApi