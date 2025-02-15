const mongoose = require('mongoose')

const videoCallServiceSchema = new mongoose.Schema({
    userId:{
        type:ObjectId,
        required:true
    },
    celebrityId:{
        type:ObjectId,
        ref:'celebrityCollection',
    },
    serviceID:{
        type:ObjectId,
        required: true
    },
    slots:{
        date: {type:Date},
        time: { type: time},
        available: { default:true}
    },
    meetingInstructions:{
        type:Strings,
        createdAt: {type: Date,default:Date.now},
        updatedAt:{ type:Date,default:Date.now}
    }

})

module.exports = videoCallServiceSchema;