
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { MovieType, MoviesSliceType } from '../types'

const initialState: MoviesSliceType = {
    movies: [],
    loader: false,
}

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setMovies: (state, { payload }: PayloadAction<Array<MovieType>>) => {
            state.movies = payload;
        },
        removeMovies: (state, { payload }: PayloadAction<number>) => {
            state.movies.filter(item => item.id !== payload)
        },
        setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.loader = payload
        },
    },
})


export const { setMovies, removeMovies, setIsLoading } = moviesSlice.actions

export default moviesSlice