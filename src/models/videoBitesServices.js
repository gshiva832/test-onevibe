const mongoose = require("mongoose")

const videoBitesSchema = new mongoose.Schema({
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
    name:{
        type:String
    },
    occasion:{
        type:String,
        enum :{values:['BirthDay','Wedding','NewYear']}
    },
    message:{
        type:String
    },
    date:{
        type:Date,
        default:Date.now
    },
    isVideoReady:{
        type:Boolean,
        default: false
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


module.exports = videoBitesSchema;