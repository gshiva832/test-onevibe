const mongoose = require("mongoose");

const serviceSchema = new mongoose.Schema({
    // userId:{
    //     type:ObjectId,
    //     required: true
    // },
    celebrityId:{
        type: mongoose.Schema.Types.ObjectId,
        ref:'celebrityCollection',
        required:true
    },
    // adminId:{
    //     type:ObjectId,
    //     required: true
    // },
    serviceType:{
        type:String,
        enum: { values:["videoCall","PersonalMeetUp","VideoBite","BookActor"]}
    },
    // serviceId:{
    //     type:ObjectId,
    //     required: true
    // },
    price:{
        type:Number,
        required: true
    },
    seats:{
        type:Number
    },
    slots:{
        date: {type:Date},
        // time: { type: time},
        // available: { default:true}
    },
    location:{
        type:String
    },
    status:{
        type: String,
        enum: { values:["Active","Inactive"]}
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


module.exports = mongoose.model('service',serviceSchema)