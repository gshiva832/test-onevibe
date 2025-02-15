const celbController = require('../../src/controller/celebrity.controller')
const celbRouter = require('express').Router()


celbRouter.post('/',  celbController.celbController)

module.exports = celbRouter;