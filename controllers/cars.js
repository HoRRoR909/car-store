const Car = require('../models/car');

const getCars = async(req, res) => {
  try {
    const cars = await Car.find();
    res.status(200).json(cars);
  } catch (error) {
    res.status(500).json({message: "Не удалось получить список автомобилей, повторите попытку"});
  }
};

const getCar = async (req, res) => {
  try {
    const car = await Car.find({ _id: req.params.id })
    res.status(200).json(car)
  } catch (error) {
    res.status(400).json({message: "Такой автомобиль не найден"});
  }
}

const createCar = async (req, res) => {
  const errors = {};

  if (!req.body.name) {
    errors.name = { message: "Укажите название" }
  }

  if (!req.body.price) {
    errors.price = { message: "Укажите цену" }
  }

  if (!req.body.description) {
    errors.description = { message: "Укажите описание" }
  }

  // if (req.body.description && req.body.description.length > 700) {
  //   errors.description = { message: "Описание слишком длинное" }
  // }

  if (!req.body.type) {
    errors.type = { message: "Укажите тип кузова" }
  }

  if (!req.file) {
    errors.carImage = { message: "Добавьте фото" }
  }

  if (Object.keys(errors).length > 0) {
    return res.status(400).json(errors);
  }

  try {
    const { name, price, description, type } = req.body;
    const car = await Car.create({
      name, 
      price, 
      description, 
      type,
      carImage: `http://localhost:${process.env.PORT}/static/${req.file.filename}`
    });
    res.status(201).json(car);
  } catch (error) {
    res.status(500).json({message: "Не удалось создать автомобиль, повторите попытку"});
  }
}

module.exports = {
  getCars,
  createCar,
  getCar
}