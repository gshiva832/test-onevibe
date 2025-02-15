const mongoose = require('mongoose');

const notificationCollectionSchema = new mongoose.Schema({
    _id:{
        type:ObjectID,
        required: true
    },
    userId:{
        type:ObjectID,
        required: true
    },
    message:{
        type:String,

    },
    isRead:{
        type:Boolean,
        default: false
    },
    createdAt:{
        type:Date,
        default: new Date()
    }
})

module.exports = notificationCollectionSchema;