const mongoose = require('mongoose')

const fansCollectionSchema = new mongoose.Schema({
    _id:{
        type:ObjectID,
        required: true
    },
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"userCollection",
        required: true
    },
    celebrityId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'celebrityCollection',
        required: true
    },
    fanId:{
        type:Number,
        unique:true
    },
    validFrom:{
        type:Date,
        default: new Date()
    },
    validTo:{
        type:Date,
        default: new Date()
    },
    createdAt:{
        type:Date,
        default: new Date()
    }
})

module.exports = fansCollectionSchema;