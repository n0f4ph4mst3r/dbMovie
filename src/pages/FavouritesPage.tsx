import React from 'react'
import { useAppSelector } from '../hooks/redux'
import MovieCard from '../components/MovieCard'

export function FavouritesPage() {
    const { favourites } = useAppSelector(state => state.tmdb)

    if (favourites.length === 0) return (
        <main className='bg-stone-900 min-h-screen'>
            <p className='text-zinc-300 text-center'>No items.</p>
        </main>
    )

    return (
        <main className='bg-stone-900 min-h-screen flex flex-wrap content-start px-11 py-11'>
            {favourites?.map(movie => <MovieCard movie={movie} key={movie.id} />)}
        </main>
    )
}