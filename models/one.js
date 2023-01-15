const mongoose = require('mongoose')
const OneSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  age2: {
    type: Number,
    required: true
  }
})

module.exports = mongoose.model('One', OneSchema)
