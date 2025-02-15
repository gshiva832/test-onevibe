const serviceRouter = require('express').Router();
const serviceController = require('../../src/controller/service.controller')


serviceRouter.post('/', serviceController.serviceController)

module.exports = serviceRouter;