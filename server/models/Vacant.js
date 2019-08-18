const mongoose = require('mongoose')
const { Schema } = mongoose

const VacantSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type:String
  },
  daysWork: {
    type: String,
    required: true
  },
  hoursWorks: {
    type: String,
    required: true
  },
  salary: {
    type: String
  },
  note: {
    type: String
  },
  date: {
    type: Date,
    default: Date.now
  }
})

module.exports = mongoose.model('Vacant', VacantSchema)