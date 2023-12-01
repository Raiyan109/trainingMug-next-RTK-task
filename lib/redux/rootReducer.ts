/* Instruments */
import { counterSlice } from './slices'
import { photoSlice } from './slices/photosSlice'

export const reducer = {
  counter: counterSlice.reducer,
  photos: photoSlice.reducer,
}
