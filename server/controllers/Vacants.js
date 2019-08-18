const Vacant = require('../models/Vacant')

const getVacants = async (req, res) => {
  const vacants = await Vacant.find()
  res.json(vacants)
}

const getVacant = async (req, res) => {
  const vacant = await Vacant.findById(req.params.id)
  res.json(vacant)
}

const createVacant = async (req, res) => {
  const { title, description, daysWork, hoursWorks, salary, note } = req.body
  const newVacant = new Vacant({ title, description, daysWork, hoursWorks, salary, note })
  await newVacant.save()
    .then(vacantCreated => {
      res.json({
        message: `Vacant created`,
        vacant: vacantCreated
      })
    })
    .catch(err => { 
      res.json({
        message: `Error to create a vacant`,
        error: err
      })
    })
}

const updateVacant = async (req,res) => {
  let updateVacant = {
    title: req.body.title,
    description: req.body.description,
    daysWork: req.body.daysWork,
    hoursWorks: req.body.hoursWorks,
    salary: req.body.salary,
    note: req.body.note
  }
  await Vacant.findOneAndUpdate({ _id: req.params.id }, updateVacant)
    .then(vacantData => {
      res.json({
        message: `Vacant updated`,
        vacant: vacantData
      })
    })
    .catch(err => { 
      res.json({
        message: `Vacant error to update`,
        err: err
      })
    })
}

const deleteVacant = async (req, res) => {
  await Vacant.findByIdAndRemove(req.params.id, (err) => {
    if (err) {
      res.json({
        success: false,
        message: `Error: ${err}`
      })
    } else {
      res.json({
        success: true,
        message: `Vacant deleted successfully`
      })
    }
  })
}

module.exports = { getVacants, getVacant, createVacant, updateVacant, deleteVacant }