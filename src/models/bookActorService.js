const mongoose = require('mongoose');

const bookActorSchema = new mongoose.Schema({
    userId:{
        type:ObjectId,
        required: true
    },
    celebrityId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'celebrityCollection'
    },
    serviceId:{
        type:ObjectId,
        required: true
    },
    eventName:{
        type:String,
    },
    location:{
        type:String
    },
    eventDesc:{
        type:String
    },
    noOfHours:{
        type:Number
    },
    date:{
        type:Date,
        default: new Date()
    },
    time:{
        type:String
    },
    status:{
        type:String,
        enum : {values: ['requested','accept','reject']}
    },
    meetingInstructions:{
        type:String
    },
    createdAt:{
        type:Date,
        default: new Date()
    },
    updatedAt:{
        type:Date,
        default: new Date()
    }

})


module.exports = bookActorSchema;