const mongoose = require('mongoose');

const carSchema = mongoose.Schema({
  name: {
    type: String,
    require: true
  },
  price: {
    type: Number,
    require: true
  },
  description: {
    type: String,
    require: true
  },
  type: { // это тип кузова
    type: String,
    require: true
  },
  carImage: {
    type: String,
    require: true
  },

});

module.exports = mongoose.model("Car", carSchema);