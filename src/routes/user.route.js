const userRouter = require('express').Router()
const userController = require('../controller/user.controller')

userRouter.post('/',userController.userCreate)
userRouter.get('/',userController.userRead)
userRouter.get('/user/:id',userController.userReads)
userRouter.patch('/user/:id',userController.updateUser)
userRouter.delete('/user/:id',userController.deleteUser)

module.exports = userRouter