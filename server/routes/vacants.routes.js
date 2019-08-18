const express = require('express')
const router = express.Router()

const VacantsController = require('../controllers/Vacants')

router.get('/', VacantsController.getVacants)
router.get('/show/:id', VacantsController.getVacant)
router.post('/create', VacantsController.createVacant)
router.put('/update/:id', VacantsController.updateVacant)
router.delete('/delete/:id', VacantsController.deleteVacant)

module.exports = router