const mongoose = require('mongoose')
const { Schema } = mongoose
const bcrypt = require('bcrypt')

const SALT_ROUNDS = 10

const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  lastname: {
    type:String
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  roleUser: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  }
})

UserSchema.pre('save', function (next) {
  this.password = bcrypt.hashSync(this.password, SALT_ROUNDS)
  next()
})

module.exports = mongoose.model('User', UserSchema)
