const express = require('express')
const cors = require('cors')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')

const app = express()
// Middlewares
app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Database
mongoose.connect('mongodb://localhost:27017/reclutando', { useNewUrlParser: true, useFindAndModify: false, useCreateIndex: true })
const connection = mongoose.connection
connection.once('open', function () {
    console.log('Database is connected')
})
// Routes
app.use('/users', require('./routes/user.routes'))
app.use('/vacants', require('./routes/vacants.routes'))
// Run server
const port = process.env.PORT || 5000
app.listen(port, () => console.log('Port is running '+port))