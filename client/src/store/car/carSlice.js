import {createAsyncThunk, createSlice} from '@reduxjs/toolkit'
import carsService from '../services/carsService'

export const getCar = createAsyncThunk('GET_CAR', async (id, thunkAPI) => {
  try {
    return await carsService.getCar(id)
  } catch (error) {
    return thunkAPI.rejectWithValue(error.response.data)
  }
})

const initialState = {
  car: null,
  isError: false,
  isLoading: false,
  message: ''
} 


const carSlice = createSlice({
  name: "car",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getCar.pending, (state) => {
      state.isLoading = true
    })
    builder.addCase(getCar.fulfilled, (state, action) => {
      state.isLoading = false
      state.car = action.payload[0]
    })
    builder.addCase(getCar.rejected, (state, action) => {
      state.isLoading = false
      state.isError = true
      state.message = action.payload.message
      state.car = null
    })
  }
})

export default carSlice.reducer