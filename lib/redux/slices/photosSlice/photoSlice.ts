/* Core */
import { createSlice, type PayloadAction } from '@reduxjs/toolkit'

/* Instruments */
import { getPhotos } from './thunks'

const initialState: CounterSliceState = {
    value: 0,
    status: 'idle',
    photos: [],
    isLoading: false
}

export const photoSlice = createSlice({
    name: 'photos',
    initialState,
    // The `reducers` field lets us define reducers and generate associated actions
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getPhotos.pending, (state) => {
                state.isLoading = true
                state.photos = []
            })
            .addCase(getPhotos.fulfilled, (state, action) => {
                state.isLoading = false
                state.photos = action.payload
            })
            .addCase(getPhotos.rejected, (state, action) => {
                state.photos = []
                state.isLoading = true
            })
    },
})

/* Types */
export interface CounterSliceState {
    value: number
    status: 'idle' | 'loading' | 'failed'
    photos: []
    isLoading: boolean
}
