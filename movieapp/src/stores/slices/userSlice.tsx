import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { MovieType, UserSliceType } from '../types'

const initialState: UserSliceType = {
    favoriteMovies: [],
    userName: '',
    isConnected: false
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
        setUserDetails: (state, { payload }: PayloadAction<string>) => {
            state.userName = payload;
        },
        setIsConnected: (state, { payload }: PayloadAction<boolean>) => {
            state.isConnected = payload;
        },
    },
})

export const { setFavorite, setUserDetails, setIsConnected } = userSlice.actions

export default userSlice