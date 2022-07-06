import axios from 'axios'

const getCars = async () => {
  const cars = await axios.get('/api/cars') // полный адрес в package.json

  return cars.data
}

const getCar = async (id) => {
  const car = await axios.get(`/api/cars/${id}`) // полный адрес в package.json

  return car.data
}

const carsService = {
  getCars,
  getCar
}

export default carsService