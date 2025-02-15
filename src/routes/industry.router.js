const industryController = require('../../src/controller/industry.controller')
const industryRouter = require('express').Router();

industryRouter.post('/', industryController.industryController )

module.exports = industryRouter;
