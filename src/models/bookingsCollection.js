const mongoose = require('mongoose')

const bookingSchema = new mongoose.Schema({
    _id:{
        type:ObjectID,
        required: true
    },
    userId:{
        type:ObjectID,
        required: true
    },
    celebrityId:{
        type:ObjectID,
        required: true
    },
    serviceId:{
        type:ObjectID,
        required: true
    },
    status:{
        type:String,
        enum :{ values:['pending','confirmed','canceled']}
    },
    bookingDate:{
        type:Date,
        default: new Date()
    },
    price:{
        type:Number,
        required: true
    },
    paymentId:{
        type:ObjectId,
        required: true
    },
    scheduledDate:{
        type:Date,
        default: new Date()
    },
    paymentStatus:{
        type:String
    },
    createdAt:{
        type:Date,
        default: new Date()
    }
})

module.exports = bookingSchema;