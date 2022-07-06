import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import carsService from '../services/carsService'

export const getCars = createAsyncThunk('GET_CARS', async (_, thunkAPI) => {
  try {
    return await carsService.getCars()
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

const initialState = {
  cars: null,
  isError: false,
  isLoading: false,
  message: ''
} 


const carsSlice = createSlice({
  name: "cars",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCars.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getCars.fulfilled, (state, action) => {
      state.isLoading = false
      state.cars = action.payload
    })
    builder.addCase(getCars.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload.message
      state.cars = null
    })
  }
})

export default carsSlice.reducer