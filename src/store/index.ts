import { configureStore } from '@reduxjs/toolkit'
import { tmdbApi } from './tmdb/tmdb.api'
import { tmdbReducer } from './tmdb/tmdb.slice'
import { setupListeners } from '@reduxjs/toolkit/dist/query'


export const store = configureStore({
    reducer: {
        [tmdbApi.reducerPath]: tmdbApi.reducer,
        tmdb: tmdbReducer
    },
    middleware: getDefaultMiddleware => getDefaultMiddleware().concat(tmdbApi.middleware)
})

setupListeners(store.dispatch)

export type RootState = ReturnType<typeof store.getState>
