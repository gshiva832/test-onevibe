const mongoose = require('mongoose');

const personalMeetUpSchema = new mongoose.Schema({
    userId:{
          type:ObjectId,
          required:true
    },
    adminId:{
        type:ObjectId,
        required:true
    },
    serviceId:{
        type:ObjectId,
        required: true
    },
    date:{
        type:Date,
        default: Date.now
    },
    location:{
        type:String
    },
    about:{
        type:String
    },
    benefits:{
        type:String
    },
    meetingInstructions:{
        type:String
    },
    termsAndConditions:{
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

module.exports = personalMeetUpSchema;