import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { MovieType, UserSliceType } from '../types'

const initialState: UserSliceType = {
    favoriteMovies: [],
    isConnected: null,
}

const userSlice = createSlice({
    name: 'userSlice',
    initialState,
    reducers: {
        setFavorite: (state, { payload }: PayloadAction<MovieType>) => {
            let isNewItem = state.favoriteMovies.filter(m => m.imdbID != payload.imdbID)
            if (isNewItem.length == state.favoriteMovies.length) {
                state.favoriteMovies.push(payload);
            } else {
                state.favoriteMovies = isNewItem
            }
        },
        setIsConnected: (state, { payload }: PayloadAction<boolean>) => {
            state.isConnected = payload;
        },
    },
})

export const { setFavorite, setIsConnected } = userSlice.actions

export default userSlice