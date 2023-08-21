import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { IMovie } from "../../models/models"

const LS_FAV_KEY = 'rfk'

interface tmdbState {
    favourites: IMovie[]
}

const initialState: tmdbState = {
    favourites: []
}

export const tmdbSlice = createSlice({
    name: 'tmdb',
    initialState,
    reducers: {
        addFavourites(state, action: PayloadAction<IMovie>) {
            state.favourites.push(action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
        },
        removeFavourites(state, action: PayloadAction<number>) {
            state.favourites = state.favourites.filter(f => f.id !== action.payload)
            localStorage.setItem(LS_FAV_KEY, JSON.stringify(state.favourites))
        }
    }
})

export const tmdbActions = tmdbSlice.actions
export const tmdbReducer = tmdbSlice.reducer