const express = require('express')
const monstersRouter = express.Router()
const monstersController = require('../controllers/MonstersController')

/* method: GET */
monstersRouter.get('/', monstersController.getAll)
monstersRouter.get('/search/:param', monstersController.search)
monstersRouter.get('/:id', monstersController.individualCard)

module.exports = monstersRouter