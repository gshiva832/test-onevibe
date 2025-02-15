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
    serviceId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'serviceCollection',
        required: true
    },
    bookingId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:'bookingsCollection',
        required: true
    },
    rating:{
        type:Number
    },
    review:{
        type:String
    },
    media:{
        type:[String]
    },
        status:{
        type:String,
        enum:["pending" , "approved" , "rejected"]
    },
    adminResponse: String, 
    createdAt: {
        type:Date,
        default: new Date()
    },
    updatedAt: {
        type:Date,
        default: new Date()
    }
})