import { PayloadAction, createSlice } from '@reduxjs/toolkit'



const userSlice = createSlice({
    name: 'userSlice',
    initialState: false,
    reducers: {
        setIsLoading: (state, { payload }: PayloadAction<boolean>) => payload,
    },
})

export const { setIsLoading } = userSlice.actions

export default userSlice