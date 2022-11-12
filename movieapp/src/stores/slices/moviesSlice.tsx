
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

import { MovieType, MoviesSliceType } from '../types'

const initialState: MoviesSliceType = {
    movies: [],
    newMovies: [],
    loader: false,
}

const moviesSlice = createSlice({
    name: 'moviesSlice',
    initialState,
    reducers: {
        setMovies: (state, { payload }: PayloadAction<Array<MovieType>>) => {
            state.movies = payload.slice();
            state.newMovies = payload.slice().reverse();
        },
        setIsLoading: (state, { payload }: PayloadAction<boolean>) => {
            state.loader = payload
        },
    },
})


export const { setMovies, setIsLoading } = moviesSlice.actions

export default moviesSlice