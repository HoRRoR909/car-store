import {configureStore} from '@reduxjs/toolkit'
import carSlice from './car/carSlice'
import carsSlice from './cars/carsSlice'

export const store = configureStore(({
  reducer: {
    carsReducer: carsSlice,
    carReducer: carSlice
  }
}))