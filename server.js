const express = require('express');
const mongoose = require('mongoose');
const app = express();
require('dotenv').config();
const port = process.env.PORT || 10000;

// для парсинга application/json
app.use(express.json())

// дял парсинга application/x-www-form-urlencoded
app.use(express.urlencoded({extended: true}))

// Путь к папке с картинками
app.use("/static", express.static(__dirname + "/assets"))

app.use('/api/cars', require('./routes/cars'))

mongoose.connect("mongodb://localhost:27017")
  .then(() => {
    app.listen(port, () => {
      console.log(`App listening on port ${port}`)
    })
  })


