const express = require('express')
const router = express.Router()

const UsersController = require('../controllers/Users')

router.get('/applicants', UsersController.getUsersApplicants)
router.get('/business', UsersController.getUsersBusiness)
router.get('/', UsersController.getUsers)
router.get('/show/:id', UsersController.getUser)
router.post('/auth', UsersController.auth)
router.post('/create', UsersController.createUser)
router.put('/update/:id', UsersController.updateUser)
router.delete('/delete/:id', UsersController.deleteUser)

module.exports = router