import React from 'react'
import { useGetTrendingMoviesListQuery } from '../store/tmdb/tmdb.api'
import MovieCard from '../components/MovieCard'

export function HomePage() {
    const { isLoading, isError, data } = useGetTrendingMoviesListQuery('en-US')
    
    return (
        <main className='bg-stone-900 min-h-screen flex flex-wrap content-start px-11 py-11'>
            {isError && <p className='text-zinc-300 text-center'>Something went wrong...</p>}
            {isLoading && <p className='text-zinc-300 text-center'>Getting catalogue data...</p>}
            {data?.map(movie => <MovieCard movie={movie} key={movie.id} />)}
        </main>
    )
}