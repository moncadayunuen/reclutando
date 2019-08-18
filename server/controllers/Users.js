const User = require('../models/User')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')

const secretKey = process.env.SECRET_KEY = 'patitoGump'
const SALT_ROUNDS = 10

const getUsersApplicants = async (req, res) => {
  const usersApplicants = await User.find({ roleUser: 'applicant' })
  res.json(usersApplicants)
}

const getUsersBusiness = async (req, res) => {
  const getUsersBusiness = await User.find({ roleUser: 'business' })
  res.json(getUsersBusiness)
}

const getUsers = async (req, res) => {
  const getUsers = await User.find()
  res.json(getUsers)
}

const getUser = async (req, res) => {
  const user = await User.findById(req.params.id)
  res.json(user)
}

const createUser = async (req, res) => {
    const { name, lastname, email, password, roleUser } = req.body
    await User.findOne({ email: email }, async (err, user) => {
      if (err) {
        res.json({
          success: false,
          message: `Error: ${err}`
        })
      } else if (user) {
        res.json({
          success: true,
          message: `There is a user registered with the email ${user.email}`
        })
      } else {
        const newUser = new User({ name, lastname, email, password, roleUser })
        await newUser.save()
        res.json({
          success: true,
          message: `User ${newUser.name} ${newUser.lastname} registered with an email ${newUser.email}`
        })
      }
    })
    
}

const updateUser = (req, res) => {
  let user = {
    name: req.body.name,
    lastname: req.body.lastname,
    email: req.body.email,
    password: req.body.password,
    roleUser: req.body.roleUser
  }
  bcrypt.hash(user.password, SALT_ROUNDS, async (err, hash) => {
    if (err) {
      res.json({
        message: err
      })
    } else {
      user.password = hash
     await User.findOneAndUpdate({ _id: req.params.id }, user)
        .then(data => {
          res.json({ message: 'User updated', user: data})
        })
        .catch(err => res.json({ message: 'Error '+err }))
    }
  })
}

const auth = async (req, res) => {
  const user = {
    email: req.body.email,
    password: req.body.password
  }
  await User.findOne({ email: user.email }, (err, userData) => {
    if (err) {
      res.status(404).json({
        success: false,
        error: err
      })
    } else {
        if (bcrypt.compareSync(req.body.password, userData.password)){
          const token = jwt.sign({ user }, secretKey, function (err, token) {
            if (!err) {
                res.status(200).json({
                    success: true,
                    user: userData,
                    token: token
                })
            } else {
                res.status(500).json({
                    success: false,
                    error: err
                })
            }
          })
        } else {
          res.status(401).json({
            success: false,
            message: 'Incorrect Password'
          })
        }
    }
  })
}

const deleteUser = async (req, res) => {
  await User.findOneAndDelete(req.params.id, (err) => {
    if (err) {
      res.json({
        success: false,
        message: `Error: ${err}`
      })
    } else {
      res.json({
        success: true,
        message: `User deleted successfully`
      })
    }
  })
}

module.exports = { getUsersApplicants, getUsersBusiness, getUsers, getUser, auth, createUser, updateUser, deleteUser }


