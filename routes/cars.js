const express = require('express');
const router = express.Router();
const { getCars, createCar, getCar } = require('../controllers/cars');
const path = require('path');
const multer = require('multer');

//Показываем, где хранить загружаемые файлы
const storage = multer.diskStorage({
  destination: './assets/',
  filename: (req, file, cb) => {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
  }
})

const upload = multer({storage});

// @route GET /api/cars
// @des получить все машины
router.get('/', getCars)

// @route GET /api/cars/id
// @des Получить машину по id
router.get('/:id', getCar)

// @route POST /api/cars
// @des Создать машину
router.post('/', upload.single('carImage'), createCar)

module.exports = router;