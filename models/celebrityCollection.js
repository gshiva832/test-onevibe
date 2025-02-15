const mongoose = require("mongoose");

const celebritySchema = new mongoose.Schema({
    // _id:{
    //     type:mongoose.ObjectId,
    // },
    // userId:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'userCollection',
    //     required: true
    // },
    // industryId:{
    //     type:mongoose.Schema.Types.ObjectId,
    //     ref:'industryCollection',
    //     required: true
    // },
    category:{
        type:String,
        enum: {
            values:['Actor','Singer','Athlete']
        }
    },
    bio:{
        type:String,
        default:'short bio about the celebrity'
    },
    services:{
        videoCall: { type: Boolean, default: false },
        personalMeetup: { type: Boolean, default: false },
        videoBite: { type: Boolean, default: false },
        booking: { type: Boolean, default: false }
    },
    pricing:{
        videoCall:{ type:Number },
        personalMeetup:{ type: Number},
        videoBite:{type:Number},
        booking:{type:Number}
    },
    availability:[
        {
            type:Date,
            default: new Date(),
            available: true
        }
    ]
})

module.exports = mongoose.model('celebrity',celebritySchema)