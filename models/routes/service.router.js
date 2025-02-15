const serviceRouter = require('express').Router();
const serviceController = require('../controller/service.controller')


serviceRouter.post('/', serviceController.serviceController)

module.exports = serviceRouter;